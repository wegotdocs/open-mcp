import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_project",
  "toolDescription": "Create a new project in the organization. Projects can be created and archived, but cannot be deleted.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/projects",
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
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool