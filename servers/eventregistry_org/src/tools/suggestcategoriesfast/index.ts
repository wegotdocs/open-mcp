import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suggestcategoriesfast",
  "toolDescription": "Retrieve the category URI for a given category label/prefix",
  "baseUrl": "https://eventregistry.org",
  "path": "/api/v1/suggestCategoriesFast",
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