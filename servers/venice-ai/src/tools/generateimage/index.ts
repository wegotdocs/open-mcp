import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generateimage",
  "toolDescription": "/api/v1/image/generate",
  "baseUrl": "https://api.venice.ai/api/v1",
  "path": "/image/generate",
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
      "cfg_scale": "cfg_scale",
      "embed_exif_metadata": "embed_exif_metadata",
      "format": "format",
      "height": "height",
      "hide_watermark": "hide_watermark",
      "inpaint": "inpaint",
      "lora_strength": "lora_strength",
      "model": "model",
      "negative_prompt": "negative_prompt",
      "prompt": "prompt",
      "return_binary": "return_binary",
      "safe_mode": "safe_mode",
      "seed": "seed",
      "steps": "steps",
      "style_preset": "style_preset",
      "width": "width"
    },
    "header": {
      "Accept-Encoding": "Accept-Encoding"
    }
  },
  inputParamsSchema
}

export default tool