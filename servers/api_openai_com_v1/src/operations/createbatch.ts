import { z } from "zod"

export const toolName = `createbatch`
export const toolDescription = `Creates and executes a batch from an uploaded file of requests`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/batches`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "body": z.object({ "input_file_id": z.string().describe("The ID of an uploaded file that contains requests for the new batch.\n\nSee [upload file](/docs/api-reference/files/create) for how to upload a file.\n\nYour input file must be formatted as a [JSONL file](/docs/api-reference/batch/request-input), and must be uploaded with the purpose `batch`. The file can contain up to 50,000 requests, and can be up to 200 MB in size.\n"), "endpoint": z.enum(["/v1/responses","/v1/chat/completions","/v1/embeddings","/v1/completions"]).describe("The endpoint to be used for all requests in the batch. Currently `/v1/responses`, `/v1/chat/completions`, `/v1/embeddings`, and `/v1/completions` are supported. Note that `/v1/embeddings` batches are also restricted to a maximum of 50,000 embedding inputs across all requests in the batch."), "completion_window": z.literal("24h").describe("The time frame within which the batch should be processed. Currently only `24h` is supported."), "metadata": z.record(z.string()).nullable().describe("Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional() }).optional() }).shape