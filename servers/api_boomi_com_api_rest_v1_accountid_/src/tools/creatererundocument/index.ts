import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "creatererundocument",
  "toolDescription": "Creates a RerunDocument object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/RerunDocument",
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
    "body": {
      "AllDocuments": "AllDocuments",
      "SelectedDocuments": "SelectedDocuments",
      "originalExecutionId": "originalExecutionId",
      "recordUrl": "recordUrl",
      "requestId": "requestId"
    }
  },
  inputParamsSchema
}

export default tool