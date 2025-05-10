import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_the_thumbnail_of_a_program_api_v3_prog_prog_id_thumbnail_",
  "toolDescription": "[user:content=2] Update the thumbnail of a program",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/prog/{prog_id}/thumbnail",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "prog_id": "prog_id"
    },
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "thumbnail": "thumbnail"
    }
  },
  inputParamsSchema
}

export default tool