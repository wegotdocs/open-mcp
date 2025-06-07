import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_aws_secrets_api_aws_secrets_get",
  "toolDescription": "List Aws Secrets",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/secrets",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "environment": "environment",
      "prefix": "prefix"
    }
  },
  inputParamsSchema
}

export default tool