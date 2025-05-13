import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdate_16",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/basic/containerSpec/createOrUpdate",
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
      "containerSpecCode": "containerSpecCode",
      "containerSpecName": "containerSpecName",
      "length": "length",
      "width": "width",
      "height": "height",
      "volume": "volume",
      "location": "location",
      "description": "description",
      "containerType": "containerType",
      "containerSlotSpecs": "containerSlotSpecs",
      "version": "version",
      "containerSlotNum": "containerSlotNum"
    }
  },
  inputParamsSchema
}

export default tool