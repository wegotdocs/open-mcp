import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_get_variant_analysis_repo_task",
  "toolDescription": "Get the analysis status of a repository in a CodeQL variant analysis",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "codeql_variant_analysis_id": "codeql_variant_analysis_id",
      "repo_owner": "repo_owner",
      "repo_name": "repo_name"
    }
  },
  inputParamsSchema
}

export default tool