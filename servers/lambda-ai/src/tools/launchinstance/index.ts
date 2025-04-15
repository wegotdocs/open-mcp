import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "launchinstance",
  "toolDescription": "Launch instances",
  "baseUrl": "https://cloud.lambda.ai",
  "path": "/api/v1/instance-operations/launch",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "region_name": "region_name",
      "instance_type_name": "instance_type_name",
      "ssh_key_names": "ssh_key_names",
      "file_system_names": "file_system_names",
      "name": "name",
      "image": "image",
      "user_data": "user_data"
    }
  },
  inputParamsSchema
}

export default tool