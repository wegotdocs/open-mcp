import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fix_terraform_runner_pods_api_terraform_fix_runner_pods_environm",
  "toolDescription": "Fix Terraform Runner Pods",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/fix-runner-pods/{environment}/{resource_name}",
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