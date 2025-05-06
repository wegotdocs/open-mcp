import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "servers_prompts_promptid_",
  "toolDescription": "",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/prompts/{promptId}",
  "method": "servers",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool