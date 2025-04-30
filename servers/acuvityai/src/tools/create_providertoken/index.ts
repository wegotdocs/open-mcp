import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_providertoken",
  "toolDescription": "Creates a new provider token list.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/providertokens",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "createTime": "createTime",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "name": "name",
      "namespace": "namespace",
      "provider": "provider",
      "token": "token",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool