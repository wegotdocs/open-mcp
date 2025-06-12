import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrepositories",
  "toolDescription": "Get the repositories",
  "baseUrl": "http://localhost:8080/dctm-rest",
  "path": "/repositories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "inline": "inline",
      "links": "links"
    },
    "header": {
      "Accept": "Accept"
    }
  },
  inputParamsSchema
}

export default tool