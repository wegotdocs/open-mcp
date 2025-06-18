import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload_file_api_v1_s3_upload_post",
  "toolDescription": "Upload File",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/s3/upload",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool