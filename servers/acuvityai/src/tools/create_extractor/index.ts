import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_extractor",
  "toolDescription": "Creates a new extractor.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/extractors",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "SSEManagement": "SSEManagement",
      "analyzers": "analyzers",
      "anonymization": "anonymization",
      "behavior": "behavior",
      "block": "block",
      "cancelBehavior": "cancelBehavior",
      "createTime": "createTime",
      "deanonymize": "deanonymize",
      "description": "description",
      "honorPriorDecision": "honorPriorDecision",
      "ignore": "ignore",
      "importHash": "importHash",
      "importLabel": "importLabel",
      "method": "method",
      "name": "name",
      "namespace": "namespace",
      "path": "path",
      "propagate": "propagate",
      "script": "script",
      "type": "type",
      "updateTime": "updateTime"
    }
  },
  inputParamsSchema
}

export default tool