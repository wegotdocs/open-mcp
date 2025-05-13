import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdate_14",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/basic/putWall/createOrUpdate",
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
      "id": "id",
      "warehouseCode": "warehouseCode",
      "workStationId": "workStationId",
      "putWallCode": "putWallCode",
      "putWallName": "putWallName",
      "containerSpecCode": "containerSpecCode",
      "putWallSlots": "putWallSlots",
      "location": "location",
      "enable": "enable",
      "displayOrder": "displayOrder",
      "version": "version",
      "putWallStatus": "putWallStatus",
      "active": "active",
      "taskDispatchRuleId": "taskDispatchRuleId"
    }
  },
  inputParamsSchema
}

export default tool