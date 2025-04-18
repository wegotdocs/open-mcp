import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_update_pat_access",
  "toolDescription": "Update the access a fine-grained personal access token has to organization resources",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/personal-access-tokens/{pat_id}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "pat_id": "pat_id"
    },
    "body": {
      "action": "action"
    }
  },
  inputParamsSchema
}

export default tool