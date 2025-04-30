import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_pacconfig",
  "toolDescription": "Update an pacconfig given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/pacconfigs/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "createTime": "createTime",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "name": "name",
      "namespace": "namespace",
      "providers": "providers",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool