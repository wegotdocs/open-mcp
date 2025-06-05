import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "team_updates_list",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/team-updates/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "page_no": "page_no",
      "page_size": "page_size",
      "team": "team"
    }
  },
  inputParamsSchema
}

export default tool