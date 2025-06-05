export const OPENAPI_URL = "https://raw.githubusercontent.com/carlosalarconroman01/clinica-asturias/refs/heads/main/openapi%20clinica%20asturias.json"
export const SERVER_NAME = "_baseurl_"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./tools/post_api_account_oauth_token/index.js",
  "./tools/get_api_v1_0_pacientes_idpaciente_/index.js",
  "./tools/get_api_v1_0_pacientes_dni_dni_/index.js",
  "./tools/get_api_v1_0_pacientes_telefono_telefono_/index.js",
  "./tools/get_api_v1_0_aseguradoras/index.js",
  "./tools/get_api_v1_0_aseguradoras_privados/index.js",
  "./tools/get_api_v1_0_aseguradoras_pacientes_idpaciente_/index.js",
  "./tools/get_api_v1_0_especialidades/index.js",
  "./tools/get_api_v1_0_especialidades_aseguradoras_idaseguradora_/index.js",
  "./tools/get_api_v1_0_especialistas_especialidades_idespecialidad_/index.js",
  "./tools/get_api_v1_0_especialistas_especialidades_idespecialidad_asegura/index.js",
  "./tools/get_api_v1_0_especialistas_idespecialista_/index.js",
  "./tools/get_api_v1_0_tiposcitas_especialistas_idespecialista_/index.js",
  "./tools/get_api_v1_0_citas_disponibilidad_huecos_pacientes_idpaciente_as/index.js",
  "./tools/get_api_v1_0_citas_disponibilidad_dias_pacientes_idpaciente_aseg/index.js",
  "./tools/post_api_v1_0_citas/index.js",
  "./tools/delete_api_v1_0_citas_idcita_/index.js",
  "./tools/get_api_v1_0_citas_pacientes_idpaciente_pendientes/index.js",
  "./tools/get_api_v1_0_citas_pacientes_idpaciente_realizadas/index.js"
]