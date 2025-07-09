<script lang="ts">
    import TerrainOnNd from "../switches/TerrainOnND.svelte";
    import AutoBreak from "../switches/AutoBreak.svelte";
    import BrakeFan from "../switches/BrakeFan.svelte";
    import LandingGearIndicator from "../switches/LandingGearIndicator.svelte";
    import LandingGearLever from "../levers/LandingGearLever.svelte";
    import Text from "../components/Text.svelte";
    import type { SwitchProps } from "./types.ts";

    const { onclick, getDataRefValue }: SwitchProps = $props();

    const BORDER_CLASS = "rounded-md border-4 border-airbus-backlight";
    const TEXT_CLASS = "text-align: center; display: block;";
</script>

<div class="mip">
    <div style="grid-area: ldg-gear">
        <Text style={TEXT_CLASS}>LDG GEAR</Text>

        <div class={BORDER_CLASS}>
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
        </div>
    </div>

    <div style="grid-area: brk-fan">
        <Text style={TEXT_CLASS}>BRK FAN</Text>
        <div class={BORDER_CLASS}>
            <BrakeFan
                onclick={onclick("toliss_airbus/gear/brake_fan")}
                value={[
                    getDataRefValue<number>("AirbusFBW/BrakeFan"),
                    ...(getDataRefValue<number[]>?.(
                        "AirbusFBW/BrakeTemperatureArray",
                    ) ?? []),
                ]}
            />
        </div>
    </div>

    <div style="grid-area: auto-brk">
        <Text style={TEXT_CLASS}>AUTO/BRK</Text>
        <div class="inline-block {BORDER_CLASS}">
            <AutoBreak
                onclick={onclick("AirbusFBW/AbrkLo")}
                value={getDataRefValue<number>("AirbusFBW/AutoBrkLo")}
            />

            <AutoBreak
                onclick={onclick("AirbusFBW/AbrkMed")}
                value={getDataRefValue<number>("AirbusFBW/AutoBrkMed")}
            />
        </div>

        <div class="inline-block w-4"></div>

        <div class="inline-block {BORDER_CLASS}">
            <AutoBreak
                onclick={onclick("AirbusFBW/AbrkMax")}
                value={getDataRefValue<number>("AirbusFBW/AutoBrkMax")}
            />
        </div>
    </div>

    <div style="grid-area: terr-left; justify-self: start;">
        <Text style="text-align: center; display: block;">TERR ON ND</Text>

        <div class={BORDER_CLASS}>
            <TerrainOnNd
                onclick={onclick("toliss_airbus/dispcommands/TerrOnND1Toggle")}
                value={getDataRefValue<number>("AirbusFBW/TerrainSelectedND1")}
            />
        </div>
    </div>

    <div style="grid-area: terr-right">
        <Text style="text-align: center; display: block;">TERR ON ND</Text>
        <div class={BORDER_CLASS}>
            <TerrainOnNd
                onclick={onclick("toliss_airbus/dispcommands/TerrOnND2Toggle")}
                value={getDataRefValue<number>("AirbusFBW/TerrainSelectedND2")}
            />
        </div>
    </div>
</div>

<LandingGearLever
    onclick={onclick("sim/flight_controls/landing_gear_toggle")}
    value={getDataRefValue<number>("AirbusFBW/GearLever")}
/>

<style>
    .mip {
        display: grid;

        grid-template-areas: "ldg-gear brk-fan" "auto-brk ." "terr-left terr-right";
        justify-items: end;

        width: fit-content;

        padding: 1rem;

        background-color: var(--color-airbus-bg-blue);
    }
</style>
