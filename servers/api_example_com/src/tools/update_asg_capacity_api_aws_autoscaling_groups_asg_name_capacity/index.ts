import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_asg_capacity_api_aws_autoscaling_groups_asg_name_capacity",
  "toolDescription": "Update Asg Capacity",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/autoscaling-groups/{asg_name}/capacity",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "asg_name": "asg_name"
    },
    "query": {
      "min_size": "min_size",
      "max_size": "max_size",
      "desired_capacity": "desired_capacity"
    }
  },
  inputParamsSchema
}

export default tool