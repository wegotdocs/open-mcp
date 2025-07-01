import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_url_url_id_artifact_artifact_id_",
  "toolDescription": "Get an artifact by its ID",
  "baseUrl": "https://api.example.com",
  "path": "/api/url/{url_id}/artifact/{artifact_id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool