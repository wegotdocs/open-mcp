import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_download_artifact",
  "toolDescription": "Download an artifact",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "artifact_id": "artifact_id",
      "archive_format": "archive_format"
    }
  },
  inputParamsSchema
}

export default tool