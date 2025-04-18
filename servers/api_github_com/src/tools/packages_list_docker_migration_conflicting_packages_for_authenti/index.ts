import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "packages_list_docker_migration_conflicting_packages_for_authenti",
  "toolDescription": "Get list of conflicting packages during Docker migration for authenticated-user",
  "baseUrl": "https://api.github.com",
  "path": "/user/docker/conflicts",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool