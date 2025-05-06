import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dependency_graph_export_sbom",
  "toolDescription": "Export a software bill of materials (SBOM) for a repository.",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/dependency-graph/sbom",
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