import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "security_advisories_create_repository_advisory_cve_request",
  "toolDescription": "Request a CVE for a repository security advisory",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve",
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