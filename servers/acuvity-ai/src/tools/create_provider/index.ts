import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_provider",
  "toolDescription": "Creates a new provider.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/providers",
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
      "analyzeOutput": "analyzeOutput",
      "category": "category",
      "createTime": "createTime",
      "description": "description",
      "errorTransformer": "errorTransformer",
      "experimental": "experimental",
      "extractors": "extractors",
      "friendlyName": "friendlyName",
      "hosts": "hosts",
      "icon": "icon",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "injectors": "injectors",
      "mappers": "mappers",
      "name": "name",
      "namespace": "namespace",
      "propagate": "propagate",
      "riskScore": "riskScore",
      "status": "status",
      "tokenSwap": "tokenSwap",
      "trustedCA": "trustedCA",
      "updateTime": "updateTime",
      "upstreamUnsecure": "upstreamUnsecure"
    }
  },
  inputParamsSchema
}

export default tool