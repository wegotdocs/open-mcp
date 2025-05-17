import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sentiment",
  "toolDescription": "Neural networks based approach to sentiment detection",
  "baseUrl": "https://analytics.eventregistry.org/api/v1",
  "path": "/sentimentRNN",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "text": "text",
      "sentences": "sentences"
    }
  },
  inputParamsSchema
}

export default tool