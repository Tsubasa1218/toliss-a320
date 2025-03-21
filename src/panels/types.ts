import { CommandName } from "../lib/Comands.ts";
import { DataRefName } from "../lib/DataRefs.ts";

export type SwitchProps = {
  onclick: (commandName: CommandName) => () => void;
  getDataRefValue: <T>(dataRefName: DataRefName) => T;
};
