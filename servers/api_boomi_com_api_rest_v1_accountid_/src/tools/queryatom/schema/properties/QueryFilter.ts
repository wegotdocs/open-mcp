import { z } from "zod"

export const inputParamsSchema = {
  "expression": z.object({ "argument": z.array(z.string()).optional(), "operator": z.enum(["EQUALS","NOT_EQUALS","CONTAINS","NOT_CONTAINS"]), "property": z.enum(["name","id","hostname","status","type","capabilities"]) })
}