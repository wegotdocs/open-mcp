import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suggestsourcesfast",
  "toolDescription": "Retrieve the author URI for a given author name",
  "baseUrl": "https://eventregistry.org",
  "path": "/api/v1/suggestAuthorsFast",
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