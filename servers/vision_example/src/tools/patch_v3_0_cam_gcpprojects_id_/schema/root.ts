import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(30).describe("The GCP project number Cloud Account Management uses for managing the connected GCP project."),
  "name": z.string().max(254).describe("The name of the Google Cloud project to be used in Cloud Accounts.").optional(),
  "description": z.string().max(254).describe("The description of the Google Cloud project.\nIf there is no description, the field is empty.\n").optional(),
  "If-Match": z.string().max(254).describe("Entity tag in MD5 format to perform version control on the resource to be updated. This is returned in response header `ETag` of the v3 GET method.").optional()
}