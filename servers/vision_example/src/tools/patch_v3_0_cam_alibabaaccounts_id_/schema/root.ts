import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(16).describe("The ID of the Alibaba Cloud account."),
  "name": z.string().max(254).describe("The name of the Alibaba Cloud account to be used in Cloud Account Management.").optional(),
  "description": z.string().max(254).describe("The description of the Alibaba Cloud account.\nThe default value is an empty string if the field is omitted.\n").optional(),
  "If-Match": z.string().max(254).describe("Entity tag in MD5 format to perform version control on the resource to be updated. This is returned in response header `ETag` of the v3 GET method.").optional()
}