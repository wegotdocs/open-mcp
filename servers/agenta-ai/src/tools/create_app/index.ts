import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_app",
  "toolDescription": "Create App",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/apps",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "body": {
      "app_name": "app_name",
      "template_key": "template_key",
      "project_id": "project_id",
      "workspace_id": "workspace_id",
      "organization_id": "organization_id"
    }
  },
  inputParamsSchema
}

export default tool