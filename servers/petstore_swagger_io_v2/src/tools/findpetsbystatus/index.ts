import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findpetsbystatus",
  "toolDescription": "Finds Pets by status",
  "baseUrl": "http://petstore.swagger.io/v2",
  "path": "/pet/findByStatus/singleExample",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool