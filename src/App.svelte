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
    type CommandName,
  } from "./lib/Comands";
  import {
    TARGET_DATAREFS_SET,
    type DataRefName,
    type DataRef,
  } from "./lib/DataRefs";
  import Mip from "./panels/MIP.svelte";
  import Ecp from "./panels/ECP.svelte";

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

  function getDataRefValue<T>(dataRefName: DataRefName): T {
    const id = dataRefIndex.get(dataRefName);
    const value = valueStore.get(id);

    return value as T;
  }

  const onclick = (commandName: CommandName) => () => {
    const command = commandIndex.get(commandName);
    console.log(commandName, command);

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

<Mip {onclick} {getDataRefValue} />
<Ecp {onclick} {getDataRefValue} />
