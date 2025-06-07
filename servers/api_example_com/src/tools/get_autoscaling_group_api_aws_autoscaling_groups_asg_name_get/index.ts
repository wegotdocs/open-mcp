import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_autoscaling_group_api_aws_autoscaling_groups_asg_name_get",
  "toolDescription": "Get Autoscaling Group",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/autoscaling-groups/{asg_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "asg_name": "asg_name"
    }
  },
  inputParamsSchema
}

export default tool