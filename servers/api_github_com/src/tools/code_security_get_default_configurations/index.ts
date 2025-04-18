import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_get_default_configurations",
  "toolDescription": "Get default code security configurations",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/code-security/configurations/defaults",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool