import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "action_plan_business_criticality_assets",
  "toolDescription": "List Filtered Critical Assets",
  "baseUrl": "https://api.prismacloud.io",
  "path": "/apm/api/v1/critical-asset",
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