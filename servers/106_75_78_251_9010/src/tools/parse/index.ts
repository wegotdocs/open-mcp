import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parse",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/config/barcode/parse/parse",
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
      "barcode": "barcode",
      "ownerCode": "ownerCode",
      "knownSkus": "knownSkus",
      "businessFlow": "businessFlow",
      "executeTime": "executeTime"
    }
  },
  inputParamsSchema
}

export default tool