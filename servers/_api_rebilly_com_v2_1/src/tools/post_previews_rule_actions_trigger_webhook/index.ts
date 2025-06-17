import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_previews_rule_actions_trigger_webhook",
  "toolDescription": "Trigger a test webhook",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/previews/rule-actions/trigger-webhook",
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