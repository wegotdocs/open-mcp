import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_clustercontroller_request_host_operation",
  "toolDescription": "Request operation for a Cluster host",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/clusters/{id}/hosts/{host_id}/operations/{operation}",
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
      "id": "id",
      "host_id": "host_id",
      "operation": "operation"
    }
  },
  inputParamsSchema
}

export default tool