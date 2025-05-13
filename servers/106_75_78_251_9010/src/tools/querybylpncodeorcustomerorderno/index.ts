import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "querybylpncodeorcustomerorderno",
  "toolDescription": "查询入库计划单",
  "baseUrl": "http://106.75.78.251:9010",
  "path": "/inbound/plan/query/{identifyNo}/{warehouseCode}",
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
    "path": {
      "identifyNo": "identifyNo",
      "warehouseCode": "warehouseCode"
    }
  },
  inputParamsSchema
}

export default tool