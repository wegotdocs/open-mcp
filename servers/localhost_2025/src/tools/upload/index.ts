import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload",
  "toolDescription": "[新增]上传图片文件",
  "baseUrl": "http://localhost:2025",
  "path": "/v1/file",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool