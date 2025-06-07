import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_namespace_configmap_details_api_k8s_namespaces_namespace_con",
  "toolDescription": "Get Namespace Configmap Details",
  "baseUrl": "https://api.example.com",
  "path": "/api/k8s/namespaces/{namespace}/configmaps/{configmap_name}",
  "method": "get",
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