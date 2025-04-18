import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_create_blob",
  "toolDescription": "Create a blob",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/blobs",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "content": "content",
      "encoding": "encoding"
    }
  },
  inputParamsSchema
}

export default tool