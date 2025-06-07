import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_terraform_files_api_terraform_files_environment_resource_nam",
  "toolDescription": "Get Terraform Files",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/files/{environment}/{resource_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "environment": "environment",
      "resource_name": "resource_name"
    }
  },
  inputParamsSchema
}

export default tool