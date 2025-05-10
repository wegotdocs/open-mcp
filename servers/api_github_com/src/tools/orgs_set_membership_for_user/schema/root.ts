import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "role": z.enum(["admin","member"]).describe("The role to give the user in the organization. Can be one of:  \n * `admin` - The user will become an owner of the organization.  \n * `member` - The user will become a non-owner member of the organization.").optional()
}