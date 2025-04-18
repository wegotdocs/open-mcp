import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_get_blob",
  "toolDescription": "Get a blob",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/blobs/{file_sha}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "file_sha": "file_sha"
    }
  },
  inputParamsSchema
}

export default tool