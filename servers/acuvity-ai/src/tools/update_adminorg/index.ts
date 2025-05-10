import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_adminorg",
  "toolDescription": "Update the org by using the given ID. Note that the ID is the ID of the backing a3s namespace.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/adminorgs/{id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
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