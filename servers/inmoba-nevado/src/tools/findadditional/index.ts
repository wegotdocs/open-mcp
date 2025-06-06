import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findadditional",
  "toolDescription": "Find a additional address by contact ID",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/contacts/{contactId}/additionals/{additionalAddressId}",
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
      "additionalAddressId": "additionalAddressId"
    }
  },
  inputParamsSchema
}

export default tool