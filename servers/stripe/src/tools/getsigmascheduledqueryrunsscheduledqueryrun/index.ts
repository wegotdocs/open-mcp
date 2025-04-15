import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsigmascheduledqueryrunsscheduledqueryrun",
  "toolDescription": "Retrieve a scheduled query run",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/sigma/scheduled_query_runs/{scheduled_query_run}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "scheduled_query_run": "scheduled_query_run"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool