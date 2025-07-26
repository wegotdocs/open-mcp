import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this product."),
  "prefetch": z.array(z.enum(["authorization_groups","members","prod_type","product_manager","regulations","sla_configuration","team_manager","technical_contact"])).describe("List of fields for which to prefetch model instances and add those to the response").optional()
}