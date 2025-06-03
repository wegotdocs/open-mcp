import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "data": z.array(z.object({ "amount": z.number().describe("Amount of the reconciling item"), "currency": z.string(), "date": z.string().datetime({ offset: true }).describe("Date of the reconciling item"), "description": z.string().describe("Description of the reconciling item"), "metadata": z.record(z.any()).describe("Metadata of the reconciling item. You can use it to store any information you want to associate with the reconciling item.").optional(), "additionalInfo": z.record(z.any()).describe("Additional information of the reconciling item").optional(), "customId": z.string().describe("Embat custom/auto unique reconciling item identifier. You can use as your internal reconciling item identifier"), "reconcilingSourceCustomId": z.string().describe("Embat custom/auto unique Reconciling Source identifier. You can get them from 'Reconciling Sources' endpoints") }))
}