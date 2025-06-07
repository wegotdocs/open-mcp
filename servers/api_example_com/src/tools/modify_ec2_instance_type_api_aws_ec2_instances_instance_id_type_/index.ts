import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "modify_ec2_instance_type_api_aws_ec2_instances_instance_id_type_",
  "toolDescription": "Modify Ec2 Instance Type",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/ec2-instances/{instance_id}/type",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "instance_id": "instance_id"
    },
    "query": {
      "new_type": "new_type"
    }
  },
  inputParamsSchema
}

export default tool