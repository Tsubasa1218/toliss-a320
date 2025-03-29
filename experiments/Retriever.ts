import { Document } from "@langchain/core/documents";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OllamaEmbeddings } from "@langchain/ollama";

import commandsJson from "./commands.json" with { type: "json" };
import datarefsJson from "./datarefs.json" with { type: "json" };

function main_commands() {
  return commandsJson.data.map((data) =>
    new Document({
      pageContent: data.description,
      id: data.id.toString(),
      metadata: {
        name: data.name,
      },
    })
  );
}

function main_datarefs() {
  return datarefsJson.data.map((data) =>
    new Document({
      pageContent: data.name,
      id: data.id.toString(),
      metadata: {
        is_writable: data.is_writable,
        value_type: data.value_type,
      },
    })
  );
}

(async () => {
  const lookups = [
    // "toliss TCAS",
    "XPDR",
    "Power",
    // "Transponder",
    // "TCAS",
  ];

  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
  });

  const vectorStore = new MemoryVectorStore(embeddings);

  await vectorStore.addDocuments(main_commands());
  // await vectorStore.addDocuments(main_datarefs());

  const retriever = vectorStore.asRetriever({
    searchType: "similarity",
    k: 15,
  });

  const result = await retriever.batch(lookups);

  console.log(result);
})();
