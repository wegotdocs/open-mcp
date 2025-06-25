import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listshippingzones",
  "toolDescription": "List Zones",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/shipping/location_groups/{location_group_id}/zones",
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
      "location_group_id": "location_group_id"
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