import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievecurrentprofile",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/profile",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool