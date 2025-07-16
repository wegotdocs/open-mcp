import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "action_plan_check_asset_criticality",
  "toolDescription": "Check Asset Criticality",
  "baseUrl": "https://api.prismacloud.io",
  "path": "/apm/api/v1/asset-criticality/{asset-id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "asset-id": "asset-id"
    },
    "header": {
      "x-redlock-auth": "x-redlock-auth"
    }
  },
  inputParamsSchema
}

export default tool