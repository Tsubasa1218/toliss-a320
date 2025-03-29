<script lang="ts">
    import { getContext } from "svelte";

    const {
        active,
        activeColorClass,
        children,
    }: { active: boolean; activeColorClass: string; children: any } = $props();

    const is_annunciator_test = getContext("annunciator_test");
</script>

<div
    class={is_annunciator_test.test || active
        ? `${activeColorClass} glow`
        : "text-neutral-800 border-neutral-800"}
>
    {@render children?.()}
</div>

<style>
    .glow {
        text-shadow: 0 0 20px currentColor;
    }
</style>
