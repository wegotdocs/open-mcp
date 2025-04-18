import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_create_for_org",
  "toolDescription": "Create an organization project",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/projects",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "name": "name",
      "body": "body"
    }
  },
  inputParamsSchema
}

export default tool