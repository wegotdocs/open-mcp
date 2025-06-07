import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_template_api_templates_filename_put",
  "toolDescription": "Update Template",
  "baseUrl": "https://api.example.com",
  "path": "/api/templates/{filename}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "filename": "filename"
    }
  },
  inputParamsSchema
}

export default tool