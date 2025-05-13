import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accept",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/inbound/plan/accept",
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
      "inboundPlanOrderId": "inboundPlanOrderId",
      "inboundPlanOrderDetailId": "inboundPlanOrderDetailId",
      "warehouseCode": "warehouseCode",
      "batchAttributes": "batchAttributes",
      "qtyAccepted": "qtyAccepted",
      "skuId": "skuId",
      "qtyAbnormal": "qtyAbnormal",
      "targetContainerId": "targetContainerId",
      "targetContainerCode": "targetContainerCode",
      "targetContainerSpecCode": "targetContainerSpecCode",
      "targetContainerSlotCode": "targetContainerSlotCode",
      "targetContainerFace": "targetContainerFace",
      "workStationId": "workStationId"
    }
  },
  inputParamsSchema
}

export default tool