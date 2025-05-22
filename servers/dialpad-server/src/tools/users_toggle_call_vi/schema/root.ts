import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The user's id. ('me' can be used if you are using a user level API key)"),
  "enable_vi": z.boolean().nullable().describe("Whether or not call vi should be enabled.").optional(),
  "vi_locale": z.enum(["en-au","en-ca","en-de","en-fr","en-gb","en-it","en-jp","en-mx","en-nl","en-nz","en-pt","en-us","es-au","es-ca","es-de","es-es","es-fr","es-gb","es-it","es-jp","es-mx","es-nl","es-nz","es-pt","es-us","fr-au","fr-ca","fr-de","fr-es","fr-fr","fr-gb","fr-it","fr-jp","fr-mx","fr-nl","fr-nz","fr-pt","fr-us"]).nullable().describe("The locale to use for vi.").optional()
}