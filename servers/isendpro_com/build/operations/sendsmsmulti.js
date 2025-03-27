import { z } from "zod";
export const toolName = `sendsmsmulti`;
export const toolDescription = `Envoyer des SMS`;
export const baseUrl = `https://apirest.isendpro.com/cgi-bin`;
export const path = `/smsmulti`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "date_envoi": z.string().describe("Paramètre optionnel, date d'envoi au format YYYY-MM-DD hh:mm").optional(), "emetteur": z.string().describe("L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères. Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace. Il ne peut pas comporter uniquement des chiffres. Pour la modification de l’émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d’ajouter en fin de message le texte suivant : STOP XXXXX De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.").optional(), "gmt_zone": z.enum(["Pacific/Midway", "America/Adak", "Etc/GMT+10", "Pacific/Marquesas", "Pacific/Gambier", "America/Anchorage", "America/Ensenada", "Etc/GMT+8", "America/Los_Angeles", "America/Denver", "America/Chihuahua", "America/Dawson_Creek", "America/Belize", "America/Cancun", "Chile/EasterIsland", "America/Chicago", "America/New_York", "America/Havana", "America/Bogota", "America/Caracas", "America/Santiago", "America/La_Paz", "Atlantic/Stanley", "America/Campo_Grande", "America/Goose_Bay", "America/Glace_Bay", "America/St_Johns", "America/Araguaina", "America/Montevideo", "America/Miquelon", "America/Godthab", "America/Argentina/Buenos_Aires", "America/Sao_Paulo", "America/Noronha", "Atlantic/Cape_Verde", "Atlantic/Azores", "Europe/Belfast", "Europe/Dublin", "Europe/Lisbon", "Europe/London", "Africa/Abidjan", "Europe/Amsterdam", "Europe/Belgrade", "Europe/Brussels", "Africa/Algiers", "Africa/Windhoek", "Asia/Beirut", "Africa/Cairo", "Asia/Gaza", "Africa/Blantyre", "Asia/Jerusalem", "Europe/Minsk", "Asia/Damascus", "Europe/Moscow", "Africa/Addis_Ababa", "Asia/Tehran", "Asia/Dubai", "Asia/Yerevan", "Asia/Kabul", "Asia/Yekaterinburg", "Asia/Tashkent", "Asia/Kolkata", "Asia/Katmandu", "Asia/Dhaka", "Asia/Novosibirsk", "Asia/Rangoon", "Asia/Bangkok", "Asia/Krasnoyarsk", "Asia/Hong_Kong", "Asia/Irkutsk", "Australia/Perth", "Australia/Eucla", "Asia/Tokyo", "Asia/Seoul", "Asia/Yakutsk", "Australia/Adelaide", "Australia/Darwin", "Australia/Brisbane", "Australia/Hobart", "Asia/Vladivostok", "Australia/Lord_Howe", "Etc/GMT-11", "Asia/Magadan", "Pacific/Norfolk", "Asia/Anadyr", "Pacific/Auckland", "Etc/GMT-12", "Pacific/Chatham", "Pacific/Tongatapu", "Pacific/Kiritimati"]).describe("Fuseau horaire de la date d'envoi").optional(), "keyid": z.string().describe("Clé API"), "nostop": z.string().describe("Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = \"1\"").optional(), "num": z.array(z.string().describe("Numeros de téléphone au format national (exemple 0680010203) ou international (example 33680010203)")), "numAzur": z.literal("1").optional(), "repertoireId": z.string().describe("Id du repertoire").optional(), "sms": z.array(z.string().describe("Message à envoyer aux destinataires. Il peut y avoir un seul message ou 1 message par destintaire différent.")), "smslong": z.string().describe("Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué de plusieurs SMS. Il est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918 caractères par message. Pour des raisons technique, la limite par SMS concaténé étant de 153 caractères. En cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères du « STOP SMS ». Pour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = \"999\" ").optional(), "tracker": z.array(z.string().describe("Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. ")).optional(), "ucs2": z.string().describe("Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur les numéros hors France métropolitaine. Pour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = \"1\" Du fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu des 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.").optional() }).optional() }).shape;
