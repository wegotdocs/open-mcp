import { z } from "zod"

export const inputParamsSchema = {
  "dcat_ap_format": z.enum(["_ap_ch","_ap_de","_ap_se","_ap_sp","_ap_it","_ap_vl","_ap_benap"]).describe("DCAT format specifier for the catalog export.\n`dcat_ap_*` formats are only available upon activation."),
  "include_exports": z.enum(["csv","fgb","geojson","gpx","json","jsonl","jsonld","kml","n3","ov2","parquet","rdfxml","shp","turtle","xlsx"]).describe("Sets the datasets exports exposed in the DCAT export. By default, all exports are exposed.").optional(),
  "use_labels_in_exports": z.boolean().describe("If set to `true`, this parameter will make distributions output the label of each field rather than its name. This parameter only applies on distributions that contain a list of the fields in their output (e.g., CSV, XLSX).").optional()
}