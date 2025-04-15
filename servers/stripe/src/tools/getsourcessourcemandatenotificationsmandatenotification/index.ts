import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsourcessourcemandatenotificationsmandatenotification",
  "toolDescription": "Retrieve a Source MandateNotification",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/sources/{source}/mandate_notifications/{mandate_notification}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "mandate_notification": "mandate_notification",
      "source": "source"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool