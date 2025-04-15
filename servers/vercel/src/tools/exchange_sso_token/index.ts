import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exchange_sso_token",
  "toolDescription": "SSO Token Exchange",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/integrations/sso/token",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "code": "code",
      "state": "state",
      "client_id": "client_id",
      "client_secret": "client_secret",
      "redirect_uri": "redirect_uri",
      "grant_type": "grant_type"
    }
  },
  inputParamsSchema
}

export default tool