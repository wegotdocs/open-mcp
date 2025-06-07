import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_template_api_templates_filename_get",
  "toolDescription": "Get Template",
  "baseUrl": "https://api.example.com",
  "path": "/api/templates/{filename}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "filename": "filename"
    }
  },
  inputParamsSchema
}

export default tool