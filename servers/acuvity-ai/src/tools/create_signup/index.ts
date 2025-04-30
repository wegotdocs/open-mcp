import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_signup",
  "toolDescription": "Creates a new signup request.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/signups",
  "method": "post",
  "security": [
    {
      "key": "X-Namespace",
      "value": "<mcp-env-var>X_NAMESPACE</mcp-env-var>",
      "in": "header",
      "envVarName": "X_NAMESPACE"
    }
  ],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "createTime": "createTime",
      "email": "email",
      "namespace": "namespace",
      "type": "type",
      "updateTime": "updateTime",
      "verifiedBy": "verifiedBy"
    }
  },
  inputParamsSchema
}

export default tool