import { z } from "zod"

export const inputParamsSchema = {
  "geom": z.string().describe("Géométrie GeoJSON utilisée pour la recherche").optional(),
  "partition": z.string().describe("Partition GPU du document au format <DU/PSMV>_<INSEE/SIREN>").optional()
}