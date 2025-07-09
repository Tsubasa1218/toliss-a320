<script lang="ts">
    import EcpSwitch from "../components/LEDSwitch.svelte";
    import PlainButton from "../components/PlainButton.svelte";
    import type { CommandName } from "../lib/Comands.ts";
    import type { SwitchProps } from "./types.ts";

    const { onclick, getDataRefValue }: SwitchProps = $props();
</script>

{#snippet ecpSwitch(
    area: string,
    text: string,
    property: CommandName,
    active: boolean,
)}
    <EcpSwitch {active} style="grid-area: {area}" onclick={onclick(property)}
        >{text}</EcpSwitch
    >
{/snippet}

{#snippet plain(area: string, text: string, property: CommandName)}
    <PlainButton style="grid-area: {area}" onclick={onclick(property)}
        >{text}
    </PlainButton>
{/snippet}

<div class="ecp">
    {@render plain("to-config", "T.O. Config", "AirbusFBW/TOConfigPress")}
    <!-- EMER -->

    {@render ecpSwitch(
        "eng",
        "ENG",
        "AirbusFBW/ECP/SelectEnginePage",
        getDataRefValue<number>("AirbusFBW/SDENG") === 1,
    )}
    {@render ecpSwitch(
        "bleed",
        "BLEED",
        "AirbusFBW/ECP/SelectBleedPage",
        getDataRefValue<number>("AirbusFBW/SDBLEED") === 1,
    )}
    {@render ecpSwitch(
        "press",
        "PRESS",
        "AirbusFBW/ECP/SelectPressPage",
        getDataRefValue<number>("AirbusFBW/SDPRESS") === 1,
    )}
    {@render ecpSwitch(
        "elec",
        "ELEC",
        "AirbusFBW/ECP/SelectElecACPage",
        getDataRefValue<number>("AirbusFBW/SDELEC") === 1,
    )}
    {@render ecpSwitch(
        "hyd",
        "HYD",
        "AirbusFBW/ECP/SelectHydraulicPage",
        getDataRefValue<number>("AirbusFBW/SDHYD") === 1,
    )}
    {@render ecpSwitch(
        "fuel",
        "FUEL",
        "AirbusFBW/ECP/SelectFuelPage",
        getDataRefValue<number>("AirbusFBW/SDFUEL") === 1,
    )}

    {@render ecpSwitch(
        "apu",
        "APU",
        "AirbusFBW/ECP/SelectAPUPage",
        getDataRefValue<number>("AirbusFBW/SDAPU") === 1,
    )}
    {@render ecpSwitch(
        "cond",
        "COND",
        "AirbusFBW/ECP/SelectConditioningPage",
        getDataRefValue<number>("AirbusFBW/SDCOND") === 1,
    )}
    {@render ecpSwitch(
        "door",
        "DOOR",
        "AirbusFBW/ECP/SelectDoorOxyPage",
        getDataRefValue<number>("AirbusFBW/SDDOOR") === 1,
    )}
    {@render ecpSwitch(
        "wheel",
        "WHEEL",
        "AirbusFBW/ECP/SelectWheelPage",
        getDataRefValue<number>("AirbusFBW/SDWHEEL") === 1,
    )}
    {@render ecpSwitch(
        "fctl",
        "F/CTL",
        "AirbusFBW/ECP/SelectFlightControlPage",
        getDataRefValue<number>("AirbusFBW/SDFCTL") === 1,
    )}
    {@render plain("all", "ALL", "AirbusFBW/ECAMAll")}

    {@render ecpSwitch(
        "clr-l",
        "CLR",
        "AirbusFBW/ECP/CaptainClear",
        getDataRefValue<number>("AirbusFBW/CLRillum") === 1,
    )}
    {@render ecpSwitch(
        "sts",
        "STS",
        "AirbusFBW/ECP/SelectStatusPage",
        getDataRefValue<number>("AirbusFBW/SDSTATUS") === 1,
    )}
    {@render plain("rcl", "RCL", "AirbusFBW/ECAMRecall")}
    {@render ecpSwitch(
        "clr-r",
        "CLR",
        "AirbusFBW/ECP/CopilotClear",
        getDataRefValue<number>("AirbusFBW/CLRillum") === 1,
    )}
</div>

<style>
    .ecp {
        display: grid;

        grid-template-rows: repeat(5, auto);
        grid-template-columns: repeat(6, auto);
        grid-template-areas: ". to-config . . emer ." "eng bleed press elec hyd fuel" "apu cond door wheel fctl all" "clr-l . sts rcl . clr-r";
        gap: 0.5rem;
        padding: 1rem;
        width: fit-content;

        background-color: var(--color-airbus-bg-blue);
    }
</style>
