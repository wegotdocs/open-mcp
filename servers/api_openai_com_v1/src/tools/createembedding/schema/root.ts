import { z } from "zod"

export const inputParamsSchema = {
  "input": z.string().describe("The string that will be turned into an embedding.").describe("Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for `text-embedding-ada-002`), cannot be an empty string, and any array must be 2048 dimensions or less. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens. Some models may also impose a limit on total number of tokens summed across inputs.\n"),
  "model": z.union([z.string(), z.enum(["text-embedding-ada-002","text-embedding-3-small","text-embedding-3-large"])]).describe("ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.\n"),
  "encoding_format": z.enum(["float","base64"]).describe("The format to return the embeddings in. Can be either `float` or [`base64`](https://pypi.org/project/pybase64/).").optional(),
  "dimensions": z.number().int().gte(1).describe("The number of dimensions the resulting output embeddings should have. Only supported in `text-embedding-3` and later models.\n").optional(),
  "user": z.string().describe("A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).\n").optional()
}