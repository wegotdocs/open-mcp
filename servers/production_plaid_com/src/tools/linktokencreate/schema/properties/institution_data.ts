import { z } from "zod"

export const inputParamsSchema = {
  "routing_number": z.string().describe("The routing number of the bank to highlight in Link. Note: in rare cases, a single routing number can be associated with multiple institutions, e.g. due to a brokerage using another institution to manage ACH on its sweep accounts. If this happens, the bank will not be highlighted in Link even if the routing number is provided.").optional()
}