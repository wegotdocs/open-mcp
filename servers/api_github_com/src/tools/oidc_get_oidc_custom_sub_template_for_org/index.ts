import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oidc_get_oidc_custom_sub_template_for_org",
  "toolDescription": "Get the customization template for an OIDC subject claim for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/oidc/customization/sub",
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