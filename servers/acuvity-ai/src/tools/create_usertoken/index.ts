import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_usertoken",
  "toolDescription": "Creates a new app token.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/usertokens",
  "method": "post",
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
      "claims": "claims",
      "clientType": "clientType",
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