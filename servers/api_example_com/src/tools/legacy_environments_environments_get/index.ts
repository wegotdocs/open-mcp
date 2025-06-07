import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "legacy_environments_environments_get",
  "toolDescription": "Legacy Environments",
  "baseUrl": "https://api.example.com",
  "path": "/environments",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool