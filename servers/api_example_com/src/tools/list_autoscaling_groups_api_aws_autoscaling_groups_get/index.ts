import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_autoscaling_groups_api_aws_autoscaling_groups_get",
  "toolDescription": "List Autoscaling Groups",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/autoscaling-groups",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool