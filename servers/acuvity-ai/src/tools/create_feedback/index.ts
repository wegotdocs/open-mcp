import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_feedback",
  "toolDescription": "Creates a new feedback.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/feedbacks",
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
      "comment": "comment",
      "createTime": "createTime",
      "key": "key",
      "logHash": "logHash",
      "logUnixNano": "logUnixNano",
      "namespace": "namespace",
      "principal": "principal",
      "provider": "provider",
      "score": "score",
      "status": "status",
      "updateTime": "updateTime",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool