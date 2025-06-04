import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("User's email address. The special value \"me\" can be used to indicate the authenticated user."),
  "autoExpunge": z.boolean().describe("If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail will wait for an update from the client before expunging messages marked as deleted.").optional(),
  "enabled": z.boolean().describe("Whether IMAP is enabled for the account.").optional(),
  "expungeBehavior": z.enum(["expungeBehaviorUnspecified","archive","trash","deleteForever"]).describe("The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder.").optional(),
  "maxFolderSize": z.number().int().describe("An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is interpreted to mean that there is no limit.").optional()
}