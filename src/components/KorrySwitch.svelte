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

<!-- <style lang="less">
    .korry-switch-bevel {
        box-shadow:
            0px 0px 6px #1f1f1f,
            -0px -0px 6px #1f1f1f;
    }

    .korry-switch-bg {
        box-shadow:
            inset 5px 5px 10px #0d0d0d,
            inset -5px -5px 10px #0d0d0d;
    }
</style> -->
