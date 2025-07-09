<script lang="ts">
    const { onclick, children } = $props();
</script>

<button
    type="button"
    class="size-40 rounded-md p-2 bg-black cursor-pointer"
    {onclick}
>
    <div class="size-full rounded-[inherit] bg-neutral-800 p-1">
        <div
            class="size-full p-4 rounded-[inherit] flex flex-col justify-around bg-black text-2xl font-bold"
        >
            {@render children()}
        </div>
    </div>
</button>
