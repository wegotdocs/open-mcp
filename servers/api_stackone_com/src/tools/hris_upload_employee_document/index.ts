import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hris_upload_employee_document",
  "toolDescription": "Upload Employee Document",
  "baseUrl": "https://api.stackone.com",
  "path": "/unified/hris/employees/{id}/documents/upload",
  "method": "post",
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
    "body": {
      "name": "name",
      "file_format": "file_format",
      "content": "content",
      "category_id": "category_id",
      "path": "path",
      "category": "category",
      "confidential": "confidential"
    },
    "header": {
      "x-account-id": "x-account-id"
    }
  },
  inputParamsSchema
}

export default tool