import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createsalespipelinesstages",
  "toolDescription": "Create Stage",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/sales/pipelines/{pipeline_id}/stages",
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
      "pipeline_id": "pipeline_id"
    },
    "body": {
      "sales_pipelines_stage": "sales_pipelines_stage"
    }
  },
  inputParamsSchema
}

export default tool