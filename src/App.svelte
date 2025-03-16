<script lang="ts">
  import { onMount, setContext } from "svelte";
  import { SvelteMap } from "svelte/reactivity";

  import {
    GetAllCommands,
    FireCommand,
    GetAllDataRefs,
    SubscribeDataRefs,
  } from "./lib/API";
  import {
    type Command,
    TARGET_COMMANDS_SET,
    type TARGET_COMMANDS,
  } from "./lib/Comands";
  import {
    TARGET_DATAREFS,
    TARGET_DATAREFS_SET,
    type DataRef,
  } from "./lib/DataRefs";

  import TerrainOnNd from "./switches/TerrainOnND.svelte";
  import AutoBreak from "./switches/AutoBreak.svelte";
  import BrakeFan from "./switches/BrakeFan.svelte";
  import LandingGearIndicator from "./switches/LandingGearIndicator.svelte";
  import LandingGearLever from "./levers/LandingGearLever.svelte";

  type DataRefName = (typeof TARGET_DATAREFS)[number];
  type CommandName = (typeof TARGET_COMMANDS)[number];

  const valueStore = new SvelteMap<number, unknown>();
  const dataRefStore = new SvelteMap<number, DataRef>();

  const dataRefIndex = new SvelteMap<DataRefName, DataRef["id"]>();
  const commandIndex = new SvelteMap<CommandName, Command>();

  onMount(async () => {
    const dataRefsResponse = await GetAllDataRefs();
    const commandsResponse = await GetAllCommands();

    for (const dataRef of dataRefsResponse.data) {
      if (TARGET_DATAREFS_SET.has(dataRef.name)) {
        dataRefStore.set(dataRef.id, dataRef);
        dataRefIndex.set(dataRef.name as DataRefName, dataRef.id);
      }
    }

    SubscribeDataRefs([...dataRefStore.values()], (dataRefId, newValue) => {
      valueStore.set(+dataRefId, newValue);
    });

    for (const command of commandsResponse.data) {
      if (TARGET_COMMANDS_SET.has(command.name)) {
        commandIndex.set(command.name as CommandName, command);
      }
    }
  });

  function getDaraRefValue<T>(dataRefName: DataRefName): T {
    const id = dataRefIndex.get(dataRefName);
    const value = valueStore.get(id);

    return value as T;
  }

  const onclick = (commandName: CommandName) => () => {
    const command = commandIndex.get(commandName);

    if (command) FireCommand(command);
  };

  let testAllSwitches = $state({ test: false });
  setContext("annunciator_test", testAllSwitches);
</script>

<button
  style="display: block;"
  onclick={() => {
    testAllSwitches.test = !testAllSwitches.test;
  }}>Test</button
>

<TerrainOnNd
  onclick={onclick("toliss_airbus/dispcommands/TerrOnND1Toggle")}
  value={getDaraRefValue<number>("AirbusFBW/TerrainSelectedND1")}
/>
<TerrainOnNd
  onclick={onclick("toliss_airbus/dispcommands/TerrOnND2Toggle")}
  value={getDaraRefValue<number>("AirbusFBW/TerrainSelectedND2")}
/>

<AutoBreak
  onclick={onclick("AirbusFBW/AbrkLo")}
  value={getDaraRefValue<number>("AirbusFBW/AutoBrkLo")}
/>

<AutoBreak
  onclick={onclick("AirbusFBW/AbrkMed")}
  value={getDaraRefValue<number>("AirbusFBW/AutoBrkMed")}
/>

<AutoBreak
  onclick={onclick("AirbusFBW/AbrkMax")}
  value={getDaraRefValue<number>("AirbusFBW/AutoBrkMax")}
/>

<BrakeFan
  onclick={onclick("toliss_airbus/gear/brake_fan")}
  value={[
    getDaraRefValue<number>("AirbusFBW/BrakeFan"),
    ...(getDaraRefValue<number[]>?.("AirbusFBW/BrakeTemperatureArray") ?? []),
  ]}
/>

<LandingGearIndicator
  onclick={() => {}}
  value={getDaraRefValue<number>("AirbusFBW/LeftGearInd")}
/>
<LandingGearIndicator
  onclick={() => {}}
  value={getDaraRefValue<number>("AirbusFBW/NoseGearInd")}
/>
<LandingGearIndicator
  onclick={() => {}}
  value={getDaraRefValue<number>("AirbusFBW/RightGearInd")}
/>

<LandingGearLever
  onclick={onclick("sim/flight_controls/landing_gear_toggle")}
  value={getDaraRefValue<number>("AirbusFBW/GearLever")}
/>
