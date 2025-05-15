import { z } from "zod"

export const inputParamsSchema = {
  "Resource": z.array(z.object({ "objectType": z.enum(["Cloud","Connector","Data Hub Model","Integration Pack","Published Process","Role"]).describe("Resource object type details.").optional(), "resourceId": z.string().describe("Account group resource ID."), "resourceName": z.string().describe("Account group resource name.") })).optional()
}