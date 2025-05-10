import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "modify_project",
  "toolDescription": "Modifies a project in the organization.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/projects/{project_id}",
  "method": "post",
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
      "project_id": "project_id"
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool