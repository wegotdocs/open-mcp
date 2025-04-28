import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "register_data_encrypt_api_v3_edge_register_data_encrypt_post",
  "toolDescription": "!!! 測試用 !!! 設備註冊資料加密。",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/edge/register_data_encrypt",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool