<script lang="ts">
    type PlainButtonProps = {
        children: any;
        style?: string;
        onclick: () => void;
    };
    const { children, style, onclick }: PlainButtonProps = $props();
</script>

<button
    type="button"
    class="rounded-md bg-neutral-900 text-white text-center font-semibold cursor-pointer w-16 py-2 text-base leading-none"
    {style}
    {onclick}
>
    {@render children()}
</button>
