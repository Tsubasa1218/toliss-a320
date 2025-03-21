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

    const activeClass = $derived(
        is_annunciator_test.test || active ? "active" : "",
    );
</script>

<button type="button" class="ecp-switch" {style} {onclick}>
    <div class="led {activeClass}"></div>
    <div class="led {activeClass}"></div>
    <div class="led {activeClass}"></div>
    <strong class="text">{@render children()}</strong>
</button>

<style lang="less">
    .ecp-switch {
        box-sizing: border-box;
        border: none;
        border-radius: 8px;
        padding-block: 8px;
        padding-inline: 0;
        width: 60px;

        background-color: #1f1f1f;
        color: white;
        text-transform: capitalize;

        display: flex;
        flex-direction: column;
        gap: 2px;
        align-items: center;

        cursor: pointer;
    }

    .led {
        width: 30px;
        height: 2px;

        background-color: #5a5a5a;

        &.active {
            background-color: var(--airbus-yellow);
        }
    }

    .text {
        margin-top: 2px;
    }
</style>
