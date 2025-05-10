import { z } from "zod"

export const inputParamsSchema = {
  "custom_field": z.string().describe("The custom field to associate with this container."),
  "is_important": z.boolean().describe("Whether this field should be considered important to this container (for instance, to display in the list view of items in the container).").optional(),
  "insert_before": z.string().describe("A gid of a Custom Field Setting on this container, before which the new Custom Field Setting will be added.  `insert_before` and `insert_after` parameters cannot both be specified.").optional(),
  "insert_after": z.string().describe("A gid of a Custom Field Setting on this container, after which the new Custom Field Setting will be added.  `insert_before` and `insert_after` parameters cannot both be specified.").optional()
}