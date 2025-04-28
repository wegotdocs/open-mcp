import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload_a_file_api_v3_edge_dev_dev_id_upload_put",
  "toolDescription": "[access code] Upload a file",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/edge/dev/{dev_id}/upload",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "dev_id": "dev_id"
    },
    "query": {
      "display_name": "display_name",
      "filename": "filename"
    },
    "header": {
      "access-code": "access-code"
    }
  },
  inputParamsSchema
}

export default tool