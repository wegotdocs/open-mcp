import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "name": z.string().describe("The name of the page data view."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "pageID": z.string().describe("The name of the page."),
  "predicates": z.array(z.object({ "key": z.string().describe("The key of the page data view predicate."), "operator": z.enum(["All","Any","Empty","Equals","EqualsOrGreaterThan","EqualsOrLesserThan","NotAny","NotEmpty","NotEquals"]).describe("The operator of the page data view predicate."), "values": z.array(z.any()).describe("The values of the predicate.").optional() }).describe("Represents a page data view predicate.")).describe("The match criteria used to make a query.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}