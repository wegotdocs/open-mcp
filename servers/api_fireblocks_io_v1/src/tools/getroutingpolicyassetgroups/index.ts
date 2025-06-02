import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getroutingpolicyassetgroups",
  "toolDescription": "Returns all enabled routing policy asset groups",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_ids/routing_policy_asset_groups",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool