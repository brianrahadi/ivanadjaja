import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get all wells - real-time subscription
export const getAll = query({
    args: {},
    handler: async (ctx) => {
        const wells = await ctx.db.query("wells").collect();
        // Convert to a map for easy lookup: "row-col" -> colorIndex
        const wellMap: Record<string, number> = {};
        for (const well of wells) {
            wellMap[`${well.row}-${well.col}`] = well.colorIndex;
        }
        return wellMap;
    },
});

// Set or toggle a well's color
export const setWell = mutation({
    args: {
        row: v.number(),
        col: v.number(),
        colorIndex: v.number(),
    },
    handler: async (ctx, args) => {
        const { row, col, colorIndex } = args;

        // Find existing well at this position
        const existing = await ctx.db
            .query("wells")
            .withIndex("by_position", (q) => q.eq("row", row).eq("col", col))
            .first();

        if (existing) {
            // If same color, remove it (toggle off)
            if (existing.colorIndex === colorIndex) {
                await ctx.db.delete(existing._id);
            } else {
                // Otherwise update to new color
                await ctx.db.patch(existing._id, { colorIndex });
            }
        } else {
            // Create new well
            await ctx.db.insert("wells", { row, col, colorIndex });
        }
    },
});

// Clear all wells
export const clearAll = mutation({
    args: {},
    handler: async (ctx) => {
        const wells = await ctx.db.query("wells").collect();
        for (const well of wells) {
            await ctx.db.delete(well._id);
        }
    },
});
