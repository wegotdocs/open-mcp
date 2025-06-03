import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parsebycontent",
  "toolDescription": "Resolves / Dereferences Swagger/OpenAPI 2.0 or an OpenAPI 3.x definition returning the resolved file",
  "baseUrl": "/validator",
  "path": "/parse",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
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