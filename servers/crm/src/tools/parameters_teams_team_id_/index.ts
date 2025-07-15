import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_teams_team_id_",
  "toolDescription": "",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/teams/{team_id}",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool