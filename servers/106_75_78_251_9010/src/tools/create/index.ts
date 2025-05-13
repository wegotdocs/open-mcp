import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/outbound/empty/container/create",
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
      "containerSpecCode": "containerSpecCode",
      "warehouseAreaId": "warehouseAreaId",
      "emptySlotNum": "emptySlotNum",
      "warehouseLogicCode": "warehouseLogicCode",
      "planCount": "planCount",
      "workStationId": "workStationId",
      "containerStatus": "containerStatus",
      "emptyContainer": "emptyContainer",
      "locked": "locked",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool