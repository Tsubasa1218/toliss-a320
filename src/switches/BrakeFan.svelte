<script lang="ts">
    import KorrySwitch from "../components/KorrySwitch.svelte";
    import KorrySwitchBoxedText from "../components/KorrySwitchBoxedText.svelte";
    import KorrySwitchFaultText from "../components/KorrySwitchWarnText.svelte";

    const { onclick, value }: { onclick: () => void; value: number[] } =
        $props();

    $inspect(value);
</script>

<KorrySwitch {onclick}>
    <KorrySwitchFaultText active={value.slice(1).some((temp) => temp > 100)}
        >HOT</KorrySwitchFaultText
    >
    <KorrySwitchBoxedText active={value[0] === 1} style="--color: white;"
        >ON</KorrySwitchBoxedText
    >
</KorrySwitch>
