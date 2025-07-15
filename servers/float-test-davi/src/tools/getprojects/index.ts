import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprojects",
  "toolDescription": "List projects",
  "baseUrl": "https://api.float.com/v3",
  "path": "/projects",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "project_code": "project_code",
      "client_id": "client_id",
      "active": "active",
      "nonBillable": "nonBillable",
      "status": "status",
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