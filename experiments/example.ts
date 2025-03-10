


type RestDatarefResponse = {
    data: DataRef[];
};

type RestDataRefValueResponse<T> = {
    data: T;
};

const REST_URL = "http://localhost:8086/api/v2";
const WS_URL = "ws://localhost:8086/api/v2";

async function GetAllDataRefs(): Promise<RestDatarefResponse> {
    const response = await fetch(`${REST_URL}/datarefs`);
    return response.json();
}

async function GetDataRefValue<T>(
    dr: DataRef,
): Promise<RestDataRefValueResponse<T>> {
    const response = await fetch(`${REST_URL}/datarefs/${dr.id}/value`);

    return response.json();
}

async function SetDataRefValue<T extends number | number[] | string>(
    dr: DataRef,
    value: T,
): Promise<Response["status"]> {
    const response = await fetch(`${REST_URL}/datarefs/${dr.id}/value`, {
        method: "PATCH",
        body: JSON.stringify({ data: value }),
    });

    return response.status;
}

async function GetAllCommands() {
    const response = await fetch(`${REST_URL}/commands`);
    return response.json();
}

// GetAllCommands().then(data => {
//     const parsed = JSON.stringify(data, null, 4);
//     const encoder = new TextEncoder();
//     const encodedData = encoder.encode(parsed);

//     return Deno.writeFile("commands.json", encodedData);
// }).then(() => {
//     console.log("Finished");
// })

async function main() {
    const targetDataref = "AirbusFBW/Pack1Switch";

    const allDataRefs = await GetAllDataRefs();

    const pack1SwitchDR = allDataRefs.data.find((dr) =>
        dr.name === targetDataref
    )!;

    const pack1SwitchValue = await GetDataRefValue<1 | 0>(pack1SwitchDR);

    if (pack1SwitchValue.data === 0) {
        SetDataRefValue<number>(pack1SwitchDR, 1);
    }
    if (pack1SwitchValue.data === 1) {
        SetDataRefValue<number>(pack1SwitchDR, 0);
    }
}

main();

// const ws = new WebSocket("ws://localhost:8000");

// ws.addEventListener("open", () => {
//     console.log("Socket has been connected!");
// });

// ws.addEventListener("message", event => {
//     if(event.data === "ping") {
//         console.log(event.data);
//         ws.send("pong");
//     }
// })
