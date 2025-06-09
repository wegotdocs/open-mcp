import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activatewaybill",
  "toolDescription": "ზედნადების აქტივაცია",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{locale}/waybills/activate/{waybillId}",
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
      "locale": "locale",
      "waybillId": "waybillId"
    }
  },
  inputParamsSchema
}

export default tool