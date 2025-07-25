import { z } from "zod"

export const inputParamsSchema = {
  "cloud_service_spec": z.string().optional(),
  "package_ids": z.array(z.string()).describe("This will export package events for the package IDs you've indicated. Providing `all` will include all packages, `none` will exclude all packages, or leaving this field out will **include** all packages.").optional(),
  "tracking_pixel_ids": z.array(z.string()).describe("This will export tracking pixel events for the tracking pixel IDs you've indicated. Providing `all` will include all tracking pixels, `none` will exclude all tracking pixels, or leaving this field out will **include** all tracking pixels.").optional(),
  "company_domains": z.array(z.string()).describe("This will export company events for company domains you've indicated.").optional(),
  "include_company_rollups": z.boolean().describe("Indicating `true` in this field will schedule an export of the company rolled up data. For more information, visit https://docs.scarf.sh/data-export/#how-to-export-company-data").optional(),
  "variables": z.array(z.string()).describe("Variables for retrieving counts on variable values. These are presented in one column as values of key.value=count, with key.other for results not in the top. This only supports a small number of variables.").optional()
}