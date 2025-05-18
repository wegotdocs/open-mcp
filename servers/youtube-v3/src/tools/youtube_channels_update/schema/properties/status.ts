import { z } from "zod"

export const inputParamsSchema = {
  "isLinked": z.boolean().describe("If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn't have a public YouTube identity.").optional(),
  "longUploadsStatus": z.enum(["longUploadsUnspecified","allowed","eligible","disallowed"]).describe("The long uploads status of this channel. See https://support.google.com/youtube/answer/71673 for more information.").optional(),
  "madeForKids": z.boolean().optional(),
  "privacyStatus": z.enum(["public","unlisted","private"]).describe("Privacy status of the channel.").optional(),
  "selfDeclaredMadeForKids": z.boolean().optional()
}