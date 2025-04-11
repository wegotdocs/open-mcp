import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("__Read-only__ This Credential's unique ID.").readonly().optional(),
  "label": z.string().regex(new RegExp("[a-zA-Z0-9-_ \\.]{2,75}")).min(2).max(75).describe("The unique label for this Credential. This is for display purposes only.").optional(),
  "last_decrypted": z.string().datetime({ offset: true }).describe("__Read-only__ The date this Credential was last decrypted by a member of Linode special forces.").readonly().optional()
}