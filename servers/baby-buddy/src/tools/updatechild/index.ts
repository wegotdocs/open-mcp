import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatechild",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/children/{slug}/",
  "method": "put",
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
    },
    "body": {
      "id": "b_id",
      "first_name": "b_first_name",
      "last_name": "b_last_name",
      "birth_date": "b_birth_date",
      "birth_time": "b_birth_time",
      "slug": "b_slug",
      "picture": "picture"
    }
  },
  inputParamsSchema
}

export default tool