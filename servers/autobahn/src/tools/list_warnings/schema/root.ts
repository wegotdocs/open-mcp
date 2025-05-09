import { z } from "zod"

export const inputParamsSchema = {
  "roadId": z.string().regex(new RegExp("[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?(\\/[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?)?")).describe("Kann jede gültige Straßenbezeichnung sein (nicht auf Autobahnen beschränkt). Die Gültigkeit wird nicht überprüft: Abfragen mit nicht existierenden Straßenbezeichnungen liefern einen leeren Datensatz zurück. Die Schreibweise kann von der sonst üblichen Form abweichen (z.B. S1234 statt St1234 für Staatsstraßen).\n")
}