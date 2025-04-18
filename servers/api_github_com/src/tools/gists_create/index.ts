import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gists_create",
  "toolDescription": "Create a gist",
  "baseUrl": "https://api.github.com",
  "path": "/gists",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "description": "description",
      "files": "files",
      "public": "public"
    }
  },
  inputParamsSchema
}

export default tool