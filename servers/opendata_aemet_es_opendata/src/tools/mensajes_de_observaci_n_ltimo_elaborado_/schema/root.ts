import { z } from "zod"

export const inputParamsSchema = {
  "tipomensaje": z.string().describe(" | Código | Tipo de Mensaje |\n|----------|----------|\n| climat  | climat   |\n| synop  | synop   |\n| temp  | temp  ")
}