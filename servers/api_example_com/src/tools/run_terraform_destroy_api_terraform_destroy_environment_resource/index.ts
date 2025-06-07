import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "run_terraform_destroy_api_terraform_destroy_environment_resource",
  "toolDescription": "Run Terraform Destroy",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/destroy/{environment}/{resource_name}",
  "method": "post",
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