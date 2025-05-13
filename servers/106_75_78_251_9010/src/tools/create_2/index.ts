import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_2",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/basic/location/create",
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
    "body": {
      "warehouseCode": "warehouseCode",
      "warehouseAreaId": "warehouseAreaId",
      "locationType": "locationType",
      "locationDescList": "locationDescList"
    }
  },
  inputParamsSchema
}

export default tool