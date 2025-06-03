import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(256).describe("The unique identifier of a user in your corporate account identity provider solution."),
  "role": z.string().max(256).describe("The role assigned to a user").optional(),
  "status": z.enum(["enabled","disabled"]).describe("The status of an account. Available values: `enabled`, `disabled`\n").optional(),
  "description": z.string().max(256).describe("A brief note or identifier for the user account.").optional(),
  "If-Match": z.string().max(256).describe("Allows you to update an existing resource.\n\nNote: To get an ETag, send a GET request to the API\n").optional()
}