import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dependency_graph_create_repository_snapshot",
  "toolDescription": "Create a snapshot of dependencies for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/dependency-graph/snapshots",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "version": "version",
      "job": "job",
      "sha": "sha",
      "ref": "ref",
      "detector": "detector",
      "metadata": "metadata",
      "manifests": "manifests",
      "scanned": "scanned"
    }
  },
  inputParamsSchema
}

export default tool