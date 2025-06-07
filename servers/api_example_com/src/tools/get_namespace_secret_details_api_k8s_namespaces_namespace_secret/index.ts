import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_namespace_secret_details_api_k8s_namespaces_namespace_secret",
  "toolDescription": "Get Namespace Secret Details",
  "baseUrl": "https://api.example.com",
  "path": "/api/k8s/namespaces/{namespace}/secrets/{secret_name}",
  "method": "get",
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