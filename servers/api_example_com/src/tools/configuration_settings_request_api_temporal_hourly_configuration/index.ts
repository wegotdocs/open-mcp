import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "configuration_settings_request_api_temporal_hourly_configuration",
  "toolDescription": "Configuration Settings Request",
  "baseUrl": "https://api.example.com",
  "path": "/api/temporal/hourly/configuration",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool