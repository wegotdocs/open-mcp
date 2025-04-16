import { z } from "zod"

export const inputParamsSchema = {
  "gid": z.string().describe("Globally unique identifier of the resource, as a string.").readonly().optional(),
  "resource_type": z.string().describe("The base type of this resource.").readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).describe("The time at which this resource was created.").readonly().optional(),
  "resource_subtype": z.string().describe("The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.").readonly().optional(),
  "text": z.string().describe("The plain text of the comment to add. Cannot be used with html_text.").optional(),
  "html_text": z.string().describe("[Opt In](/docs/inputoutput-options). HTML formatted text for a comment. This will not include the name of the creator.").optional(),
  "is_pinned": z.boolean().describe("*Conditional*. Whether the story should be pinned on the resource.").optional(),
  "sticker_name": z.enum(["green_checkmark","people_dancing","dancing_unicorn","heart","party_popper","people_waving_flags","splashing_narwhal","trophy","yeti_riding_unicorn","celebrating_people","determined_climbers","phoenix_spreading_love"]).describe("The name of the sticker in this story. `null` if there is no sticker.").optional()
}