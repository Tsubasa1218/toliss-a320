<script lang="ts">
    import KorrySwitch from "../components/KorrySwitch.svelte";
    import KorrySwitchPlainText from "../components/KorrySwitchPlainText.svelte";
    import KorrySwitchDownArrow from "../components/KorrySwitchDownArrow.svelte";

    const { onclick, value }: { onclick: () => void; value: number } = $props();

    const UNLOCKED = 1;
    const DOWN = 2;
    const BOTH = 3;
</script>

<KorrySwitch {onclick}>
    <KorrySwitchPlainText
        active={value === UNLOCKED || value === BOTH}
        activeColorClass="text-airbus-red">UNLK</KorrySwitchPlainText
    >
    <KorrySwitchDownArrow
        active={value === DOWN || value === BOTH}
        activeColorClass="stroke-airbus-green"
    />
</KorrySwitch>
