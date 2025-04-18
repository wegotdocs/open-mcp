import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_get_public_key_for_authenticated_user",
  "toolDescription": "Get public key for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/secrets/public-key",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool