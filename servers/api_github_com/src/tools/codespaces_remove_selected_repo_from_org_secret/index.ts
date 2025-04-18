import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_remove_selected_repo_from_org_secret",
  "toolDescription": "Remove selected repository from an organization secret",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "secret_name": "secret_name",
      "repository_id": "repository_id"
    }
  },
  inputParamsSchema
}

export default tool