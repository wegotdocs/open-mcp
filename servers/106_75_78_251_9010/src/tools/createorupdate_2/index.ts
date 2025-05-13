import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorupdate_2",
  "toolDescription": "",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/config/task-dispatch-rule/createOrUpdate",
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
      "ruleCode": "ruleCode",
      "ruleName": "ruleName",
      "ruleType": "ruleType",
      "enable": "enable",
      "details": "details"
    }
  },
  inputParamsSchema
}

export default tool