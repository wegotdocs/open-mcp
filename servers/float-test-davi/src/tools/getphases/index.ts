import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getphases",
  "toolDescription": "List phases",
  "baseUrl": "https://api.float.com/v3",
  "path": "/phases",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "project_id": "project_id",
      "active": "active",
      "nonBillable": "nonBillable",
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