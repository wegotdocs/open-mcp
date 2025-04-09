import { z } from "zod"

export const inputParams = {
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().lte(50).describe("The maximum number of items to return per page.").optional(),
  "types": z.array(z.enum(["postfunction","condition","validator"])).describe("The types of the transition rules to return."),
  "keys": z.array(z.string()).describe("The transition rule class keys, as defined in the Connect or the Forge app descriptor, of the transition rules to return.").optional(),
  "workflowNames": z.array(z.string().max(50)).describe("The list of workflow names to filter by.").optional(),
  "withTags": z.array(z.string().max(20)).describe("The list of `tags` to filter by.").optional(),
  "draft": z.boolean().describe("Whether draft or published workflows are returned. If not provided, both workflow types are returned.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts `transition`, which, for each rule, returns information about the transition the rule is assigned to.").optional()
}