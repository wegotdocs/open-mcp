import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search_coda_documentation_api_ai_search_coda_post",
  "toolDescription": "Search Coda Documentation",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/search-coda",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool