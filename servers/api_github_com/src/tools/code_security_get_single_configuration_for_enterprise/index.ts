import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_get_single_configuration_for_enterprise",
  "toolDescription": "Retrieve a code security configuration of an enterprise",
  "baseUrl": "https://api.github.com",
  "path": "/enterprises/{enterprise}/code-security/configurations/{configuration_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "enterprise": "enterprise",
      "configuration_id": "configuration_id"
    }
  },
  inputParamsSchema
}

export default tool