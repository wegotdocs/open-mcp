import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_attach_enterprise_configuration",
  "toolDescription": "Attach an enterprise configuration to repositories",
  "baseUrl": "https://api.github.com",
  "path": "/enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "enterprise": "enterprise",
      "configuration_id": "configuration_id"
    },
    "body": {
      "scope": "scope"
    }
  },
  inputParamsSchema
}

export default tool