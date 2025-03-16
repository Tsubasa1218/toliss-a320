<script lang="ts">
    const { onclick, value }: { onclick: () => void; value: number } = $props();

    const UP = 0;
    const DOWN = 1;
</script>

<div class="landing-gear">
    <button
        {onclick}
        class="lever"
        aria-label="Landing Gear Lever {value === 0 ? 'Up' : 'Down'}"
    >
        <div class="divider"></div>
        <div
            class="knob {value === DOWN && 'down'}"
            style="grid-column: 1 / span 3;"
        ></div>
        <div
            class="knob {value === DOWN && 'down'}"
            style="grid-column: 4 / span 3"
        ></div>
    </button>
    <div class="text">
        <div>UP</div>
        <div>DOWN</div>
    </div>
</div>

<style lang="less">
    .landing-gear {
        display: flex;
        height: 300px;
        padding: 30px;
        background-color: var(--airbus-bg-blue);

        & .lever {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            grid-template-columns: repeat(6, 10px);
            padding: 10px;

            gap: 4px;
            border: none;
            background-color: var(--airbus-fg-blue);

            & .knob {
                background-color: black;
                border: 4px solid #1f1f1f;
                border-radius: 2px;
                grid-row: 1 / 2;

                &.down {
                    grid-row: 3 / -1;
                }
            }

            & .divider {
                background-color: rgb(7, 7, 7);
                grid-column: 2 / span 4;
                grid-row: 1 / -1;
            }
        }

        & .text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: var(--airbus-backlight);
            font-size: large;
            text-align: center;
        }
    }
</style>
