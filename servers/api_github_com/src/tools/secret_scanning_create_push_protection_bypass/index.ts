import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "secret_scanning_create_push_protection_bypass",
  "toolDescription": "Create a push protection bypass",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/secret-scanning/push-protection-bypasses",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "reason": "reason",
      "placeholder_id": "placeholder_id"
    }
  },
  inputParamsSchema
}

export default tool