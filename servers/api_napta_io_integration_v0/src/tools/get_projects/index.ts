import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_projects",
  "toolDescription": "Get projects",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/projects",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "pagination[cursor]": "pagination[cursor]",
      "pagination[limit]": "pagination[limit]",
      "id.napta_id[eq]": "id.napta_id[eq]",
      "id.napta_id[in]": "id.napta_id[in]",
      "id.external_id[eq]": "id.external_id[eq]",
      "id.external_id[in]": "id.external_id[in]",
      "text_fields[{field_name}][in]": "text_fields[{field_name}][in]"
    }
  },
  inputParamsSchema
}

export default tool