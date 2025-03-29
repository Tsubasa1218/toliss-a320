<script lang="ts">
    import { getContext } from "svelte";

    type LEDSwitchProps = {
        children: any;
        active: boolean;
        style?: string;
        onclick: () => void;
    };

    const { children, active, style, onclick }: LEDSwitchProps = $props();

    let is_annunciator_test = getContext("annunciator_test");
</script>

{#snippet LED()}
    <div
        class="w-8 h-0.5 {is_annunciator_test.test || active
            ? 'bg-airbus-yellow'
            : 'bg-neutral-700'}"
    ></div>
{/snippet}

<button
    type="button"
    class="flex flex-col gap-0.5 items-center rounded-md bg-neutral-900 text-white text-center font-semibold cursor-pointer w-16 py-2 text-base leading-none"
    {style}
    {onclick}
>
    {@render LED()}
    {@render LED()}
    {@render LED()}
    <strong class="mt-0.5">{@render children()}</strong>
</button>
