import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_team",
  "toolDescription": "Update a team given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/teams/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "createTime": "createTime",
      "description": "description",
      "disabled": "disabled",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "name": "name",
      "namespace": "namespace",
      "subject": "subject",
      "updateTime": "updateTime",
      "weight": "weight"
    }
  },
  inputParamsSchema
}

export default tool