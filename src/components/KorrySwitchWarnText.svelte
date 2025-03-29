<script lang="ts">
    import { getContext } from "svelte";

    const { active, children }: { active: boolean; children: any } = $props();

    const is_annunciator_test = getContext("annunciator_test");
</script>

<div
    class={is_annunciator_test.test || active
        ? "text-airbus-yellow glow"
        : "text-neutral-800"}
>
    {@render children()}
</div>

<style>
    .glow {
        text-shadow:
            0 0 20px var(--color-airbus-red),
            0 0 25px var(--color-airbus-red);
    }
</style>
