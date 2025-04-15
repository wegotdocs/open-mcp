import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_images_generations",
  "toolDescription": "Create image",
  "baseUrl": "https://api.together.xyz/v1",
  "path": "/images/generations",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "prompt": "prompt",
      "model": "model",
      "steps": "steps",
      "image_url": "image_url",
      "seed": "seed",
      "n": "n",
      "height": "height",
      "width": "width",
      "negative_prompt": "negative_prompt",
      "response_format": "response_format",
      "guidance": "guidance",
      "output_format": "output_format",
      "image_loras": "image_loras"
    }
  },
  inputParamsSchema
}

export default tool