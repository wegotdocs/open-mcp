import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "geteventfortext_enqueuerequest",
  "toolDescription": "Identify a recent event that best matches your input text and return a list of articles about the event",
  "baseUrl": "https://eventregistry.org",
  "path": "/api/v1/getEventForText",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "text": "text",
      "lang": "lang",
      "resultType": "resultType"
    }
  },
  inputParamsSchema
}

export default tool