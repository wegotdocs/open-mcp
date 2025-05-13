import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdate_15",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/basic/owner/createOrUpdate",
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
      "ownerCode": "ownerCode",
      "ownerName": "ownerName",
      "ownerType": "ownerType",
      "contactorDTO": "contactorDTO",
      "addressDTO": "addressDTO",
      "version": "version"
    }
  },
  inputParamsSchema
}

export default tool