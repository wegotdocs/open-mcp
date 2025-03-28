import { z } from "zod"

export const toolName = `modifythread`
export const toolDescription = `Modifies a thread.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/threads/{thread_id}`
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

export const inputParams = z.object({ "path": z.object({ "thread_id": z.string().describe("The ID of the thread to modify. Only the `metadata` can be modified.") }).optional(), "body": z.object({ "tool_resources": z.object({ "code_interpreter": z.object({ "file_ids": z.array(z.string()).max(20).describe("A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.\n") }).optional(), "file_search": z.object({ "vector_store_ids": z.array(z.string()).max(1).describe("The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.\n").optional() }).optional() }).nullable().describe("A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.\n").optional(), "metadata": z.record(z.string()).nullable().describe("Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional() }).strict().optional() }).shape