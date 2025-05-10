import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_adminmagiclink",
  "toolDescription": "Creates a new magic link using admin api.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/adminmagiclinks",
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
      "namespace": "namespace",
      "passcode": "passcode"
    }
  },
  inputParamsSchema
}

export default tool