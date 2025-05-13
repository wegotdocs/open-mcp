import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdate_6",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/config/batchAttribute/createOrUpdate",
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
      "code": "code",
      "name": "name",
      "ownerCode": "ownerCode",
      "skuFirstCategory": "skuFirstCategory",
      "enable": "enable",
      "version": "version",
      "batchAttributeFieldConfigs": "batchAttributeFieldConfigs"
    }
  },
  inputParamsSchema
}

export default tool