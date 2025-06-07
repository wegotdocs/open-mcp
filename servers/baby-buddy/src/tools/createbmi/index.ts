import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createbmi",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/bmi/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "child": "child",
      "bmi": "bmi",
      "date": "date",
      "notes": "notes",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool