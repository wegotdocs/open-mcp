import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listcoursessections",
  "toolDescription": "List Sections",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/courses/{course_id}/sections",
  "method": "get",
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
      "course_id": "course_id"
    },
    "query": {
      "after": "after",
      "sort_order": "sort_order",
      "sort_property": "sort_property"
    }
  },
  inputParamsSchema
}

export default tool