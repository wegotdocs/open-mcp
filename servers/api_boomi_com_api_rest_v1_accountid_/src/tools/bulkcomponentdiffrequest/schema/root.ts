import { z } from "zod"

export const inputParamsSchema = {
  "request": z.array(z.object({ "id": z.string().optional() })).optional(),
  "type": z.enum(["GET","DELETE","UPDATE","CREATE"]).describe("Read only. The type of component. See the section Component Types later in this topic for a complete list of component type values").optional()
}