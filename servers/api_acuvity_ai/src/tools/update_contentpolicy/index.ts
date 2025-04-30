import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_contentpolicy",
  "toolDescription": "Updates the content policy with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/contentpolicies/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "createTime": "createTime",
      "description": "description",
      "friendlyName": "friendlyName",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "moderations": "moderations",
      "name": "name",
      "namespace": "namespace",
      "propagate": "propagate",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool