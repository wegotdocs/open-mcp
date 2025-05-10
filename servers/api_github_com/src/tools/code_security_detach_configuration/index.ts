import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_detach_configuration",
  "toolDescription": "Detach configurations from repositories",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/code-security/configurations/detach",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "selected_repository_ids": "selected_repository_ids"
    }
  },
  inputParamsSchema
}

export default tool