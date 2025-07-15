import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_webhooks_uuid_",
  "toolDescription": "",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/webhooks/{uuid}",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool