import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createnote",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/notes/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "child": "child",
      "note": "note",
      "image": "image",
      "time": "time",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool