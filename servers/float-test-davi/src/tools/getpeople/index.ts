import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpeople",
  "toolDescription": "List people",
  "baseUrl": "https://api.float.com/v3",
  "path": "/people",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "active": "active",
      "department_id": "department_id",
      "email": "email",
      "people_type_id": "people_type_id",
      "employee_type_id": "employee_type_id",
      "tag_name": "tag_name",
      "page": "page",
      "per-page": "per-page",
      "sort": "sort",
      "modified_since": "modified_since",
      "fields": "fields",
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool