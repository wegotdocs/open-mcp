import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this config template."),
  "format": z.enum(["json","txt"]).optional(),
  "name": z.string().min(1).max(100),
  "description": z.string().max(200).optional(),
  "environment_params": z.any().nullable().describe("Any <a href=\"https://jinja.palletsprojects.com/en/stable/api/#jinja2.Environment\">additional parameters</a> to pass when constructing the Jinja environment").optional(),
  "template_code": z.string().min(1).describe("Jinja template code."),
  "mime_type": z.string().max(50).describe("Defaults to <code>text/plain; charset=utf-8</code>").optional(),
  "file_name": z.string().max(200).describe("Filename to give to the rendered export file").optional(),
  "file_extension": z.string().max(15).describe("Extension to append to the rendered filename").optional(),
  "as_attachment": z.boolean().describe("Download file as attachment").optional(),
  "data_source": z.number().int().optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional()
}