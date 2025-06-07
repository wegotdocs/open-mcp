import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_secret_details_api_aws_secrets_secret_name_get",
  "toolDescription": "Get Secret Details",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/secrets/{secret_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "secret_name": "secret_name"
    }
  },
  inputParamsSchema
}

export default tool