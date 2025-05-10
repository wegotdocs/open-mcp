import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_publish_for_authenticated_user",
  "toolDescription": "Create a repository from an unpublished codespace",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/{codespace_name}/publish",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "codespace_name": "codespace_name"
    },
    "body": {
      "name": "name",
      "private": "private"
    }
  },
  inputParamsSchema
}

export default tool