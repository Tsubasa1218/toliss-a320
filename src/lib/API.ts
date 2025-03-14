import { type Command } from "./Comands.ts";
import { type DataRef } from "./DataRefs.ts";

type RestResponse<T> = {
  data: T[];
};

type RestDataRefValueResponse<T> = {
  data: T;
};

const REST_URL = "http://localhost:8086/api/v2";
const WS_URL = "ws://localhost:8086/api/v2";

export async function GetAllDataRefs(): Promise<RestResponse<DataRef>> {
  const response = await fetch(`${REST_URL}/datarefs`);
  return response.json();
}

export async function GetDataRefValue<T>(
  dr: DataRef,
): Promise<RestDataRefValueResponse<T>> {
  const response = await fetch(`${REST_URL}/datarefs/${dr.id}/value`);

  return response.json();
}

export async function SetDataRefValue<T extends number | number[] | string>(
  dr: DataRef,
  value: T,
): Promise<Response["status"]> {
  const response = await fetch(`${REST_URL}/datarefs/${dr.id}/value`, {
    method: "PATCH",
    body: JSON.stringify({ data: value }),
  });

  return response.status;
}

export async function GetAllCommands(): Promise<RestResponse<Command>> {
  const response = await fetch(`${REST_URL}/commands`);
  return response.json();
}

export function FireCommand(command: Command) {
  fetch(`${REST_URL}/command/${command.id}/activate`, {
    method: "POST",
    body: JSON.stringify({ duration: 0 }),
  });
}

let reqCount = 0;

export function SubscribeDataRefs(
  datarefs: DataRef[],
  callback: (dataRefId: string, newValue: unknown) => void,
) {
  const socketConnection = new WebSocket(WS_URL);

  socketConnection.addEventListener("open", () => {
    socketConnection.send(JSON.stringify({
      req_id: reqCount++,
      type: "dataref_subscribe_values",
      params: {
        datarefs: datarefs.map((dr) => ({ id: dr.id })),
      },
    }));

    socketConnection.addEventListener("message", (e) => {
      const jsonData = JSON.parse(e.data) as {
        type: string;
        data: Record<string, unknown>;
      };

      if (jsonData.type === "dataref_update_values") {
        for (const [id, value] of Object.entries(jsonData)) {
          callback(id, value);
        }
      }
    });
  });
}
