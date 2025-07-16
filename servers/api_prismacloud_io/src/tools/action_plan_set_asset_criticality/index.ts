import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "action_plan_set_asset_criticality",
  "toolDescription": "Set Asset Criticality",
  "baseUrl": "https://api.prismacloud.io",
  "path": "/apm/api/v1/asset-criticality",
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