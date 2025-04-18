import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gitignore_get_template",
  "toolDescription": "Get a gitignore template",
  "baseUrl": "https://api.github.com",
  "path": "/gitignore/templates/{name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool