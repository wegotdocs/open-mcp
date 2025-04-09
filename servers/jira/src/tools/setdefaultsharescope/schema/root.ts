import { z } from "zod"

export const inputParams = {
  "scope": z.enum(["GLOBAL","AUTHENTICATED","PRIVATE"]).describe("The scope of the default sharing for new filters and dashboards:\n\n *  `AUTHENTICATED` Shared with all logged-in users.\n *  `GLOBAL` Shared with all logged-in users. This shows as `AUTHENTICATED` in the response.\n *  `PRIVATE` Not shared with any users.")
}