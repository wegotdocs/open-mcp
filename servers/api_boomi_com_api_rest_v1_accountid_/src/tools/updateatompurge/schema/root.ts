import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The unique ID assigned by the system to the Runtime cloud attachment. The Runtime ID is found in the user interface by navigating to **Manage > Runtime Management** and viewing the Runtime Information panel for a selected Runtime."),
  "atomId": z.string().describe("The unique ID assigned by the system to the Runtime cloud attachment. The Runtime ID is found in the user interface by navigating to **Manage > Runtime Management** and viewing the Runtime Information panel for a selected Runtime.").optional()
}