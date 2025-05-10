import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_create_variant_analysis",
  "toolDescription": "Create a CodeQL variant analysis",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-scanning/codeql/variant-analyses",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "language": "language",
      "query_pack": "query_pack",
      "repositories": "repositories",
      "repository_lists": "repository_lists",
      "repository_owners": "repository_owners"
    }
  },
  inputParamsSchema
}

export default tool