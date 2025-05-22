import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The user's id. ('me' can be used if you are using a user level API key)"),
  "screen_pop_uri": z.string().nullable().describe("The screen pop's url.\n\nMost Url should start with scheme name such as http or https. Be aware that url with userinfo subcomponent, such as\n\"https://username:password@www.example.com\" is not supported for security reasons. Launching native apps is also supported through a format such as \"customuri://domain.com\"")
}