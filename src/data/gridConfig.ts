import { ProfileBlock } from '../components/blocks/ProfileBlock';
import { SocialsBlock } from '../components/blocks/SocialsBlock';
import { ExperienceBlock } from '../components/blocks/ExperienceBlock';
import { PhotoCollageBlock } from '../components/blocks/PhotoCollageBlock';
import { PlayBlock } from '../components/blocks/PlayBlock';
// import { AboutBlock } from '../components/blocks/AboutBlock';

export type GridItem = {
    id: string;
    Component: React.ComponentType<any>;
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
};

export const gridConfig: GridItem[] = [
    { id: 'profile', Component: ProfileBlock, colSpan: 2, rowSpan: 1 },
    { id: 'socials', Component: SocialsBlock, colSpan: 1, rowSpan: 1 },
    { id: 'experience', Component: ExperienceBlock, colSpan: 2, rowSpan: 2 },
    { id: 'photos', Component: PhotoCollageBlock, colSpan: 1, rowSpan: 1 },
    { id: 'misc', Component: PlayBlock, colSpan: 1, rowSpan: 1 },
    // { id: 'about', Component: AboutBlock, colSpan: 2, rowSpan: 1 },
];
