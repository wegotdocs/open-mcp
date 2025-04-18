import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_disable_automated_security_fixes",
  "toolDescription": "Disable Dependabot security updates",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/automated-security-fixes",
  "method": "delete",
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