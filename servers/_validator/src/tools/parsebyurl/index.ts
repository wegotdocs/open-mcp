import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parsebyurl",
  "toolDescription": "Resolves / Dereferences a Swagger/OpenAPI 2.0 or an OpenAPI 3.x definition returning the resolved file",
  "baseUrl": "/validator",
  "path": "/parse",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "url": "url",
      "resolve": "resolve",
      "resolveFully": "resolveFully",
      "flatten": "flatten",
      "validateInternalRefs": "validateInternalRefs",
      "validateExternalRefs": "validateExternalRefs",
      "resolveRequestBody": "resolveRequestBody",
      "resolveCombinators": "resolveCombinators",
      "allowEmptyStrings": "allowEmptyStrings",
      "legacyYamlDeserialization": "legacyYamlDeserialization",
      "inferSchemaType": "inferSchemaType",
      "jsonSchemaValidation": "jsonSchemaValidation",
      "legacyJsonSchemaValidation": "legacyJsonSchemaValidation",
      "returnFullParseResult": "returnFullParseResult"
    }
  },
  inputParamsSchema
}

export default tool