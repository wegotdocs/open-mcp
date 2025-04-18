import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_create_webhook",
  "toolDescription": "Create an organization webhook",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/hooks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "name": "name",
      "config": "config",
      "events": "events",
      "active": "active"
    }
  },
  inputParamsSchema
}

export default tool