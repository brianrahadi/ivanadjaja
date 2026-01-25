import { ProfileBlock } from '../components/blocks/ProfileBlock';
import { SocialsBlock } from '../components/blocks/SocialsBlock';

export type GridItem = {
    id: string;
    Component: React.ComponentType<any>;
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
};

export const gridConfig: GridItem[] = [
    { id: 'profile', Component: ProfileBlock, colSpan: 2, rowSpan: 1 },
    // { id: 'about', Component: AboutBlock, colSpan: 2, rowSpan: 1 },
    { id: 'socials', Component: SocialsBlock, colSpan: 1, rowSpan: 1 },
    // { id: 'stack', Component: TechStackBlock, colSpan: 1, rowSpan: 1 },
];
