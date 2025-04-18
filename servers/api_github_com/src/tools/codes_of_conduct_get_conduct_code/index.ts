import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codes_of_conduct_get_conduct_code",
  "toolDescription": "Get a code of conduct",
  "baseUrl": "https://api.github.com",
  "path": "/codes_of_conduct/{key}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "key": "key"
    }
  },
  inputParamsSchema
}

export default tool