import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_action_plan_names",
  "toolDescription": "List Action Plan Names",
  "baseUrl": "https://api.prismacloud.io",
  "path": "/apm/api/v1/action-plan/names",
  "method": "get",
  "security": [],
  "paramsMap": {
    "header": {
      "x-redlock-auth": "x-redlock-auth"
    }
  },
  inputParamsSchema
}

export default tool