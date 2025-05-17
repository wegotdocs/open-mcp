import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "categorize",
  "toolDescription": "Categorize the content into a set of predefined categories",
  "baseUrl": "https://analytics.eventregistry.org/api/v1",
  "path": "/categorize",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "text": "text",
      "taxonomy": "taxonomy"
    }
  },
  inputParamsSchema
}

export default tool