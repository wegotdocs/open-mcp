import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_project_user",
  "toolDescription": "Adds a user to the project. Users must already be members of the organization to be added to a project.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/projects/{project_id}/users",
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
      "user_id": "user_id",
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool