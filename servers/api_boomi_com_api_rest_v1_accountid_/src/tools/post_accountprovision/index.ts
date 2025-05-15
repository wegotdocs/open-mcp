import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_accountprovision",
  "toolDescription": "Provision Partner Customer Account operation",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AccountProvision",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool