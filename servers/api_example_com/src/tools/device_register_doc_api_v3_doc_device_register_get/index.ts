import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "device_register_doc_api_v3_doc_device_register_get",
  "toolDescription": "設備註冊流程",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/doc/device_register",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool