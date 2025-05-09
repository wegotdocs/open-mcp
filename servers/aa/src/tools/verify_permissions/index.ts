import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "verify_permissions",
  "toolDescription": "Verify Permissions",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/permissions/verify",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "action": "action",
      "scope_type": "scope_type",
      "scope_id": "scope_id",
      "resource_type": "resource_type",
      "resource_id": "resource_id"
    }
  },
  inputParamsSchema
}

export default tool