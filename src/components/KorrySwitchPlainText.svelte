<script lang="ts">
    import { getContext } from "svelte";

    const {
        active,
        style,
        children,
    }: { active: boolean; style: string; children: any } = $props();

    const is_annunciator_test = getContext("annunciator_test");
</script>

<div
    class="korry-switch-plain-text {is_annunciator_test.test || active
        ? 'active'
        : ''}"
    {style}
>
    {@render children?.()}
</div>

<style lang="less">
    .korry-switch-plain-text {
        text-transform: uppercase;
        padding: 4px;
        color: #161616;

        &.active {
            color: var(--color);
            text-shadow: 0 0 20px var(--color);
        }
    }
</style>
