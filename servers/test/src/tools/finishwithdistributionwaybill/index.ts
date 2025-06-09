import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "finishwithdistributionwaybill",
  "toolDescription": "დისტრიბუციის  დასრულება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/waybills/finish-waybill-distribution",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "language": "language"
    },
    "body": {
      "waybillId": "waybillId"
    }
  },
  inputParamsSchema
}

export default tool