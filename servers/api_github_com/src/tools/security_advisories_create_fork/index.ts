import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "security_advisories_create_fork",
  "toolDescription": "Create a temporary private fork",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "ghsa_id": "ghsa_id"
    }
  },
  inputParamsSchema
}

export default tool