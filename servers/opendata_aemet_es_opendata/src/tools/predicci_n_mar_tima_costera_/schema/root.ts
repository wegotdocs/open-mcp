import { z } from "zod"

export const inputParamsSchema = {
  "costa": z.string().describe(" | Código | Área Costera |\n|----------|----------|\n| 42 | Costa de Andalucía Occidental y Ceuta   |\n| 47  | Costa de Andalucía Oriental y Melilla   |\n| 41  | Costa de Asturias, Cantabria y País Vasco  |\n| 45  | Costa de Cataluña   |\n| 40  | Costa de Galicia   |\n| 44  | Costa de Illes Balears   |\n| 43  | Costa de las Islas Canarias  |\n| 46  | Costa de Valencia y Murcia")
}