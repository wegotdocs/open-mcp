import { z } from "zod"

export const inputParams = {
  "description": z.string().max(255).describe("The description of the resolution.").optional(),
  "name": z.string().max(60).describe("The name of the resolution. Must be unique (case-insensitive).")
}