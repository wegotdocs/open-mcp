import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "importpackageevents",
  "toolDescription": "Import external package events in bulk",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/{package_id}/import",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool