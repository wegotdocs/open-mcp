import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addrole",
  "toolDescription": "Add a new role",
  "baseUrl": "https://api.float.com/v3",
  "path": "/roles",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "default_hourly_rate": "default_hourly_rate",
      "created": "created",
      "created_by": "created_by",
      "modified": "modified",
      "modified_by": "modified_by",
      "cost_rate_history": "cost_rate_history",
      "people_ids": "people_ids",
      "people_count": "people_count"
    }
  },
  inputParamsSchema
}

export default tool