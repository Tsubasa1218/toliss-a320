<script lang="ts">
  import { onMount } from "svelte";
  import { SvelteMap } from "svelte/reactivity";

  import {
    GetAllCommands,
    FireCommand,
    GetAllDataRefs,
    SubscribeDataRefs,
  } from "./lib/API";
  import { TARGET_COMMANDS_SET } from "./lib/Comands";
  import { TARGET_DATAREFS_SET, type DataRef } from "./lib/DataRefs";
  import KorrySwitch from "./components/KorrySwitch.svelte";

  const valueStore = new SvelteMap<number, unknown>();
  const dataRefStore = new SvelteMap<number, DataRef>();

  onMount(async () => {
    const dataRefsResponse = await GetAllDataRefs();

    for (const dataRef of dataRefsResponse.data) {
      if (TARGET_DATAREFS_SET.has(dataRef.name)) {
        dataRefStore.set(dataRef.id, dataRef);
      }
    }

    SubscribeDataRefs([...dataRefStore.values()], (dataRefId, newValue) => {
      valueStore.set(+dataRefId, newValue);
    });
  });
</script>

{#await GetAllCommands()}
  <p>Loading All Commands</p>
{:then commandsResponse}
  <ul>
    {#each commandsResponse.data as command}
      {#if TARGET_COMMANDS_SET.has(command.name)}
        <li>
          <button
            onclick={() => {
              FireCommand(command);
            }}>{command.name} - {command.description}</button
          >
        </li>
      {/if}
    {/each}
  </ul>
{/await}

{#each valueStore.entries() as [id, value]}
  <p>{dataRefStore.get(id).name} - {value}</p>
{/each}

<KorrySwitch />

<style>
</style>
