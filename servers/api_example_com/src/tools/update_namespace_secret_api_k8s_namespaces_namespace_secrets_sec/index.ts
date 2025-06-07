import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_namespace_secret_api_k8s_namespaces_namespace_secrets_sec",
  "toolDescription": "Update Namespace Secret",
  "baseUrl": "https://api.example.com",
  "path": "/api/k8s/namespaces/{namespace}/secrets/{secret_name}",
  "method": "put",
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