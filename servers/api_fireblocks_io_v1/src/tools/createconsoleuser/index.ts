import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createconsoleuser",
  "toolDescription": "Create console user",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/users",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "firstName": "firstName",
      "lastName": "lastName",
      "role": "role",
      "email": "email"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool