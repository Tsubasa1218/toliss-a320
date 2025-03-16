import { Document } from "@langchain/core/documents";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OllamaEmbeddings } from "@langchain/ollama";

import commandsJson from "./commands.json" with { type: "json" };
import datarefsJson from "./datarefs.json" with { type: "json" };

async function main_commands() {
  const commandDocs = commandsJson.data.map((data) =>
    new Document({
      pageContent: data.description,
      id: data.id.toString(),
      metadata: {
        name: data.name,
      },
    })
  );

  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
  });

  const vectorStore = new MemoryVectorStore(embeddings);

  await vectorStore.addDocuments(commandDocs);

  const retriever = vectorStore.asRetriever({
    searchType: "similarity",
    k: 10,
  });

  const result = await retriever.batch([
    "Airbus Landing Gear",
    "Landing Gear",
    "Toliss Landing Gear",
    "LDG Gear",
  ]);

  console.log(result);
}

async function main_datarefs() {
  const commandDocs = datarefsJson.data.map((data) =>
    new Document({
      pageContent: data.name,
      id: data.id.toString(),
      metadata: {
        is_writable: data.is_writable,
        value_type: data.value_type,
      },
    })
  );

  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
  });

  const vectorStore = new MemoryVectorStore(embeddings);

  await vectorStore.addDocuments(commandDocs);

  const retriever = vectorStore.asRetriever({
    searchType: "similarity",
    k: 10,
  });

  const result = await retriever.batch([
    "Airbus Landing Gear",
    "Landing Gear",
    "LDG GEAR",
  ]);

  console.log(result);
}

main_commands();
// main_datarefs();
