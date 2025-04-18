import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_list_recent_analyses",
  "toolDescription": "List code scanning analyses for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-scanning/analyses",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "tool_name": "tool_name",
      "tool_guid": "tool_guid",
      "page": "page",
      "per_page": "per_page",
      "pr": "pr",
      "ref": "ref",
      "sarif_id": "sarif_id",
      "direction": "direction",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool