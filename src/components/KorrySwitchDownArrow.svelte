<script lang="ts">
    import { getContext } from "svelte";

    const { active, style }: { active: boolean; style: string } = $props();

    const is_annunciator_test = getContext("annunciator_test");
</script>

<svg
    width="100%"
    height="46"
    viewBox="0 0 40 20"
    xmlns="http://www.w3.org/2000/svg"
    class="korry-switch-arrow {(is_annunciator_test.test || active) &&
        'active'}"
    {style}
>
    <polygon points="5,4 20,18 35,4" stroke-width="2" filter="arrow-glow" />
</svg>

<style lang="less">
    .korry-switch-arrow {
        stroke: #161616;
        fill-rule: evenodd;

        &.active {
            stroke: var(--color);
        }
    }
</style>
