import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "security_advisories_create_repository_advisory",
  "toolDescription": "Create a repository security advisory",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/security-advisories",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "summary": "summary",
      "description": "description",
      "cve_id": "cve_id",
      "vulnerabilities": "vulnerabilities",
      "cwe_ids": "cwe_ids",
      "credits": "credits",
      "severity": "severity",
      "cvss_vector_string": "cvss_vector_string",
      "start_private_fork": "start_private_fork"
    }
  },
  inputParamsSchema
}

export default tool