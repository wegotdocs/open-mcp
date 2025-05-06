import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_set_custom_oidc_sub_claim_for_repo",
  "toolDescription": "Set the customization template for an OIDC subject claim for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/oidc/customization/sub",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "use_default": "use_default",
      "include_claim_keys": "include_claim_keys"
    }
  },
  inputParamsSchema
}

export default tool