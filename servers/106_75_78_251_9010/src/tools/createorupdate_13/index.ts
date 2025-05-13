import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdate_13",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/basic/sku/createOrUpdate",
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
      "skuCode": "skuCode",
      "warehouseCode": "warehouseCode",
      "ownerCode": "ownerCode",
      "skuName": "skuName",
      "style": "style",
      "color": "color",
      "size": "size",
      "brand": "brand",
      "weight": "weight",
      "volumeDTO": "volumeDTO",
      "skuAttribute": "skuAttribute",
      "skuConfig": "skuConfig",
      "skuPackage": "skuPackage",
      "skuBarcode": "skuBarcode",
      "skuFirstCategory": "skuFirstCategory"
    }
  },
  inputParamsSchema
}

export default tool