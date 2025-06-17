import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_sapsystemcontroller_request_instance_operation",
  "toolDescription": "Request operation for a SAP instance",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/sap_systems/{id}/hosts/{host_id}/instances/{instance_number}/operations/{operation}",
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
      "instance_number": "instance_number",
      "operation": "operation"
    }
  },
  inputParamsSchema
}

export default tool