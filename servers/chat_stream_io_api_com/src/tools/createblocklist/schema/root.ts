import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().max(255).describe("Block list name"),
  "team": z.string().optional(),
  "type": z.enum(["regex","domain","domain_allowlist","email","word"]).describe("Block list type.").optional(),
  "words": z.array(z.string()).describe("List of words to block")
}