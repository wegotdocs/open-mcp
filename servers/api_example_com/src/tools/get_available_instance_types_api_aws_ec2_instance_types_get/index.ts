import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_available_instance_types_api_aws_ec2_instance_types_get",
  "toolDescription": "Get Available Instance Types",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/ec2-instance-types",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "architecture": "architecture"
    }
  },
  inputParamsSchema
}

export default tool