import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().regex(new RegExp("(CHI71|(DAL|DEN|LAB)70|DEN73)[A-Z0-9]{4}(000|[E][4][1-9]|[A][0-9][0-9]|[C][0-4][0-6])(2W|DD|EG|FD|ND|NG|PT|TF)\\d{5}"))
}