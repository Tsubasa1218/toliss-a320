<script lang="ts">
    import type { SwitchProps } from "./types.ts";

    const { getDataRefValue }: SwitchProps = $props();
</script>

<div>TCAS Status {getDataRefValue("AirbusFBW/TCASStatus")}</div>
<div>XPDR TCAS Mode (ON/AUTO) {getDataRefValue("AirbusFBW/XPDRTCASMode")}</div>
<div>XPDR TCAS System (1/2) {getDataRefValue("AirbusFBW/XPDRSystem")}</div>
<div>
    XPDR TCAS Alt Select (ABV/N/BLW) {getDataRefValue(
        "AirbusFBW/XPDRTCASAltSelect",
    )}
</div>
<div>
    XPDR TCAS Power (STBY/XPDR/TA Only/TARA) {getDataRefValue(
        "AirbusFBW/XPDRPower",
    )}
</div>
