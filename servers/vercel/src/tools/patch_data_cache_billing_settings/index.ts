import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_data_cache_billing_settings",
  "toolDescription": "",
  "baseUrl": "https://api.vercel.com",
  "path": "/data-cache/billing-settings",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "body": {
      "excessBillingEnabled": "excessBillingEnabled"
    }
  },
  inputParamsSchema
}

export default tool