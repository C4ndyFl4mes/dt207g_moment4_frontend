export interface Boss {
    name: string;
    damage: {
        classic: string;
        expert: string;
        master: string;
    };
    heatlh: {
        classic: string;
        expert: string;
        master: string;
    };
    defense: {
        classic: string;
        expert: string;
        master: string;
    };
    environment: Array<string>;
}
