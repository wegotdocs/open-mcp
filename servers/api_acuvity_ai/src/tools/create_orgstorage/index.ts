import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_orgstorage",
  "toolDescription": "Creates a new orgstorage.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/orgstorages",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "createTime": "createTime",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "key": "key",
      "namespace": "namespace",
      "updateTime": "updateTime",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool