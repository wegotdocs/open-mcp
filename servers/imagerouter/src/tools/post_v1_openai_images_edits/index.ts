import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_openai_images_edits",
  "toolDescription": "",
  "baseUrl": "https://api.imagerouter.io",
  "path": "/v1/openai/images/edits",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool