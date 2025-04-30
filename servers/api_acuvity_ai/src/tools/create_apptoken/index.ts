import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_apptoken",
  "toolDescription": "Creates a new app token.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/apptokens",
  "method": "post",
  "security": [],
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