import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_namespace_configmaps_api_k8s_namespaces_namespace_configmaps",
  "toolDescription": "Get Namespace Configmaps",
  "baseUrl": "https://api.example.com",
  "path": "/api/k8s/namespaces/{namespace}/configmaps",
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