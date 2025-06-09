import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "waybill_markasread",
  "toolDescription": "წაკითხულად მონიშვნა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{locale}/waybills/internal/mark-as-read",
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
      "locale": "locale"
    },
    "body": {
      "transaction_id": "transaction_id",
      "waybill_id": "waybill_id"
    }
  },
  inputParamsSchema
}

export default tool