import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsmarttransferusergroups",
  "toolDescription": "Get user group",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart-transfers/settings/user-groups",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool