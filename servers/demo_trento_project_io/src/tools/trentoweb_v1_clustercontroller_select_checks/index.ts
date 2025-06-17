import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_clustercontroller_select_checks",
  "toolDescription": "Select Checks for a Cluster",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/clusters/{cluster_id}/checks",
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
      "checks": "checks"
    }
  },
  inputParamsSchema
}

export default tool