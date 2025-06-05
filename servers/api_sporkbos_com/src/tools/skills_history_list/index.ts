import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "skills_history_list",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/skills/{id}/history/",
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
    "path": {
      "id": "id"
    },
    "query": {
      "name": "name",
      "stage": "stage",
      "team": "team"
    }
  },
  inputParamsSchema
}

export default tool