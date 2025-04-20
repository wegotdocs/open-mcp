import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oauthtokenrequest",
  "toolDescription": "アクセストークンの生成",
  "baseUrl": "https://api.example.com",
  "path": "/oauth2/token",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool