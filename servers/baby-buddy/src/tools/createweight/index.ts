import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createweight",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/weight/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "child": "child",
      "weight": "weight",
      "date": "date",
      "notes": "notes",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool