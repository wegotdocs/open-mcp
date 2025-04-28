import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "interaction_plan_api_v3_doc_interaction_plan_get",
  "toolDescription": "互動規劃",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/doc/interaction_plan",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool