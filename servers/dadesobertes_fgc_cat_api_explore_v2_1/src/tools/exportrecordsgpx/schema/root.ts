import { z } from "zod"

export const inputParamsSchema = {
  "dataset_id": z.string().describe("The identifier of the dataset to be queried.\n\nYou can find it in the \"Information\" tab of the dataset page or in the dataset URL, right after `/datasets/`."),
  "name_field": z.string().describe("Sets the field that is used as the 'name' attribute in the GPX output").optional(),
  "description_field_list": z.string().describe("Sets the fields to use in the 'description' attribute of the GPX output").optional(),
  "use_extension": z.boolean().describe("Set it to true to use the `<extension>` tag for attributes (as GDAL does). Set it to false to use the `<desc>` tag for attributes.\n**Warning:** the default value of this parameter is `false` in v2.0 and `true` starting with v2.1").optional()
}