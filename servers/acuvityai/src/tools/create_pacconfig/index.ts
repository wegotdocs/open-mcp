import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_pacconfig",
  "toolDescription": "Creates a new pac config.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/pacconfigs",
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
      "providers": "providers",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool