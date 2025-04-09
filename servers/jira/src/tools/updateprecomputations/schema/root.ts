import { z } from "zod"

export const inputParams = {
  "skipNotFoundPrecomputations": z.boolean().optional(),
  "values": z.array(z.object({ "error": z.string().describe("The error message to be displayed to the user if the given function clause is no longer valid during recalculation of the precomputation.").optional(), "id": z.string().describe("The id of the precomputation to update."), "value": z.string().describe("The new value of the precomputation.").optional() }).strict().describe("Precomputation id and its new value.")).optional()
}