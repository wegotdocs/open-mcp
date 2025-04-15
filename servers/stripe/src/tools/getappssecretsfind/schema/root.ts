import { z } from "zod"

export const inputParamsSchema = {
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "name": z.string().max(5000).describe("A name for the secret that's unique within the scope."),
  "scope": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `scope` to the tool, first call the tool `expandSchema` with \"/properties/scope\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.</property-description>")
}