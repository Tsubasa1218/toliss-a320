<script lang="ts">
    import KorrySwitch from "../components/KorrySwitch.svelte";
    import KorrySwitchBoxedText from "../components/KorrySwitchBoxedText.svelte";
    import KorrySwitchFaultText from "../components/KorrySwitchWarnText.svelte";

    const { onclick, value }: { onclick: () => void; value: number } = $props();
</script>

<KorrySwitch {onclick}>
    <KorrySwitchFaultText active={false}>FAULT</KorrySwitchFaultText>
    <KorrySwitchBoxedText
        active={value === 1}
        activeColorClass="text-airbus-green">ON</KorrySwitchBoxedText
    >
</KorrySwitch>
