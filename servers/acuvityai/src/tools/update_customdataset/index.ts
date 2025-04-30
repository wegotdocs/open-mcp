import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_customdataset",
  "toolDescription": "Update a custom data set given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/customdatasets/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "createTime": "createTime",
      "dataTypes": "dataTypes",
      "description": "description",
      "friendlyName": "friendlyName",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "name": "name",
      "namespace": "namespace",
      "propagate": "propagate",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool