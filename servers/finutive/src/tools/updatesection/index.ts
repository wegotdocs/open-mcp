import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatesection",
  "toolDescription": "Update dashboard section",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/dashboards/sections/{id}",
  "method": "put",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "category": "category",
      "roles": "roles",
      "priority": "priority",
      "tool_id": "tool_id",
      "service_id": "service_id",
      "default_width": "default_width",
      "default_height": "default_height",
      "is_default_for_roles": "is_default_for_roles",
      "min_version": "min_version",
      "sage_active_dependency": "sage_active_dependency"
    }
  },
  inputParamsSchema
}

export default tool