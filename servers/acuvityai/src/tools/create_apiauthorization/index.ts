import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_apiauthorization",
  "toolDescription": "Creates a new api authorization policy.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/apiauthorizations",
  "method": "post",
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
      "permissions": "permissions",
      "role": "role",
      "subject": "subject",
      "targetNamespaces": "targetNamespaces",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool