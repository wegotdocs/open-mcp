import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "switch_plans",
  "toolDescription": "Switch Plans User Route",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/billing/plans/switch",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "plan": "plan"
    }
  },
  inputParamsSchema
}

export default tool