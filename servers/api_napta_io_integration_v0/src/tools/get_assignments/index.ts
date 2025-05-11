import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_assignments",
  "toolDescription": "Get assignments",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/assignments",
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
      "user.napta_id[eq]": "user.napta_id[eq]",
      "user.napta_id[in]": "user.napta_id[in]",
      "user.external_id[eq]": "user.external_id[eq]",
      "user.external_id[in]": "user.external_id[in]",
      "project.napta_id[eq]": "project.napta_id[eq]",
      "project.napta_id[in]": "project.napta_id[in]",
      "project.external_id[eq]": "project.external_id[eq]",
      "project.external_id[in]": "project.external_id[in]",
      "simulated[eq]": "simulated[eq]"
    }
  },
  inputParamsSchema
}

export default tool