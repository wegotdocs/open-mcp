import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "archivepeople",
  "toolDescription": "Archive or delete one or multiple people.\n\nArchiving is the preferred method of removing users in Encharge.\n\nAlternatively, you can delete a person and all their data for GDPR purposes.",
  "baseUrl": "https://api.encharge.io/v1",
  "path": "/people",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "people": "people",
      "force": "force"
    }
  },
  inputParamsSchema
}

export default tool