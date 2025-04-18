import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oidc_update_oidc_custom_sub_template_for_org",
  "toolDescription": "Set the customization template for an OIDC subject claim for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/oidc/customization/sub",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "include_claim_keys": "include_claim_keys"
    }
  },
  inputParamsSchema
}

export default tool