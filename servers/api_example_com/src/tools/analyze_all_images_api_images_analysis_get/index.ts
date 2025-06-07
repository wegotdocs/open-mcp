import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "analyze_all_images_api_images_analysis_get",
  "toolDescription": "Analyze All Images",
  "baseUrl": "https://api.example.com",
  "path": "/api/images/analysis",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "team_filter": "team_filter",
      "tag_type_filter": "tag_type_filter"
    }
  },
  inputParamsSchema
}

export default tool