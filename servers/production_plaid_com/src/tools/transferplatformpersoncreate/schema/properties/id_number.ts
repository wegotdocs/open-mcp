import { z } from "zod"

export const inputParamsSchema = {
  "value": z.string().describe("Value of the person's ID Number. Alpha-numeric, with all formatting characters stripped."),
  "type": z.enum(["ar_dni","au_drivers_license","au_passport","br_cpf","ca_sin","cl_run","cn_resident_card","co_nit","dk_cpr","eg_national_id","es_dni","es_nie","hk_hkid","in_pan","it_cf","jo_civil_id","jp_my_number","ke_huduma_namba","kw_civil_id","mx_curp","mx_rfc","my_nric","ng_nin","nz_drivers_license","om_civil_id","ph_psn","pl_pesel","ro_cnp","sa_national_id","se_pin","sg_nric","tr_tc_kimlik","us_ssn","us_ssn_last_4","za_smart_id"]).describe("A globally unique and human readable ID type, specific to the country and document category. For more context on this field, see [Hybrid Input Validation](https://plaid.com/docs/identity-verification/hybrid-input-validation).")
}