import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_ignoreddomain",
  "toolDescription": "Creates a new ignored domain.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/ignoreddomains",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "createTime": "createTime",
      "domain": "domain",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "namespace": "namespace",
      "propagate": "propagate",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool