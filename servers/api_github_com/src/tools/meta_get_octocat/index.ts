import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "meta_get_octocat",
  "toolDescription": "Get Octocat",
  "baseUrl": "https://api.github.com",
  "path": "/octocat",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "s": "s"
    }
  },
  inputParamsSchema
}

export default tool