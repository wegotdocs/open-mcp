import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_previews_rule_actions_send_email",
  "toolDescription": "Send a test email",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/previews/rule-actions/send-email",
  "method": "post",
  "security": [
    {
      "key": "REB-AUTH",
      "value": "<mcp-env-var>REB_AUTH</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_AUTH"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool