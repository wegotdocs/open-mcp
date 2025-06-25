import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createformsfieldsoptions",
  "toolDescription": "Create Option",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/forms/fields/{field_id}/options",
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
      "field_id": "field_id"
    },
    "body": {
      "forms_fields_option": "forms_fields_option"
    }
  },
  inputParamsSchema
}

export default tool