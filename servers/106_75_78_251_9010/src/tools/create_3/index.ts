import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_3",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/basic/container/create",
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
      "containerType": "containerType",
      "containerSpecCode": "containerSpecCode",
      "containerCodePrefix": "containerCodePrefix",
      "startIndex": "startIndex",
      "indexNumber": "indexNumber",
      "createNumber": "createNumber",
      "endIndex": "endIndex"
    }
  },
  inputParamsSchema
}

export default tool