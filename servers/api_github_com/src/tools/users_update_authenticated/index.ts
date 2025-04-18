import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_update_authenticated",
  "toolDescription": "Update the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "email": "email",
      "blog": "blog",
      "twitter_username": "twitter_username",
      "company": "company",
      "location": "location",
      "hireable": "hireable",
      "bio": "bio"
    }
  },
  inputParamsSchema
}

export default tool