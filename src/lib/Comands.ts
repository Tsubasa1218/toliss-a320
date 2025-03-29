export type Command = {
  id: number;
  name: string;
  description: string;
};

const PEDESTAL_ECP_COMMANDS = [
  "AirbusFBW/ECP/SelectEnginePage",
  "AirbusFBW/ECP/SelectBleedPage",
  "AirbusFBW/ECP/SelectPressPage",
  "AirbusFBW/ECP/SelectElecACPage",
  "AirbusFBW/ECP/SelectHydraulicPage",
  "AirbusFBW/ECP/SelectFuelPage",
  "AirbusFBW/ECP/SelectAPUPage",
  "AirbusFBW/ECP/SelectConditioningPage",
  "AirbusFBW/ECP/SelectDoorOxyPage",
  "AirbusFBW/ECP/SelectWheelPage",
  "AirbusFBW/ECP/SelectFlightControlPage",
  "AirbusFBW/ECP/SelectStatusPage",
  "AirbusFBW/ECP/CaptainClear",
  "AirbusFBW/ECP/CopilotClear",

  "AirbusFBW/EmerCancel",
  "AirbusFBW/TOConfigPress",
  "AirbusFBW/ECAMAll",
  "AirbusFBW/ECAMRecall",
] as const;

const PEDESTAL_TRANSPONDER_COMMANDS = [
  "AirbusFBW/ATCCodeKey1",
  "AirbusFBW/ATCCodeKey2",
  "AirbusFBW/ATCCodeKey3",
  "AirbusFBW/ATCCodeKey4",
  "AirbusFBW/ATCCodeKey5",
  "AirbusFBW/ATCCodeKey6",
  "AirbusFBW/ATCCodeKey7",
  "AirbusFBW/ATCCodeKey0",
  "AirbusFBW/ATCCodeKeyCLR",
] as const;

const MPI_TERR_ON_ND_COMMANDS = [
  "toliss_airbus/dispcommands/TerrOnND1Toggle",
  "toliss_airbus/dispcommands/TerrOnND2Toggle",
] as const;

const MPI_AUTO_BRK_COMMANDS = [
  "AirbusFBW/AbrkLo",
  "AirbusFBW/AbrkMed",
  "AirbusFBW/AbrkMax",
] as const;

const MPI_LDG_GEAR_COMMANDS = [
  "sim/flight_controls/landing_gear_toggle",
] as const;

const MPI_BRK_FAN_COMMANDS = [
  "toliss_airbus/gear/brake_fan",
] as const;

const MPI_NW_STEERING_COMMANDS = [
  //   "sim/flight_controls/nwheel_steer_toggle",
] as const;

export const TARGET_COMMANDS = [
  ...PEDESTAL_ECP_COMMANDS,
  ...PEDESTAL_TRANSPONDER_COMMANDS,

  ...MPI_TERR_ON_ND_COMMANDS,
  ...MPI_AUTO_BRK_COMMANDS,
  ...MPI_LDG_GEAR_COMMANDS,
  ...MPI_BRK_FAN_COMMANDS,
  ...MPI_NW_STEERING_COMMANDS,
] as const;
export const TARGET_COMMANDS_SET = new Set<string>(TARGET_COMMANDS);
export type CommandName = (typeof TARGET_COMMANDS)[number];
