import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Guid"),
  "name": z.string().nullable().describe("Name of catalog").optional(),
  "description": z.string().nullable().describe("Description of catalog").optional(),
  "schema": z.string().nullable().describe("Schema of catalog").optional(),
  "secretName": z.string().nullable().describe("Name of Key Vault Secret where the connectionstring is stored").optional(),
  "active": z.boolean().nullable().describe("Indicates if the catalog is active or not.").optional(),
  "definitionsContent": z.string().nullable().describe("Catalog definition in JSON format. Optional.").optional()
}