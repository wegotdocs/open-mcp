import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_app",
  "toolDescription": "Updates the App with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/apps/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "components": "components",
      "createTime": "createTime",
      "description": "description",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "name": "name",
      "namespace": "namespace",
      "selector": "selector",
      "subject": "subject",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool