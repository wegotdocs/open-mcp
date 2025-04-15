import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_certs",
  "toolDescription": "",
  "baseUrl": "https://api.vercel.com",
  "path": "/certs",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool