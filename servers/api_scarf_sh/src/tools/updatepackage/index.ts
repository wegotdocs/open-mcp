import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepackage",
  "toolDescription": "Updates an existing package",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/{package_id}",
  "method": "put",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool