import { z } from "zod"

export const inputParamsSchema = {
  "version": z.string(),
  "country": z.string(),
  "language": z.string(),
  "firstName": z.string(),
  "lastName": z.string(),
  "password": z.string(),
  "shippingCountry": z.union([z.union([z.literal("AT"), z.literal("at"), z.literal("BE"), z.literal("be"), z.literal("CH"), z.literal("ch"), z.literal("CZ"), z.literal("cz"), z.literal("DE"), z.literal("de"), z.literal("DK"), z.literal("dk"), z.literal("ES"), z.literal("es"), z.literal("FI"), z.literal("fi"), z.literal("FR"), z.literal("fr"), z.literal("GR"), z.literal("gr"), z.literal("HR"), z.literal("hr"), z.literal("HU"), z.literal("hu"), z.literal("IT"), z.literal("it"), z.literal("NL"), z.literal("nl"), z.literal("PL"), z.literal("pl"), z.literal("PT"), z.literal("pt"), z.literal("RO"), z.literal("ro"), z.literal("SE"), z.literal("se"), z.literal("SI"), z.literal("si"), z.literal("SK"), z.literal("sk")]), z.union([z.literal("AT"), z.literal("at"), z.literal("BE"), z.literal("be"), z.literal("CH"), z.literal("ch"), z.literal("CZ"), z.literal("cz"), z.literal("DE"), z.literal("de"), z.literal("ES"), z.literal("es"), z.literal("EU"), z.literal("eu"), z.literal("FR"), z.literal("fr"), z.literal("HR"), z.literal("hr"), z.literal("HU"), z.literal("hu"), z.literal("IT"), z.literal("it"), z.literal("NL"), z.literal("nl"), z.literal("PL"), z.literal("pl"), z.literal("RO"), z.literal("ro"), z.literal("SI"), z.literal("si"), z.literal("SK"), z.literal("sk")])]).optional(),
  "email": z.string().email(),
  "gender": z.union([z.literal("MR"), z.literal("mr"), z.literal("MRS"), z.literal("mrs"), z.literal("OTHER"), z.literal("other")]),
  "newsletterAccepted": z.boolean().optional(),
  "birthDate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `birthDate` to the tool, first call the tool `expandSchema` with \"/properties/birthDate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}