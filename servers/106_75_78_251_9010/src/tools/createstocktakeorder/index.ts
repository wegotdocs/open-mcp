import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createstocktakeorder",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/stocktake/order/create",
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
      "stocktakeType": "stocktakeType",
      "stocktakeMethod": "stocktakeMethod",
      "stocktakeCreateMethod": "stocktakeCreateMethod",
      "stocktakeUnitType": "stocktakeUnitType",
      "includeZeroStock": "includeZeroStock",
      "includeEmptySlot": "includeEmptySlot",
      "shelfCodes": "shelfCodes",
      "shelfCodeFacePairs": "shelfCodeFacePairs",
      "containerCodes": "containerCodes",
      "skuIds": "skuIds",
      "stockIds": "stockIds",
      "warehouseAreaId": "warehouseAreaId",
      "warehouseLogicId": "warehouseLogicId",
      "workStationId": "workStationId"
    }
  },
  inputParamsSchema
}

export default tool