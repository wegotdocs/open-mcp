import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "calculateonboardingstepslogs",
  "toolDescription": "",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/scripts/calculate_onboarding_steps_logs",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool