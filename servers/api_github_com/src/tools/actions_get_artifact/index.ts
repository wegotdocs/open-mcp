import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_artifact",
  "toolDescription": "Get an artifact",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "artifact_id": "artifact_id"
    }
  },
  inputParamsSchema
}

export default tool