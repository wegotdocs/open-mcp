import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_healthcontroller_health",
  "toolDescription": "Trento Web health",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/healthz",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool