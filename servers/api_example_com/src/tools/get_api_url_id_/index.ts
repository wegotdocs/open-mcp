import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_url_id_",
  "toolDescription": "Get all information about a URL, including artifacts. This does not include any artifacts that are not yet generated but might be generated in the future.",
  "baseUrl": "https://api.example.com",
  "path": "/api/url/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool