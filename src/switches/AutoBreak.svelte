<script lang="ts">
    import KorrySwitch from "../components/KorrySwitch.svelte";
    import KorrySwitchBoxedText from "../components/KorrySwitchBoxedText.svelte";
    import KorrySwitchPlainText from "../components/KorrySwitchPlainText.svelte";

    const { onclick, value }: { onclick: () => void; value: number } = $props();

    const ACTIVE = 1;
    const DECEL = 2;
</script>

<KorrySwitch {onclick}>
    <KorrySwitchPlainText
        active={value === DECEL}
        activeColorClass="text-airbus-green"
    >
        DECEL
    </KorrySwitchPlainText>
    <KorrySwitchBoxedText
        active={value === ACTIVE || value === DECEL}
        activeColorClass="text-airbus-blue">ON</KorrySwitchBoxedText
    >
</KorrySwitch>
