import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_openai_videos_generations",
  "toolDescription": "",
  "baseUrl": "https://api.imagerouter.io",
  "path": "/v1/openai/videos/generations",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "prompt": "prompt",
      "model": "model",
      "response_format": "response_format"
    }
  },
  inputParamsSchema
}

export default tool