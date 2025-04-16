import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieve_project_user",
  "toolDescription": "Retrieves a user in the project.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/projects/{project_id}/users/{user_id}",
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
      "project_id": "project_id",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool