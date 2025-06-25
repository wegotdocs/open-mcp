import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateformsfieldsoptions",
  "toolDescription": "Update Option",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/forms/fields/options/{id}",
  "method": "put",
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
      "id": "id"
    },
    "body": {
      "forms_fields_option": "forms_fields_option"
    }
  },
  inputParamsSchema
}

export default tool