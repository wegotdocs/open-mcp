import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "markdown_render_raw",
  "toolDescription": "Render a Markdown document in raw mode",
  "baseUrl": "https://api.github.com",
  "path": "/markdown/raw",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool