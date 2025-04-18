import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The new name of the user.").optional(),
  "email": z.string().describe("The publicly visible email address of the user.").optional(),
  "blog": z.string().describe("The new blog URL of the user.").optional(),
  "twitter_username": z.string().nullable().describe("The new Twitter username of the user.").optional(),
  "company": z.string().describe("The new company of the user.").optional(),
  "location": z.string().describe("The new location of the user.").optional(),
  "hireable": z.boolean().describe("The new hiring availability of the user.").optional(),
  "bio": z.string().describe("The new short biography of the user.").optional()
}