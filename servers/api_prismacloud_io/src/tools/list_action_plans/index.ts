import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_action_plans",
  "toolDescription": "List Action Plans",
  "baseUrl": "https://api.prismacloud.io",
  "path": "/apm/api/v1/action-plan",
  "method": "post",
  "security": [],
  "paramsMap": {
    "header": {
      "x-redlock-auth": "x-redlock-auth"
    }
  },
  inputParamsSchema
}

export default tool