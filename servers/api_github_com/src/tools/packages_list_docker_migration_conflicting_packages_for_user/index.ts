import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "packages_list_docker_migration_conflicting_packages_for_user",
  "toolDescription": "Get list of conflicting packages during Docker migration for user",
  "baseUrl": "https://api.github.com",
  "path": "/users/{username}/docker/conflicts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool