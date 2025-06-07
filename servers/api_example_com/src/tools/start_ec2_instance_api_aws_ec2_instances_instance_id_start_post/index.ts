import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "start_ec2_instance_api_aws_ec2_instances_instance_id_start_post",
  "toolDescription": "Start Ec2 Instance",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/ec2-instances/{instance_id}/start",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "instance_id": "instance_id"
    }
  },
  inputParamsSchema
}

export default tool