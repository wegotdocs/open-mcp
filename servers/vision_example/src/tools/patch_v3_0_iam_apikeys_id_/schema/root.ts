import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(36).describe("The unique identifier of the API key"),
  "role": z.string().max(128).describe("The user role assigned to the API key").optional(),
  "name": z.string().max(128).describe("The unique name of the API key").optional(),
  "status": z.enum(["enabled","disabled"]).describe("The status of an API key.\nAvailable values:\n* `enabled`\n* `disabled`\n").optional(),
  "description": z.string().max(2048).optional(),
  "If-Match": z.string().max(128).describe("The ETag of the resource you want to update. Note: The resource is updated only if the provided value matches the ETag of the resource.").optional()
}