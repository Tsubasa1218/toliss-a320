export type Command = {
    id: number;
    name: string;
    description: string;
};

export const PEDESTAL_ECP_COMMANDS = new Map<string, number | null>(
    [
        ["AirbusFBW/ECP/SelectEnginePage", null],
        ["AirbusFBW/ECP/SelectBleedPage", null],
        ["AirbusFBW/ECP/SelectPressPage", null],
        ["AirbusFBW/ECP/SelectElecACPage", null],
        ["AirbusFBW/ECP/SelectHydraulicPage", null],
        ["AirbusFBW/ECP/SelectFuelPage", null],
        ["AirbusFBW/ECP/SelectAPUPage", null],
        ["AirbusFBW/ECP/SelectConditionPage", null],
        ["AirbusFBW/ECP/SelectDoorOxyPage", null],
        ["AirbusFBW/ECP/SelectWheelPage", null],
        ["AirbusFBW/ECP/SelectFlightControlPage", null],
        ["AirbusFBW/ECP/SelectStatusPage", null],
        ["AirbusFBW/ECP/CaptainClear", null],
        ["AirbusFBW/ECP/CopilotClear", null],

        ["AirbusFBW/EmerCancel", null],
        ["AirbusFBW/TOConfigPress", null],
        ["AirbusFBW/ECAMAll", null],
        ["AirbusFBW/ECAMRecall", null],
    ],
);

export const MPI_TERR_ON_ND_COMMANDS = new Map<string, number | null>(
    [
        ["toliss_airbus/dispcommands/TerrOnND1Toggle", null],
        ["toliss_airbus/dispcommands/TerrOnND2Toggle", null],
    ],
);

export const MPI_AUTO_BRK_COMMANDS = new Map<string, number | null>(
    [
        ["AirbusFBW/AbrkLo", null],
        ["AirbusFBW/AbrkMed", null],
        ["AirbusFBW/AbrkMax", null],
    ],
);

export const MPI_LDG_GEAR_COMMANDS = new Map<string, number | null>(
    [
        /* Verify these are valid for Toliss */
        ["sim/flight_controls/landing_gear_down", null],
        ["sim/flight_controls/landing_gear_up", null],
    ],
);

export const MPI_BRK_FAN_COMMANDS = new Map<string, number | null>(
    [
        ["toliss_airbus/gear/brake_fan", null],
    ],
);
export const MPI_NW_STEERING_COMMANDS = new Map<string, number | null>(
    [
        ["sim/flight_controls/nwheel_steer_toggle", null],
    ],
);
