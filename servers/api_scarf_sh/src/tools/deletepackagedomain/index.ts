import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletepackagedomain",
  "toolDescription": "Delete package domain",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/{package_id}/domains/{domain_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool