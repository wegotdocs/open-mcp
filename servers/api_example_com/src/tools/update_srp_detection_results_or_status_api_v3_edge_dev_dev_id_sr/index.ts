import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_srp_detection_results_or_status_api_v3_edge_dev_dev_id_sr",
  "toolDescription": "[access code] Update SRP detection results or status",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/edge/dev/{dev_id}/srp/{srp_name}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "dev_id": "dev_id",
      "srp_name": "srp_name"
    },
    "header": {
      "access-code": "access-code"
    }
  },
  inputParamsSchema
}

export default tool