import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "run_terraform_apply_api_terraform_apply_environment_resource_nam",
  "toolDescription": "Run Terraform Apply",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/apply/{environment}/{resource_name}",
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