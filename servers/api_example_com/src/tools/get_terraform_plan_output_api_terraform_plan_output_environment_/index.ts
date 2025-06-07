import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_terraform_plan_output_api_terraform_plan_output_environment_",
  "toolDescription": "Get Terraform Plan Output",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/plan-output/{environment}/{resource_name}",
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