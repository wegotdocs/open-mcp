import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_namespace_secrets_api_k8s_namespaces_namespace_secrets_get",
  "toolDescription": "Get Namespace Secrets",
  "baseUrl": "https://api.example.com",
  "path": "/api/k8s/namespaces/{namespace}/secrets",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    }
  },
  inputParamsSchema
}

export default tool