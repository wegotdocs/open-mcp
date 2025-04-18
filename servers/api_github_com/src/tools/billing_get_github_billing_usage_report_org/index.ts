import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "billing_get_github_billing_usage_report_org",
  "toolDescription": "Get billing usage report for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/organizations/{org}/settings/billing/usage",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "year": "year",
      "month": "month",
      "day": "day",
      "hour": "hour"
    }
  },
  inputParamsSchema
}

export default tool