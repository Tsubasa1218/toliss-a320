<script lang="ts">
</script>

<div class="korry-switch-boxed-text active">ON</div>

<style lang="less">
    .korry-switch-boxed-text {
        text-transform: uppercase;
        border-radius: 4px;
        padding: 4px;
        color: #161616;
        border: 4px solid #161616;

        &.active {
            color: var(--airbus-green);
            border-color: var(--airbus-green);
            text-shadow: 0 0 20px green;
            box-shadow:
                0 0 20px green,
                inset 0 0 20px green;
        }
    }
</style>
