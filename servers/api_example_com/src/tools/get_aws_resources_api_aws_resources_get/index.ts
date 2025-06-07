import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_aws_resources_api_aws_resources_get",
  "toolDescription": "Get Aws Resources",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/resources",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "environment": "environment"
    }
  },
  inputParamsSchema
}

export default tool