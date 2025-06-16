import { z } from "zod"

export const inputParamsSchema = {
  "registry_url": z.string().describe("The registry URL from which to retrieve the snippets."),
  "operation_ids": z.array(z.string()).describe("The operation IDs to retrieve snippets for.").optional(),
  "method_paths": z.array(z.object({ "method": z.enum(["get","post","put","patch","delete","head","options","trace"]), "path": z.string() })).describe("The method paths to retrieve snippets for.").optional(),
  "languages": z.array(z.string()).describe("The languages to retrieve snippets for.").optional()
}