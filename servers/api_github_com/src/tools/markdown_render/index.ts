import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "markdown_render",
  "toolDescription": "Render a Markdown document",
  "baseUrl": "https://api.github.com",
  "path": "/markdown",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "text": "text",
      "mode": "mode",
      "context": "context"
    }
  },
  inputParamsSchema
}

export default tool