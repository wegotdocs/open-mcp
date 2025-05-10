import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_visitedurl",
  "toolDescription": "Creates a new visited url.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/visitedurls",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "domainHits": "domainHits",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "namespace": "namespace",
      "origin": "origin",
      "principal": "principal"
    }
  },
  inputParamsSchema
}

export default tool