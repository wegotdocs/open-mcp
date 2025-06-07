import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search_images_api_images_search_get",
  "toolDescription": "Search Images",
  "baseUrl": "https://api.example.com",
  "path": "/api/images/search",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "query": "query",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool