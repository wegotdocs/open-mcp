import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_provider",
  "toolDescription": "Update a provider given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/providers/{id}",
  "method": "put",
  "security": [],
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