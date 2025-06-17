import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_healthcontroller_ready",
  "toolDescription": "Trento Web ready",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/readyz",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool