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
      "model": "model",
      "prompt": "prompt",
      "negative_prompt": "negative_prompt",
      "style_preset": "style_preset",
      "height": "height",
      "width": "width",
      "steps": "steps",
      "cfg_scale": "cfg_scale",
      "seed": "seed",
      "lora_strength": "lora_strength",
      "safe_mode": "safe_mode",
      "return_binary": "return_binary",
      "hide_watermark": "hide_watermark",
      "format": "format",
      "embed_exif_metadata": "embed_exif_metadata",
      "inpaint": "inpaint"
    },
    "header": {
      "Accept-Encoding": "Accept-Encoding"
    }
  },
  inputParamsSchema
}

export default tool