import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "packages_list_docker_migration_conflicting_packages_for_organiza",
  "toolDescription": "Get list of conflicting packages during Docker migration for organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/docker/conflicts",
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