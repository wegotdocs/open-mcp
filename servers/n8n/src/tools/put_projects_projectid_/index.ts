import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_projects_projectid_",
  "toolDescription": "Update a project",
  "baseUrl": "https://mcp.open-mcp.org/api",
  "path": "/projects/{projectId}",
  "method": "put",
  "security": [
    {
      "key": "X-N8N-API-KEY",
      "value": "<mcp-env-var>X_N8N_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_N8N_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "projectId": "projectId"
    },
    "body": {
      "id": "id",
      "name": "name",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool