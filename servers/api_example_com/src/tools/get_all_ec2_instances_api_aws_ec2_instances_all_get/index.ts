import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_ec2_instances_api_aws_ec2_instances_all_get",
  "toolDescription": "Get All Ec2 Instances",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/ec2-instances/all",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool