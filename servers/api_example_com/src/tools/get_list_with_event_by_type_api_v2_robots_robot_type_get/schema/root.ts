import { z } from "zod"

export const inputParamsSchema = {
  "robot_type": z.enum(["LIZARD","QUBE"])
}