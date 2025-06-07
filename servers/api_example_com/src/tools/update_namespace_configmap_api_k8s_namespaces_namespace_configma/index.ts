import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_namespace_configmap_api_k8s_namespaces_namespace_configma",
  "toolDescription": "Update Namespace Configmap",
  "baseUrl": "https://api.example.com",
  "path": "/api/k8s/namespaces/{namespace}/configmaps/{configmap_name}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace",
      "configmap_name": "configmap_name"
    }
  },
  inputParamsSchema
}

export default tool