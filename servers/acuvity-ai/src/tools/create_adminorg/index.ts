import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_adminorg",
  "toolDescription": "Creates a new organization using admin api.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/adminorgs",
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
      "forceReimportTemplate": "forceReimportTemplate",
      "githubSigninEnabled": "githubSigninEnabled",
      "gitlabSigninEnabled": "gitlabSigninEnabled",
      "googleSigninEnabled": "googleSigninEnabled",
      "huggingfaceSigninEnabled": "huggingfaceSigninEnabled",
      "mode": "mode",
      "name": "name",
      "namespace": "namespace",
      "reimportTemplate": "reimportTemplate",
      "subject": "subject",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool