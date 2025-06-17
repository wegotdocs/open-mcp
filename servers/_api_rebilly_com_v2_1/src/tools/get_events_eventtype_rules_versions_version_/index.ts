import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_events_eventtype_rules_versions_version_",
  "toolDescription": "Retrieve the version of the set of rules",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/events/{eventType}/rules/versions/{version}",
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