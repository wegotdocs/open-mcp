import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "credentials_revoke",
  "toolDescription": "Revoke a list of credentials",
  "baseUrl": "https://api.github.com",
  "path": "/credentials/revoke",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "credentials": "credentials"
    }
  },
  inputParamsSchema
}

export default tool