import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "run_terraform_plan_api_terraform_plan_environment_resource_name_",
  "toolDescription": "Run Terraform Plan",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/plan/{environment}/{resource_name}",
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