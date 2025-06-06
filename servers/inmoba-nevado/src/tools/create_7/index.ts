import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_7",
  "toolDescription": "Add a additional address by contact ID",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/contacts/{contactId}/additionals",
  "method": "post",
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
      "contactId": "contactId"
    },
    "body": {
      "kind": "kind",
      "address": "address",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool