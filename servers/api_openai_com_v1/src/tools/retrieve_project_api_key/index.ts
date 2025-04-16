import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieve_project_api_key",
  "toolDescription": "Retrieves an API key in the project.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/projects/{project_id}/api_keys/{key_id}",
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
      "key_id": "key_id"
    }
  },
  inputParamsSchema
}

export default tool