import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_auto_terraform_plan_output_api_terraform_auto_plan_output_en",
  "toolDescription": "Get Auto Terraform Plan Output",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/auto-plan-output/{environment}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "environment": "environment"
    }
  },
  inputParamsSchema
}

export default tool