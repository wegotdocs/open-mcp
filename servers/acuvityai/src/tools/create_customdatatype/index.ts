import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_customdatatype",
  "toolDescription": "Creates a new custom data type.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/customdatatypes",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "createTime": "createTime",
      "description": "description",
      "friendlyName": "friendlyName",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "matches": "matches",
      "name": "name",
      "namespace": "namespace",
      "propagate": "propagate",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool