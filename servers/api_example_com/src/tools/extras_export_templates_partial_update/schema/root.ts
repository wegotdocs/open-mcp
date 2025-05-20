import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this export template."),
  "object_types": z.array(z.string()).optional(),
  "name": z.string().min(1).max(100).optional(),
  "description": z.string().max(200).optional(),
  "environment_params": z.any().nullable().describe("Any <a href=\"https://jinja.palletsprojects.com/en/stable/api/#jinja2.Environment\">additional parameters</a> to pass when constructing the Jinja environment").optional(),
  "template_code": z.string().min(1).describe("Jinja template code.").optional(),
  "mime_type": z.string().max(50).describe("Defaults to <code>text/plain; charset=utf-8</code>").optional(),
  "file_name": z.string().max(200).describe("Filename to give to the rendered export file").optional(),
  "file_extension": z.string().max(15).describe("Extension to append to the rendered filename").optional(),
  "as_attachment": z.boolean().describe("Download file as attachment").optional(),
  "data_source": z.number().int().optional()
}