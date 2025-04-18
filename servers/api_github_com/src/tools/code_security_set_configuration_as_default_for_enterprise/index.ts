import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_set_configuration_as_default_for_enterprise",
  "toolDescription": "Set a code security configuration as a default for an enterprise",
  "baseUrl": "https://api.github.com",
  "path": "/enterprises/{enterprise}/code-security/configurations/{configuration_id}/defaults",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "enterprise": "enterprise",
      "configuration_id": "configuration_id"
    },
    "body": {
      "default_for_new_repos": "default_for_new_repos"
    }
  },
  inputParamsSchema
}

export default tool