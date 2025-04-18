import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "meta_root",
  "toolDescription": "GitHub API Root",
  "baseUrl": "https://api.github.com",
  "path": "/",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool