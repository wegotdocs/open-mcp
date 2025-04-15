import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_organization",
  "toolDescription": "Update Organization",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/organizations/{org_id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "org_id": "org_id"
    },
    "body": {
      "name": "name",
      "description": "description",
      "updated_at": "updated_at"
    }
  },
  inputParamsSchema
}

export default tool