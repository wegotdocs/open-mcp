import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_create_for_authenticated_user",
  "toolDescription": "Create a user project",
  "baseUrl": "https://api.github.com",
  "path": "/user/projects",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "body": "body"
    }
  },
  inputParamsSchema
}

export default tool