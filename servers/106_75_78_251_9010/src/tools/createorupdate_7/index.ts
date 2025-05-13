import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdate_7",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/config/barcode/parse/createOrUpdate",
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
      "executeTime": "executeTime",
      "businessFlow": "businessFlow",
      "ownerCode": "ownerCode",
      "brand": "brand",
      "enable": "enable",
      "unionLocation": "unionLocation",
      "unionStr": "unionStr",
      "regularExpression": "regularExpression",
      "resultFields": "resultFields",
      "version": "version"
    }
  },
  inputParamsSchema
}

export default tool