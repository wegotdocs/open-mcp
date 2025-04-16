import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_project_service_account",
  "toolDescription": "Deletes a service account from the project.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/projects/{project_id}/service_accounts/{service_account_id}",
  "method": "delete",
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
      "service_account_id": "service_account_id"
    }
  },
  inputParamsSchema
}

export default tool