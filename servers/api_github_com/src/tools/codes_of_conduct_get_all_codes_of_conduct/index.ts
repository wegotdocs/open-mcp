import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codes_of_conduct_get_all_codes_of_conduct",
  "toolDescription": "Get all codes of conduct",
  "baseUrl": "https://api.github.com",
  "path": "/codes_of_conduct",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool