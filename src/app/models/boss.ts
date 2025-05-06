export interface Boss {
    name: string;
    damage: {
        classic: string;
        expert: string;
        master: string;
    };
    health: {
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
    rowID?: number;
}
