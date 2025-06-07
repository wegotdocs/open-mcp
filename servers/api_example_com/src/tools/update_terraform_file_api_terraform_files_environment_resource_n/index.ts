import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_terraform_file_api_terraform_files_environment_resource_n",
  "toolDescription": "Update Terraform File",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/files/{environment}/{resource_name}/{filename}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "environment": "environment",
      "resource_name": "resource_name",
      "filename": "filename"
    }
  },
  inputParamsSchema
}

export default tool