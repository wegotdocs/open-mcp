import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_terraform_plan_analysis_api_terraform_plan_analysis_environm",
  "toolDescription": "Get Terraform Plan Analysis",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/plan-analysis/{environment}/{resource_name}",
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