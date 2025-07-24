import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettrackingpixeldomains",
  "toolDescription": "Get Tracking Pixel Domains",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/tracking-pixels/{owner}/{tracking_pixel_id}/domains",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool