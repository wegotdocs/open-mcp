import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cancel_instance_refresh_api_aws_autoscaling_groups_asg_name_refr",
  "toolDescription": "Cancel Instance Refresh",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/autoscaling-groups/{asg_name}/refresh",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "asg_name": "asg_name"
    }
  },
  inputParamsSchema
}

export default tool