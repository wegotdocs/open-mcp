import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createheadcircumference",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/head-circumference/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "child": "child",
      "head_circumference": "head_circumference",
      "date": "date",
      "notes": "notes",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool