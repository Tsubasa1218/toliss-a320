<script lang="ts">
    import TerrainOnNd from "../switches/TerrainOnND.svelte";
    import AutoBreak from "../switches/AutoBreak.svelte";
    import BrakeFan from "../switches/BrakeFan.svelte";
    import LandingGearIndicator from "../switches/LandingGearIndicator.svelte";
    import LandingGearLever from "../levers/LandingGearLever.svelte";
    import type { SwitchProps } from "./types.ts";

    const { onclick, getDataRefValue }: SwitchProps = $props();
</script>

<TerrainOnNd
    onclick={onclick("toliss_airbus/dispcommands/TerrOnND1Toggle")}
    value={getDataRefValue<number>("AirbusFBW/TerrainSelectedND1")}
/>
<TerrainOnNd
    onclick={onclick("toliss_airbus/dispcommands/TerrOnND2Toggle")}
    value={getDataRefValue<number>("AirbusFBW/TerrainSelectedND2")}
/>

<AutoBreak
    onclick={onclick("AirbusFBW/AbrkLo")}
    value={getDataRefValue<number>("AirbusFBW/AutoBrkLo")}
/>

<AutoBreak
    onclick={onclick("AirbusFBW/AbrkMed")}
    value={getDataRefValue<number>("AirbusFBW/AutoBrkMed")}
/>

<AutoBreak
    onclick={onclick("AirbusFBW/AbrkMax")}
    value={getDataRefValue<number>("AirbusFBW/AutoBrkMax")}
/>

<BrakeFan
    onclick={onclick("toliss_airbus/gear/brake_fan")}
    value={[
        getDataRefValue<number>("AirbusFBW/BrakeFan"),
        ...(getDataRefValue<number[]>?.("AirbusFBW/BrakeTemperatureArray") ??
            []),
    ]}
/>

<LandingGearIndicator
    onclick={() => {}}
    value={getDataRefValue<number>("AirbusFBW/LeftGearInd")}
/>
<LandingGearIndicator
    onclick={() => {}}
    value={getDataRefValue<number>("AirbusFBW/NoseGearInd")}
/>
<LandingGearIndicator
    onclick={() => {}}
    value={getDataRefValue<number>("AirbusFBW/RightGearInd")}
/>

<LandingGearLever
    onclick={onclick("sim/flight_controls/landing_gear_toggle")}
    value={getDataRefValue<number>("AirbusFBW/GearLever")}
/>
