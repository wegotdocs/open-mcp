import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "editindexbyid",
  "toolDescription": "Edit index's information",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/indices/{index_id}",
  "method": "put",
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
      "index_id": "index_id"
    },
    "body": {
      "title": "title",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool