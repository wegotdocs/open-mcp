import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_get_secret_for_authenticated_user",
  "toolDescription": "Get a secret for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/secrets/{secret_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "secret_name": "secret_name"
    }
  },
  inputParamsSchema
}

export default tool