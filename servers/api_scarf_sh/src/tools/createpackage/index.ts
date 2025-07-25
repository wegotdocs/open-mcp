import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpackage",
  "toolDescription": "Creates a new package",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool