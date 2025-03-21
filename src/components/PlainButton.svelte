<script lang="ts">
    type PlainButtonProps = {
        children: any;
        style?: string;
        onclick: () => void;
    };
    const { children, style, onclick }: PlainButtonProps = $props();
</script>

<button type="button" class="ecp-switch" {style} {onclick}>
    {@render children()}
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
        text-align: center;
        font-weight: bold;

        cursor: pointer;
    }
</style>
