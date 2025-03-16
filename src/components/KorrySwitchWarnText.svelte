<script lang="ts">
    import { getContext } from "svelte";

    const { active, children }: { active: boolean; children: any } = $props();

    const is_annunciator_test = getContext("annunciator_test");
</script>

<div
    class="korry-switch-warning-text {(is_annunciator_test.test || active) &&
        'active'}"
>
    {@render children()}
</div>

<style lang="less">
    .korry-switch-warning-text {
        text-transform: uppercase;

        color: #161616;

        &.active {
            color: var(--airbus-yellow);
            text-shadow:
                0 0 20px var(--airbus-red),
                0 0 25px var(--airbus-red);
        }
    }
</style>
