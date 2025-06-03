import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validatebycontent",
  "toolDescription": "Validates a Swagger/OpenAPI 2.0 or an OpenAPI 3.x definition returning a valid/invalid badge",
  "baseUrl": "/validator",
  "path": "/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "resolve": "resolve",
      "resolveFully": "resolveFully",
      "validateInternalRefs": "validateInternalRefs",
      "validateExternalRefs": "validateExternalRefs",
      "resolveRequestBody": "resolveRequestBody",
      "resolveCombinators": "resolveCombinators",
      "allowEmptyStrings": "allowEmptyStrings",
      "legacyYamlDeserialization": "legacyYamlDeserialization",
      "inferSchemaType": "inferSchemaType",
      "jsonSchemaValidation": "jsonSchemaValidation",
      "legacyJsonSchemaValidation": "legacyJsonSchemaValidation"
    }
  },
  inputParamsSchema
}

export default tool