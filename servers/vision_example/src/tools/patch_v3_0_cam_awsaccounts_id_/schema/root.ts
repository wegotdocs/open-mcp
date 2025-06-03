import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(12).describe("The ID of the AWS account."),
  "If-Match": z.string().max(254).describe("Entity tag in MD5 format to perform version control on the resource to be updated. This is returned in response header `ETag` of the v3 GET method.").optional()
}