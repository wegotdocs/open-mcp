import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "query_session_api_v1_excel_sessions_session_id_query_post",
  "toolDescription": "Query Session",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/excel/sessions/{session_id}/query",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool