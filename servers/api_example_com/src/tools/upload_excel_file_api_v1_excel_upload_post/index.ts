import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload_excel_file_api_v1_excel_upload_post",
  "toolDescription": "Upload Excel File",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/excel/upload",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool