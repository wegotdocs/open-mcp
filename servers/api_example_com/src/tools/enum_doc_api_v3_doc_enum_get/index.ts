import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "enum_doc_api_v3_doc_enum_get",
  "toolDescription": "列舉",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/doc/enum",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool