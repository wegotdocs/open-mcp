import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_custom_events_id_rules_history_version_",
  "toolDescription": "Retrieve the record from the change history of the set of rules for a custom event",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/custom-events/{id}/rules/history/{version}",
  "method": "get",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "query": {
      "fields": "fields",
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool