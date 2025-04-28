import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "event_plan_api_v3_doc_event_plan_get",
  "toolDescription": "事件規劃",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/doc/event_plan",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool