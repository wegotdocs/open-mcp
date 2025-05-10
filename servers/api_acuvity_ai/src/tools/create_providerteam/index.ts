import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_providerteam",
  "toolDescription": "Creates a new provider team.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/providerteams",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "createTime": "createTime",
      "description": "description",
      "disabled": "disabled",
      "excludedSubject": "excludedSubject",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "name": "name",
      "namespace": "namespace",
      "subject": "subject",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool