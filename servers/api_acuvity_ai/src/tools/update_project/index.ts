import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_project",
  "toolDescription": "Update a project given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/projects/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "createTime": "createTime",
      "description": "description",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "name": "name",
      "namespace": "namespace",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool