import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "billing_get_shared_storage_billing_org",
  "toolDescription": "Get shared storage billing for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/settings/billing/shared-storage",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool