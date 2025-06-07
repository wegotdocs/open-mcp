import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_terraform_logs_api_terraform_logs_environment_resource_name_",
  "toolDescription": "Get Terraform Logs",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/logs/{environment}/{resource_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "environment": "environment",
      "resource_name": "resource_name"
    },
    "query": {
      "tail_lines": "tail_lines"
    }
  },
  inputParamsSchema
}

export default tool