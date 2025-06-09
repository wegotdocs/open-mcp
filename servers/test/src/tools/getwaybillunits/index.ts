import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwaybillunits",
  "toolDescription": "ზედნადების წონითი ერთეულის ჩამონათვალი",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/waybills/get-waybill-units",
  "method": "get",
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
    }
  },
  inputParamsSchema
}

export default tool