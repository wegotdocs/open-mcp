import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_get_configuration",
  "toolDescription": "Get a code security configuration",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/code-security/configurations/{configuration_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "configuration_id": "configuration_id"
    }
  },
  inputParamsSchema
}

export default tool