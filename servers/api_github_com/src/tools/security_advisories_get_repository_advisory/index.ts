import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "security_advisories_get_repository_advisory",
  "toolDescription": "Get a repository security advisory",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/security-advisories/{ghsa_id}",
  "method": "get",
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