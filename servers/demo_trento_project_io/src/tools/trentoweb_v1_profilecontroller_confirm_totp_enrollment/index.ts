import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_profilecontroller_confirm_totp_enrollment",
  "toolDescription": "Confirm TOTP enrollment procedure",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/profile/totp_enrollment",
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
      "totp_code": "totp_code"
    }
  },
  inputParamsSchema
}

export default tool