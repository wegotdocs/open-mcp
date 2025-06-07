import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_ec2_instances_with_k8s_info_api_aws_ec2_instances_get",
  "toolDescription": "Get Ec2 Instances With K8S Info",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/ec2-instances",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "cluster_name": "cluster_name"
    }
  },
  inputParamsSchema
}

export default tool