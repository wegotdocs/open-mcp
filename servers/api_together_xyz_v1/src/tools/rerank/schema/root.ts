import { z } from "zod"

export const inputParams = {
  "model": z.union([z.literal("Salesforce/Llama-Rank-v1"), z.string()]).describe("The model to be used for the rerank request.<br> <br> [See all of Together AI's rerank models](https://docs.together.ai/docs/serverless-models#rerank-models)\n"),
  "query": z.string().describe("The search query to be used for ranking."),
  "documents": z.array(z.record(z.any())).describe("List of documents, which can be either strings or objects."),
  "top_n": z.number().int().describe("The number of top results to return.").optional(),
  "return_documents": z.boolean().describe("Whether to return supplied documents with the response.").optional(),
  "rank_fields": z.array(z.string()).describe("List of keys in the JSON Object document to rank by. Defaults to use all supplied keys for ranking.").optional()
}