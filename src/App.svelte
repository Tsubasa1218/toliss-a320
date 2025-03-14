<script lang="ts">
  import { GetAllCommands, FireCommand } from "./lib/API";
  import { TARGET_COMMANDS_SET } from "./lib/Comands";
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

<style>
</style>
