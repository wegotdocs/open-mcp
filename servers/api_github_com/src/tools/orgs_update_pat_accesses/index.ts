import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_update_pat_accesses",
  "toolDescription": "Update the access to organization resources via fine-grained personal access tokens",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/personal-access-tokens",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "action": "action",
      "pat_ids": "pat_ids"
    }
  },
  inputParamsSchema
}

export default tool