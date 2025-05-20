import { z } from "zod"

export const inputParamsSchema = {
  "release_slug": z.string().regex(new RegExp("^[a-zA-Z0-9]+[-\\/][a-z][a-z0-9_]*[-\\/][0-9]+\\.[0-9]+\\.[0-9]+(?:[\\-+].+)?$")).describe("Unique textual identifier (slug) of the module Release resource to retrieve"),
  "plan_name": z.string().regex(new RegExp("^[a-z][a-z0-9_]*(?:::[a-z][a-z0-9_]*)*$")).describe("Full name of desired plan, including module name and namespaces")
}