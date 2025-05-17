import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suggestconceptsfast",
  "toolDescription": "Retrieve the concept URI for a given concept label/prefix",
  "baseUrl": "https://eventregistry.org",
  "path": "/api/v1/suggestConceptsFast",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "prefix": "prefix"
    }
  },
  inputParamsSchema
}

export default tool