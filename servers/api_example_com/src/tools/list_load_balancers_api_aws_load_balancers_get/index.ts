import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_load_balancers_api_aws_load_balancers_get",
  "toolDescription": "List Load Balancers",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/load-balancers",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool