import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_set_configuration_as_default",
  "toolDescription": "Set a code security configuration as a default for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/code-security/configurations/{configuration_id}/defaults",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "configuration_id": "configuration_id"
    },
    "body": {
      "default_for_new_repos": "default_for_new_repos"
    }
  },
  inputParamsSchema
}

export default tool