import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this custom field."),
  "object_types": z.array(z.string()),
  "type": z.enum(["text","longtext","integer","decimal","boolean","date","datetime","url","json","select","multiselect","object","multiobject"]).describe("The type of data this custom field holds\n\n* `text` - Text\n* `longtext` - Text (long)\n* `integer` - Integer\n* `decimal` - Decimal\n* `boolean` - Boolean (true/false)\n* `date` - Date\n* `datetime` - Date & time\n* `url` - URL\n* `json` - JSON\n* `select` - Selection\n* `multiselect` - Multiple selection\n* `object` - Object\n* `multiobject` - Multiple objects").optional(),
  "related_object_type": z.string().nullable().optional(),
  "name": z.string().regex(new RegExp("^[a-z0-9_]+$")).min(1).max(50).describe("Internal field name"),
  "label": z.string().max(50).describe("Name of the field as displayed to users (if not provided, 'the field's name will be used)").optional(),
  "group_name": z.string().max(50).describe("Custom fields within the same group will be displayed together").optional(),
  "description": z.string().max(200).optional(),
  "required": z.boolean().describe("This field is required when creating new objects or editing an existing object.").optional(),
  "unique": z.boolean().describe("The value of this field must be unique for the assigned object").optional(),
  "search_weight": z.number().int().gte(0).lte(32767).describe("Weighting for search. Lower values are considered more important. Fields with a search weight of zero will be ignored.").optional(),
  "filter_logic": z.enum(["disabled","loose","exact"]).describe("Loose matches any instance of a given string; exact matches the entire field.\n\n* `disabled` - Disabled\n* `loose` - Loose\n* `exact` - Exact").optional(),
  "ui_visible": z.enum(["always","if-set","hidden"]).describe("Specifies whether the custom field is displayed in the UI\n\n* `always` - Always\n* `if-set` - If set\n* `hidden` - Hidden").optional(),
  "ui_editable": z.enum(["yes","no","hidden"]).describe("Specifies whether the custom field value can be edited in the UI\n\n* `yes` - Yes\n* `no` - No\n* `hidden` - Hidden").optional(),
  "is_cloneable": z.boolean().describe("Replicate this value when cloning objects").optional(),
  "default": z.any().nullable().describe("Default value for the field (must be a JSON value). Encapsulate strings with double quotes (e.g. \"Foo\").").optional(),
  "related_object_filter": z.any().nullable().describe("Filter the object selection choices using a query_params dict (must be a JSON value).Encapsulate strings with double quotes (e.g. \"Foo\").").optional(),
  "weight": z.number().int().gte(0).lte(32767).describe("Fields with higher weights appear lower in a form.").optional(),
  "validation_minimum": z.number().int().gte(-9223372036854776000).lte(9223372036854776000).nullable().describe("Minimum allowed value (for numeric fields)").optional(),
  "validation_maximum": z.number().int().gte(-9223372036854776000).lte(9223372036854776000).nullable().describe("Maximum allowed value (for numeric fields)").optional(),
  "validation_regex": z.string().max(500).describe("Regular expression to enforce on text field values. Use ^ and $ to force matching of entire string. For example, <code>^[A-Z]{3}$</code> will limit values to exactly three uppercase letters.").optional(),
  "choice_set": z.number().int().nullable().optional(),
  "comments": z.string().optional()
}