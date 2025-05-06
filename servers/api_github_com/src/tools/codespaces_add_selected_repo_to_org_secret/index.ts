import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_add_selected_repo_to_org_secret",
  "toolDescription": "Add selected repository to an organization secret",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}",
  "method": "put",
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