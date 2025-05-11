import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_assignments",
  "toolDescription": "Load an assignment",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/assignments",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "simulated": "simulated",
      "status": "status",
      "custom_dropdown_fields": "custom_dropdown_fields",
      "custom_text_fields": "custom_text_fields",
      "user": "user",
      "project": "project",
      "periods": "periods"
    }
  },
  inputParamsSchema
}

export default tool