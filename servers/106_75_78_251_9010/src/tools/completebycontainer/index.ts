import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "completebycontainer",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/inbound/accept/completeByContainer",
  "method": "post",
  "security": [
    {
      "key": "X-Tenant-Id",
      "value": "<mcp-env-var>X_TENANT_ID</mcp-env-var>",
      "in": "header",
      "envVarName": "X_TENANT_ID"
    }
  ],
  "paramsMap": {
    "query": {
      "containerCode": "containerCode"
    }
  },
  inputParamsSchema
}

export default tool