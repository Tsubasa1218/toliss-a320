<script lang="ts">
</script>

<button type="button" class="korry-switch">
    <div class="korry-switch-bevel">
        <div class="korry-switch-bg">
            <slot />
        </div>
    </div>
</button>

<style lang="less">
    .korry-switch {
        box-sizing: border-box;
        padding: 8px;

        width: 10rem;
        height: 10rem;

        border: none;
        border-radius: 8px;
        background-color: black;
    }

    .korry-switch-bevel {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: #272629;
        padding: 8px;
        box-shadow:
            0px 0px 6px #1f1f1f,
            -0px -0px 6px #1f1f1f;
    }

    .korry-switch-bg {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: black;
        box-shadow:
            inset 5px 5px 10px #0d0d0d,
            inset -5px -5px 10px #0d0d0d;

        color: white;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        padding: 16px;

        font-size: x-large;
        font-weight: bolder;
    }
</style>
