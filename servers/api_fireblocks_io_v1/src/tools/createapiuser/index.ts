import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createapiuser",
  "toolDescription": "Create API Key",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/api_users",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "role": "role",
      "name": "name",
      "csrPem": "csrPem",
      "coSignerSetupType": "coSignerSetupType",
      "coSignerSetupIsFirstUser": "coSignerSetupIsFirstUser"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool