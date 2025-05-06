import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_convert_member_to_outside_collaborator",
  "toolDescription": "Convert an organization member to outside collaborator",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/outside_collaborators/{username}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "username": "username"
    },
    "body": {
      "async": "async"
    }
  },
  inputParamsSchema
}

export default tool