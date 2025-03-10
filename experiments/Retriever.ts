import { ChatOllama } from "@langchain/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";

async function main() {
    const datarefsFile = await Deno.readTextFile("./experiments/datarefs.json");
    const minified = JSON.stringify(JSON.parse(datarefsFile));

    const model = new ChatOllama({
        model: "qwq", // Default value.
    });

    const prompt = ChatPromptTemplate.fromMessages([
        [
            "system",
            "You are an assistant required to look for information from a JSON file. You are required to return the IDs of the objects that are more likely to meet the request from the user. Here is the file: ```json{context}```",
        ],
        ["human", "What objects correspond to the Auto brake settings?"],
    ]);

    const chain = prompt.pipe(model);

    const result = await chain.invoke({
        context: minified,
    });

    console.log(result);
}

main();
