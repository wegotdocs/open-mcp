import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_apptoken",
  "toolDescription": "Creates a new app token.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/apptokens",
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
      "claims": "claims",
      "createTime": "createTime",
      "email": "email",
      "expirationDate": "expirationDate",
      "machineID": "machineID",
      "name": "name",
      "namespace": "namespace",
      "sourceIP": "sourceIP",
      "token": "token",
      "tokenID": "tokenID",
      "transient": "transient",
      "updateTime": "updateTime",
      "validity": "validity"
    }
  },
  inputParamsSchema
}

export default tool