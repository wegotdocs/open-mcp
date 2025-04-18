import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_deployment",
  "toolDescription": "Create a deployment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/deployments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "ref": "ref",
      "task": "task",
      "auto_merge": "auto_merge",
      "required_contexts": "required_contexts",
      "payload": "payload",
      "environment": "environment",
      "description": "description",
      "transient_environment": "transient_environment",
      "production_environment": "production_environment"
    }
  },
  inputParamsSchema
}

export default tool