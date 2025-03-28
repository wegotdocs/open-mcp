import { z } from "zod"

export const toolName = `getresponse`
export const toolDescription = `Retrieves a model response with the given ID.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/responses/{response_id}`
export const method = `get`
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

export const inputParams = z.object({ "path": z.object({ "response_id": z.string().describe("The ID of the response to retrieve.") }).optional(), "query": z.object({ "include": z.array(z.enum(["file_search_call.results","message.input_image.image_url","computer_call_output.output.image_url"]).describe("Specify additional output data to include in the model response. Currently\nsupported values are:\n- `file_search_call.results`: Include the search results of\n  the file search tool call.\n- `message.input_image.image_url`: Include image urls from the input message.\n- `computer_call_output.output.image_url`: Include image urls from the computer call output.\n")).describe("Specify additional output data to include in the response. Currently\nsupported values are:\n- `file_search_call.results`: Include the search results of\n  the file search tool call.\n- `message.input_image.image_url`: Include image urls from the input message.\n- `computer_call_output.output.image_url`: Include image urls from the computer call output.\n").optional() }).optional() }).shape