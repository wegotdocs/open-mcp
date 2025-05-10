import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_using_template",
  "toolDescription": "Create a repository using a template",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{template_owner}/{template_repo}/generate",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "template_owner": "template_owner",
      "template_repo": "template_repo"
    },
    "body": {
      "owner": "owner",
      "name": "name",
      "description": "description",
      "include_all_branches": "include_all_branches",
      "private": "private"
    }
  },
  inputParamsSchema
}

export default tool