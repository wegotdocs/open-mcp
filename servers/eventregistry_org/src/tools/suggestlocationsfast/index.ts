import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suggestlocationsfast",
  "toolDescription": "Retrieve the location URI for a given location name",
  "baseUrl": "https://eventregistry.org",
  "path": "/api/v1/suggestLocationsFast",
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