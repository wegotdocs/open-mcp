import { z } from "zod"

export const inputParamsSchema = {
  "message": z.string().nullable().describe("The presence status message to be updated.").optional(),
  "provider": z.string().nullable().describe("The provider requesting the presence status update.").optional(),
  "type": z.enum(["conference","default"]).nullable().describe("Predefined templates will be only used for the supported types.\n\nAccepts the following types:\n- `default` -- status message template: \"{provider}: {message}\"\n- `conference` -- status message template: \"On {provider}: in the {message} meeting\"\n\n`provider` and `message` should be chosen with the message template in mind.").optional()
}