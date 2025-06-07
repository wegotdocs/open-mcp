import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_terraform_resources_api_terraform_resources_environment_get",
  "toolDescription": "Get Terraform Resources",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/resources/{environment}",
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