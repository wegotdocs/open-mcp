import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_environment_image_tags_api_environments_env_name_images_u",
  "toolDescription": "Update Environment Image Tags",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/{env_name}/images/update",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "env_name": "env_name"
    },
    "query": {
      "commit_to_git": "commit_to_git"
    }
  },
  inputParamsSchema
}

export default tool