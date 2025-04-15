import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getversion",
  "toolDescription": "Get the version of the API",
  "baseUrl": "https://token-api.thegraph.com",
  "path": "/version",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool