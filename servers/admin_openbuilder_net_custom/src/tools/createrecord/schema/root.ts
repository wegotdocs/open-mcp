import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int().describe("ID del progetto contenente le configurazioni del database"),
  "entity": z.string().describe("Nome dell'entità su cui operare"),
  "datas": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `datas` to the tool, first call the tool `expandSchema` with \"/properties/datas\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Dati da inserire nel record</property-description>")
}