import { z } from "zod"

export const inputParamsSchema = {
  "fecha": z.string().describe("Fecha de elaboración (AAAA-MM-DD)"),
  "ambito": z.string().describe(" | Código | Ámbito |\n|----------|----------|\n| esp  | España|\n| and  | Andalucía   |\n| arn  | Aragón   |\n| ast  | Asturias  |\n| bal  | Ballears, Illes   |\n| coo  | Canarias   |\n| can  | Cantabria   |\n| cle  | Castilla y León   |\n| clm  | Castilla - La Mancha   |\n| cat  | Cataluña   |\n| val  | Comunitat Valenciana   |\n| ext  | Extremadura   |\n| gal  | Galicia   |\n| mad  | Madrid, Comunidad de    |\n| mur  | Murcia, Región de   |\n| nav  | Navarra, Comunidad Foral de   |\n| pva  | País Vasco |\n| rio  | Rioja, La"),
  "dia": z.string().describe(" | Código de día | Día |\n|----------|----------|\n| a | D+0 (00-12)  |\n| b  | D+0 (12-24)   |\n|  c | D+1 (00-12)  |\n| d  | D+1 (12-24) |\n| e  | D+2 (00-12) |\n| f  | D+2 (12-24)")
}