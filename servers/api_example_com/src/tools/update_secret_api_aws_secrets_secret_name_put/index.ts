import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_secret_api_aws_secrets_secret_name_put",
  "toolDescription": "Update Secret",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/secrets/{secret_name}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "secret_name": "secret_name"
    }
  },
  inputParamsSchema
}

export default tool