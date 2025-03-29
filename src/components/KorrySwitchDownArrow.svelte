<script lang="ts">
    import { getContext } from "svelte";

    const {
        active,
        activeColorClass,
    }: { active: boolean; activeColorClass: string } = $props();

    const is_annunciator_test = getContext("annunciator_test");
</script>

<svg
    width="100%"
    height="46"
    viewBox="0 0 40 20"
    xmlns="http://www.w3.org/2000/svg"
    class={is_annunciator_test.test || active
        ? activeColorClass
        : "stroke-neutral-800"}
    fill-rule="evenodd"
>
    <polygon points="5,4 20,18 35,4" stroke-width="2" />
</svg>
