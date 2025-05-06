import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "git_create_tag",
  "toolDescription": "Create a tag object",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/git/tags",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "tag": "tag",
      "message": "message",
      "object": "object",
      "type": "type",
      "tagger": "tagger"
    }
  },
  inputParamsSchema
}

export default tool