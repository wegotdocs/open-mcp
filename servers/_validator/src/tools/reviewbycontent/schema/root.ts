import { z } from "zod"

export const inputParamsSchema = {
  "resolve": z.boolean().describe("resolves the definition\nSee https://github.com/swagger-api/swagger-parser/blob/master/README.md#options\n").optional(),
  "resolveFully": z.boolean().describe("fully resolves the definition\nSee https://github.com/swagger-api/swagger-parser/blob/master/README.md#options'\n").optional(),
  "validateInternalRefs": z.boolean().describe("validate internal references").optional(),
  "validateExternalRefs": z.boolean().describe("validate external references while resolving").optional(),
  "resolveRequestBody": z.boolean().describe("bundle requestBody inline during resolving also with resolveFully set to false").optional(),
  "resolveCombinators": z.boolean().describe("customizes behaviour related to `allOf/anyOf/oneOf` with resolveFully set to true. \nSee https://github.com/swagger-api/swagger-parser/blob/master/README.md#options'\n").optional(),
  "allowEmptyStrings": z.boolean().describe("when set to true parses empty values as empty strings").optional(),
  "legacyYamlDeserialization": z.boolean().describe("legacyYamlDeserialization").optional(),
  "inferSchemaType": z.boolean().describe("infer schema type for item, default and schemas with additionalProperties").optional(),
  "jsonSchemaValidation": z.boolean().describe("performs JSON Schema validation").optional(),
  "legacyJsonSchemaValidation": z.boolean().describe("performs JSON Schema validation using legacy engine (fge)").optional()
}