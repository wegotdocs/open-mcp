import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findfile_1",
  "toolDescription": "Find a file by contact ID",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/contacts/{contactId}/files/{fileId}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "contactId": "contactId",
      "fileId": "fileId"
    }
  },
  inputParamsSchema
}

export default tool