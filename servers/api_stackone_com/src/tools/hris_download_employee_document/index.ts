import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hris_download_employee_document",
  "toolDescription": "Download Employee Document",
  "baseUrl": "https://api.stackone.com",
  "path": "/unified/hris/employees/{id}/documents/{subResourceId}/download",
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
      "id": "id",
      "subResourceId": "subResourceId"
    },
    "query": {
      "format": "format",
      "export_format": "export_format"
    },
    "header": {
      "x-account-id": "x-account-id"
    }
  },
  inputParamsSchema
}

export default tool