import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "geteventimports",
  "toolDescription": "Retrieve a list of event imports",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/imports/{owner}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool