import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_adminorg",
  "toolDescription": "Retrieve the org by using the given ID. Note that the ID is the ID of the backing a3s namespace.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/adminorgs/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool