import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dependency_graph_diff_range",
  "toolDescription": "Get a diff of the dependencies between commits",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/dependency-graph/compare/{basehead}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "basehead": "basehead"
    },
    "query": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool