import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "detectlanguage",
  "toolDescription": "Detect the language of the input text",
  "baseUrl": "https://analytics.eventregistry.org/api/v1",
  "path": "/detectLanguage",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "text": "text"
    }
  },
  inputParamsSchema
}

export default tool