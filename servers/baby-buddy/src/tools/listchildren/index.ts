import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listchildren",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/children/",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "id": "id",
      "first_name": "first_name",
      "last_name": "last_name",
      "slug": "slug",
      "birth_date": "birth_date",
      "birth_time": "birth_time",
      "ordering": "ordering"
    }
  },
  inputParamsSchema
}

export default tool