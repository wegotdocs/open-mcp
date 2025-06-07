import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_terraform_workflow_help_api_terraform_workflow_help_get",
  "toolDescription": "Get Terraform Workflow Help",
  "baseUrl": "https://api.example.com",
  "path": "/api/terraform/workflow-help",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool