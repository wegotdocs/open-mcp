import { z } from "zod"

export const inputParamsSchema = {
  "validation": z.enum(["strict","warn","none"]).describe("How to validate the JQL query and treat the validation results. Validation options include:\n\n *  `strict` Returns all errors. If validation fails, the query structure is not returned.\n *  `warn` Returns all errors. If validation fails but the JQL query is correctly formed, the query structure is returned.\n *  `none` No validation is performed. If JQL query is correctly formed, the query structure is returned."),
  "queries": z.array(z.string().min(1)).describe("A list of queries to parse.")
}