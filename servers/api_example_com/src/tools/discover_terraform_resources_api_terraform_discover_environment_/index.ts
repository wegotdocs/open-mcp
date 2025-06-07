import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "discover_terraform_resources_api_terraform_discover_environment_",
  "toolDescription": "Discover Terraform Resources",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/discover/{environment}",
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