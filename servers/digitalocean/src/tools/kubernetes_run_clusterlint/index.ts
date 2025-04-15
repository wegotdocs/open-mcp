import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kubernetes_run_clusterlint",
  "toolDescription": "Run Clusterlint Checks on a Kubernetes Cluster",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/kubernetes/clusters/{cluster_id}/clusterlint",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "cluster_id": "cluster_id"
    },
    "body": {
      "include_groups": "include_groups",
      "include_checks": "include_checks",
      "exclude_groups": "exclude_groups",
      "exclude_checks": "exclude_checks"
    }
  },
  inputParamsSchema
}

export default tool