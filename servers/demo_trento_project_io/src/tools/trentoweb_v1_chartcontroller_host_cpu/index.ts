import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_chartcontroller_host_cpu",
  "toolDescription": "Get a CPU chart of a host",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/charts/hosts/{id}/cpu",
  "method": "get",
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
      "id": "id"
    },
    "query": {
      "from": "from",
      "to": "to"
    }
  },
  inputParamsSchema
}

export default tool