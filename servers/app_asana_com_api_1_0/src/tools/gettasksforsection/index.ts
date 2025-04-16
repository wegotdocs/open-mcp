import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettasksforsection",
  "toolDescription": "Get tasks from a section",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/sections/{section_gid}/tasks",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool