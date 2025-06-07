import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createchild",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/children/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "first_name": "first_name",
      "last_name": "last_name",
      "birth_date": "birth_date",
      "birth_time": "birth_time",
      "slug": "slug",
      "picture": "picture"
    }
  },
  inputParamsSchema
}

export default tool