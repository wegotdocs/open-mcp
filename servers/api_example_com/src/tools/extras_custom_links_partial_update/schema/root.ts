import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this custom link."),
  "object_types": z.array(z.string()).optional(),
  "name": z.string().min(1).max(100).optional(),
  "enabled": z.boolean().optional(),
  "link_text": z.string().min(1).describe("Jinja2 template code for link text").optional(),
  "link_url": z.string().min(1).describe("Jinja2 template code for link URL").optional(),
  "weight": z.number().int().gte(0).lte(32767).optional(),
  "group_name": z.string().max(50).describe("Links with the same group will appear as a dropdown menu").optional(),
  "button_class": z.enum(["default","blue","indigo","purple","pink","red","orange","yellow","green","teal","cyan","gray","black","white","ghost-dark"]).describe("The class of the first link in a group will be used for the dropdown button\n\n* `default` - Default\n* `blue` - Blue\n* `indigo` - Indigo\n* `purple` - Purple\n* `pink` - Pink\n* `red` - Red\n* `orange` - Orange\n* `yellow` - Yellow\n* `green` - Green\n* `teal` - Teal\n* `cyan` - Cyan\n* `gray` - Gray\n* `black` - Black\n* `white` - White\n* `ghost-dark` - Link").optional(),
  "new_window": z.boolean().describe("Force link to open in a new window").optional()
}