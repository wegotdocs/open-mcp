import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_enable_automated_security_fixes",
  "toolDescription": "Enable Dependabot security updates",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/automated-security-fixes",
  "method": "put",
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