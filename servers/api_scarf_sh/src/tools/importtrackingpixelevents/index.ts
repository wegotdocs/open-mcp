import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "importtrackingpixelevents",
  "toolDescription": "Import external tracking-pixel events in bulk",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/tracking-pixels/{owner}/{tracking_pixel_id}/import",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool