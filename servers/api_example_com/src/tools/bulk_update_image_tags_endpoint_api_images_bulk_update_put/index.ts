import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bulk_update_image_tags_endpoint_api_images_bulk_update_put",
  "toolDescription": "Bulk Update Image Tags Endpoint",
  "baseUrl": "https://api.example.com",
  "path": "/api/images/bulk-update",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "updates": "updates",
      "commit_to_git": "commit_to_git"
    }
  },
  inputParamsSchema
}

export default tool