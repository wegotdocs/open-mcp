import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_check_automated_security_fixes",
  "toolDescription": "Check if Dependabot security updates are enabled for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/automated-security-fixes",
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