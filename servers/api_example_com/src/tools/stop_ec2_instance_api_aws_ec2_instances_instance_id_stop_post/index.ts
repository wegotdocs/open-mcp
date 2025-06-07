import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "stop_ec2_instance_api_aws_ec2_instances_instance_id_stop_post",
  "toolDescription": "Stop Ec2 Instance",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/ec2-instances/{instance_id}/stop",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "instance_id": "instance_id"
    },
    "query": {
      "force": "force"
    }
  },
  inputParamsSchema
}

export default tool