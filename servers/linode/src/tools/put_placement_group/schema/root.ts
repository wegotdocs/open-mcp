import { z } from "zod"

export const inputParams = {
  "label": z.string().min(1).describe("A unique name for the placement group. A placement group `label` has the following constraints:\n\n- It needs to begin and end with an alphanumeric character.\n- It can only consist of alphanumeric characters, hyphens (`-`), underscores (`_`), or periods (`.`).").optional()
}