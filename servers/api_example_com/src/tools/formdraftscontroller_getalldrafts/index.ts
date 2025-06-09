import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdraftscontroller_getalldrafts",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/submissions/drafts",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool