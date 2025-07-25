import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_v2_tracking_pixels_owner_tracking_pixel_id_events",
  "toolDescription": "",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/tracking-pixels/{owner}/{tracking_pixel_id}/events",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool