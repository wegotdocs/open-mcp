import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "skills_skill_report_details_retrieve",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/skills/skill_report_details/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "skill": "skill",
      "team": "team",
      "user": "user",
      "view_by": "view_by"
    }
  },
  inputParamsSchema
}

export default tool