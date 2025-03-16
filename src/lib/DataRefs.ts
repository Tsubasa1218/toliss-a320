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

export const TARGET_DATAREFS = [
  // "AirbusFBW/ECPAvail", // This is not the one we want

  "AirbusFBW/TerrainSelectedND1",
  "AirbusFBW/TerrainSelectedND2",

  "AirbusFBW/AutoBrkLo",
  "AirbusFBW/AutoBrkMed",
  "AirbusFBW/AutoBrkMax",

  "AirbusFBW/BrakeFan",
  "AirbusFBW/BrakeTemperatureArray",

  "AirbusFBW/GearLever",
  "AirbusFBW/NoseGearInd",
  "AirbusFBW/LeftGearInd",
  "AirbusFBW/RightGearInd",
] as const;

export const TARGET_DATAREFS_SET = new Set<string>(TARGET_DATAREFS);
