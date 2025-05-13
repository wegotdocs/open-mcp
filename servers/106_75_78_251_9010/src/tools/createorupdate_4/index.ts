import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdate_4",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/config/put-away-flow-rule/createOrUpdate",
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
      "priority": "priority",
      "enabled": "enabled",
      "warehouseCodes": "warehouseCodes",
      "ownerCodes": "ownerCodes",
      "customerOrderTypes": "customerOrderTypes",
      "productCriterion": "productCriterion",
      "batchAttributes": "batchAttributes",
      "putAwayDirection": "putAwayDirection"
    }
  },
  inputParamsSchema
}

export default tool