import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "importtransactions",
  "toolDescription": "ტრანზაქციის იმპორტი",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/transactions/import",
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
      "file": "file"
    }
  },
  inputParamsSchema
}

export default tool