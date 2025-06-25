import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reorderformsfields",
  "toolDescription": "Reorder Fields",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/forms/field_sets/{field_set_id}/fields/reorder",
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
      "field_set_id": "field_set_id"
    },
    "body": {
      "ids_in_order": "ids_in_order"
    }
  },
  inputParamsSchema
}

export default tool