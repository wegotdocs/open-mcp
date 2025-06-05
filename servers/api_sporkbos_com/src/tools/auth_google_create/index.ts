import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth_google_create",
  "toolDescription": "class used for social authentications\nexample usage for facebook with access_token\n-------------\nfrom allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter\n\nclass FacebookLogin(SocialLoginView):\n    adapter_class = Fac",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/auth/google/",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "access_token": "access_token",
      "code": "code",
      "id_token": "id_token"
    }
  },
  inputParamsSchema
}

export default tool