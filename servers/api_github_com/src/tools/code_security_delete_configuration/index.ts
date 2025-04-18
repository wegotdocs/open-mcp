import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_delete_configuration",
  "toolDescription": "Delete a code security configuration",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/code-security/configurations/{configuration_id}",
  "method": "delete",
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