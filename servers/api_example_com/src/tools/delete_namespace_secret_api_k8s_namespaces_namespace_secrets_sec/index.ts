import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_namespace_secret_api_k8s_namespaces_namespace_secrets_sec",
  "toolDescription": "Delete Namespace Secret",
  "baseUrl": "https://api.example.com",
  "path": "/api/k8s/namespaces/{namespace}/secrets/{secret_name}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace",
      "secret_name": "secret_name"
    }
  },
  inputParamsSchema
}

export default tool