import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbillingmetersideventsummaries",
  "toolDescription": "List billing meter event summaries",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/billing/meters/{id}/event_summaries",
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
      "id": "id"
    },
    "query": {
      "customer": "customer",
      "end_time": "end_time",
      "ending_before": "ending_before",
      "expand": "expand",
      "limit": "limit",
      "start_time": "start_time",
      "starting_after": "starting_after",
      "value_grouping_window": "value_grouping_window"
    }
  },
  inputParamsSchema
}

export default tool