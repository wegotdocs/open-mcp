import { z } from "zod"

export const inputParams = {
  "model": z.union([z.enum(["WhereIsAI/UAE-Large-V1","BAAI/bge-large-en-v1.5","BAAI/bge-base-en-v1.5","togethercomputer/m2-bert-80M-8k-retrieval"]), z.string()]).describe("The name of the embedding model to use.<br> <br> [See all of Together AI's embedding models](https://docs.together.ai/docs/serverless-models#embedding-models)\n"),
  "input": z.string().describe("A string providing the text for the model to embed.")
}