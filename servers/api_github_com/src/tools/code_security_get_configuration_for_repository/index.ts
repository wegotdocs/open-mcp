import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_security_get_configuration_for_repository",
  "toolDescription": "Get the code security configuration associated with a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-security-configuration",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    }
  },
  inputParamsSchema
}

export default tool