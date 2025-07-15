import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_custom_fields_custom_field_id_",
  "toolDescription": "",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/custom_fields/{custom_field_id}",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool