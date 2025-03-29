<script lang="ts">
    import { getContext } from "svelte";

    const {
        active,
        activeColorClass,
        children,
    }: { active: boolean; activeColorClass: string; children: any } = $props();

    let is_annunciator_test = getContext("annunciator_test");
</script>

<div
    class="rounded-sm p-1 border-4 {is_annunciator_test.test || active
        ? `${activeColorClass} border-current glow`
        : 'text-neutral-800 border-neutral-800'}"
>
    {@render children?.()}
</div>

<style>
    .glow {
        text-shadow: 0 0 20px currentColor;
        box-shadow:
            0 0 20px currentColor,
            inset 0 0 20px currentColor;
    }
</style>
