export type DataRef = {
    id: number;
    name: string;
    value_type:
        | "float"
        | "double"
        | "int"
        | "int_array"
        | "float_array"
        | "data"; // Base64
};

export const MPI_TERR_ON_ND_REFS = new Map<string, number | null>(
    [
        ["AirbusFBW/TerrainSelectedND1", null],
        ["AirbusFBW/TerrainSelectedND2", null],
    ],
);

export const MPI_AUTO_BRK_REFS = new Map<string, number | null>(
    [
        ["AirbusFBW/ABrkLoButtonAnim", null],
        ["AirbusFBW/ABrkMedButtonAnim", null],
        ["AirbusFBW/ABrkMaxButtonAnum", null],
    ],
);

export const MPI_LDG_GEAR_REFS = new Map<string, number | null>(
    [
        ["AirbusFBW/GearLeverAnim", null],
    ],
);

export const MPI_BRK_FAN_REFS = new Map<string, number | null>(
    [
        ["AirbusFBW/BrakeFanSwitchAnim", null],
    ],
);

export const MPI_NW_STEERING_REFS = new Map<string, number | null>(
    [
        ["AirbusFBW/NWSSwitchAnum", null],
    ],
);
