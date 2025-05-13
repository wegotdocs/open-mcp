import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnextaddresses",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/config/address/getNextAddresses",
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
      "country": "country",
      "province": "province",
      "city": "city",
      "district": "district",
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool