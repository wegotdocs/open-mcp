import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievechild",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/children/{slug}/",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "slug": "slug"
    },
    "query": {
      "id": "id",
      "first_name": "first_name",
      "last_name": "last_name",
      "slug": "q_slug",
      "birth_date": "birth_date",
      "birth_time": "birth_time",
      "ordering": "ordering"
    }
  },
  inputParamsSchema
}

export default tool