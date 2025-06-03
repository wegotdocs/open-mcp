import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().max(128).describe("If you provided a description for the ruleset, it is returned here. ").optional(),
  "labels": z.array(z.object({ "key": z.string().max(32).describe("The key of the container object label"), "value": z.string().max(32).describe("The value of the container object label") })).describe("The key and value of the container object").optional(),
  "rules": z.array(z.object({ "id": z.string().max(20).describe("The unique ID assigned to the rule."), "mitigation": z.enum(["log","isolate","terminate"]) })).max(100).optional()
}