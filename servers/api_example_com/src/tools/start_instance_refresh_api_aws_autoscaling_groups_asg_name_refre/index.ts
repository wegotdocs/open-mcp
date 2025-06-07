import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "start_instance_refresh_api_aws_autoscaling_groups_asg_name_refre",
  "toolDescription": "Start Instance Refresh",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/autoscaling-groups/{asg_name}/refresh",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "asg_name": "asg_name"
    },
    "body": {
      "min_healthy_percentage": "min_healthy_percentage",
      "instance_warmup": "instance_warmup",
      "preferences": "preferences"
    }
  },
  inputParamsSchema
}

export default tool