import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_load_balancer_api_aws_load_balancers_lb_name_get",
  "toolDescription": "Get Load Balancer",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/load-balancers/{lb_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "lb_name": "lb_name"
    },
    "query": {
      "lb_type": "lb_type"
    }
  },
  inputParamsSchema
}

export default tool