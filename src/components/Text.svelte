<script lang="ts">
    const { children, style = "" } = $props();
</script>

<span
    class="font-normal text-shadow-lg text-shadow-airbus-backlight text-4xl text-white"
    {style}
>
    {@render children()}
</span>
