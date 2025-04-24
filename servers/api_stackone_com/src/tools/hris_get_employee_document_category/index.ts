import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hris_get_employee_document_category",
  "toolDescription": "Get Employee Document Category",
  "baseUrl": "https://api.stackone.com",
  "path": "/unified/hris/documents/employee_categories/{id}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "raw": "raw",
      "proxy": "proxy",
      "fields": "fields"
    },
    "header": {
      "x-account-id": "x-account-id"
    }
  },
  inputParamsSchema
}

export default tool