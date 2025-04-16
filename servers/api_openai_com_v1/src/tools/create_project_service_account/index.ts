import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_project_service_account",
  "toolDescription": "Creates a new service account in the project. This also returns an unredacted API key for the service account.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/projects/{project_id}/service_accounts",
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