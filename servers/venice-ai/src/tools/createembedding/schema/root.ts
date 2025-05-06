import { z } from "zod"

export const inputParamsSchema = {
  "dimensions": z.number().int().gte(1).describe("The number of dimensions the resulting output embeddings should have.").optional(),
  "encoding_format": z.enum(["float","base64"]).describe("The format to return the embeddings in. Can be either `float` or `base64`.").optional(),
  "input": z.union([z.string().min(1).describe("The string that will be turned into an embedding."), z.array(z.string()).min(1).max(2048).describe("The array of strings that will be turned into an embedding."), z.array(z.number().int().gte(1)).min(1).max(2048).describe("The array of integers that will be turned into an embedding."), z.array(z.array(z.number().int()).min(1)).min(1).max(2048).describe("The array of arrays containing integers that will be turned into an embedding.")]).describe("Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for `text-embedding-ada-002`), cannot be an empty string, and any array must be 2048 dimensions or less."),
  "model": z.union([z.string(), z.literal("text-embedding-bge-m3")]).describe("ID of the model to use. You can use the List models API to see all of your available models, or see our Model overview for descriptions of them."),
  "user": z.string().describe("A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse.").optional(),
  "Accept-Encoding": z.string().describe("Supported compression encodings (gzip, br)").optional()
}