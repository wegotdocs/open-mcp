import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "security_advisories_update_repository_advisory",
  "toolDescription": "Update a repository security advisory",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/security-advisories/{ghsa_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "ghsa_id": "ghsa_id"
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
      "state": "state",
      "collaborating_users": "collaborating_users",
      "collaborating_teams": "collaborating_teams"
    }
  },
  inputParamsSchema
}

export default tool