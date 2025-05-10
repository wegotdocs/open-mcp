import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_webextensionconfig",
  "toolDescription": "Creates a new web extension configuration.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/webextensionconfigs",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "X-Namespace",
      "value": "<mcp-env-var>X_NAMESPACE</mcp-env-var>",
      "in": "header",
      "envVarName": "X_NAMESPACE"
    }
  ],
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