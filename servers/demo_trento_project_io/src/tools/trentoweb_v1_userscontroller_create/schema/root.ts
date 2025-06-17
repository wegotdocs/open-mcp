import { z } from "zod"

export const inputParamsSchema = {
  "abilities": z.array(z.object({ "id": z.number().int().describe("Ability ID"), "label": z.string().describe("Description of the ability").optional(), "name": z.string().describe("Ability name"), "resource": z.string().describe("Resource attached to ability") }).strict().describe("Ability entry")).describe("A collection of abilities in the system").optional(),
  "email": z.string().email().describe("User email"),
  "enabled": z.boolean().describe("User enabled in the system"),
  "fullname": z.string().describe("User full name"),
  "password": z.string().describe("User new password"),
  "password_confirmation": z.string().describe("User new password, should be the same as password field"),
  "username": z.string().describe("User username")
}