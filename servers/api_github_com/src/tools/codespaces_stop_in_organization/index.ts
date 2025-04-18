import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_stop_in_organization",
  "toolDescription": "Stop a codespace for an organization user",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/members/{username}/codespaces/{codespace_name}/stop",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "username": "username",
      "codespace_name": "codespace_name"
    }
  },
  inputParamsSchema
}

export default tool