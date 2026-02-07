import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    wells: defineTable({
        row: v.number(),
        col: v.number(),
        colorIndex: v.number(), // index into COLORS array (0-4)
    }).index("by_position", ["row", "col"]),
});
