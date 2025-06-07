import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "diagnose_terraform_issues_api_terraform_diagnose_environment_res",
  "toolDescription": "Diagnose Terraform Issues",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/diagnose/{environment}/{resource_name}",
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