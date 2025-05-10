import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_webextensionconfig",
  "toolDescription": "Creates a new web extension configuration.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/webextensionconfigs",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "allowProxySettings": "allowProxySettings",
      "createTime": "createTime",
      "description": "description",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "name": "name",
      "namespace": "namespace",
      "refreshWebExtensionConfigInterval": "refreshWebExtensionConfigInterval",
      "reportVisitedURLsInterval": "reportVisitedURLsInterval",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool