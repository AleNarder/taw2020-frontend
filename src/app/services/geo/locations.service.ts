import { Injectable } from '@angular/core';
import { Location } from '../models/Location';

/**
 * Servizio che contiene utilities utili a compilare
 * e filtrare i dati relativi alla residenza dell'utente
 */
@Injectable({
  providedIn: 'root'
})

export class LocationsService {

  private locations: Location[] = [
    {
      "Comune": "Abano Terme",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35031
    },
    {
      "Comune": "Abbadia Cerreto",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26834
    },
    {
      "Comune": "Abbadia Lariana",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23821
    },
    {
      "Comune": "Abbadia San Salvatore",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53021
    },
    {
      "Comune": "Abbasanta",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9071
    },
    {
      "Comune": "Abbateggio",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Abbiategrasso",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20081
    },
    {
      "Comune": "Abetone",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51021
    },
    {
      "Comune": "Abriola",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Acate",
      "Provincia": "RG",
      "Regione": "SIC",
      "CAP": 97011
    },
    {
      "Comune": "Accadia",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71021
    },
    {
      "Comune": "Acceglio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12021
    },
    {
      "Comune": "Accettura",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75011
    },
    {
      "Comune": "Acciano",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Accumoli",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2011
    },
    {
      "Comune": "Acerenza",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85011
    },
    {
      "Comune": "Acerno",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84042
    },
    {
      "Comune": "Acerra",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80011
    },
    {
      "Comune": "Aci Bonaccorsi",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95020
    },
    {
      "Comune": "Aci Castello",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95021
    },
    {
      "Comune": "Aci Catena",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95022
    },
    {
      "Comune": "Aci Sant'Antonio",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95025
    },
    {
      "Comune": "Acireale",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95024
    },
    {
      "Comune": "Acquacanina",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62035
    },
    {
      "Comune": "Acquafondata",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Acquaformosa",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Acquafredda",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25010
    },
    {
      "Comune": "Acqualagna",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61041
    },
    {
      "Comune": "Acquanegra Cremonese",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Acquanegra sul Chiese",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46011
    },
    {
      "Comune": "Acquapendente",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1021
    },
    {
      "Comune": "Acquappesa",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Acquarica del Capo",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73040
    },
    {
      "Comune": "Acquaro",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89832
    },
    {
      "Comune": "Acquasanta Terme",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63095
    },
    {
      "Comune": "Acquasparta",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5021
    },
    {
      "Comune": "Acquaviva Collecroce",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86030
    },
    {
      "Comune": "Acquaviva delle Fonti",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70021
    },
    {
      "Comune": "Acquaviva d'Isernia",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86080
    },
    {
      "Comune": "Acquaviva Picena",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63075
    },
    {
      "Comune": "Acquaviva Platani",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93010
    },
    {
      "Comune": "Acquedolci",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Acqui Terme",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15011
    },
    {
      "Comune": "Acri",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87041
    },
    {
      "Comune": "Acuto",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3010
    },
    {
      "Comune": "Adelfia",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70010
    },
    {
      "Comune": "Adrano",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95031
    },
    {
      "Comune": "Adrara San Martino",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Adrara San Rocco",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Adria",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45011
    },
    {
      "Comune": "Adro",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Affi",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37010
    },
    {
      "Comune": "Affile",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 21
    },
    {
      "Comune": "Afragola",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80021
    },
    {
      "Comune": "Africo",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89030
    },
    {
      "Comune": "Agazzano",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Agerola",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80051
    },
    {
      "Comune": "Aggius",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7020
    },
    {
      "Comune": "Agira",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94011
    },
    {
      "Comune": "Agliana",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51031
    },
    {
      "Comune": "Agliano Terme",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14041
    },
    {
      "Comune": "Agliè",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10011
    },
    {
      "Comune": "Aglientu",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7020
    },
    {
      "Comune": "Agna",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35021
    },
    {
      "Comune": "Agnadello",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Agnana Calabra",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Agnone",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86081
    },
    {
      "Comune": "Agnosine",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25071
    },
    {
      "Comune": "Agordo",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32021
    },
    {
      "Comune": "Agosta",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Agra",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Agrate Brianza",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20864
    },
    {
      "Comune": "Agrate Conturbia",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Agrigento",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92100
    },
    {
      "Comune": "Agropoli",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84043
    },
    {
      "Comune": "Agugliano",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60020
    },
    {
      "Comune": "Agugliaro",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36020
    },
    {
      "Comune": "Aicurzio",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20886
    },
    {
      "Comune": "Aidomaggiore",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Aidone",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94010
    },
    {
      "Comune": "Aielli",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67041
    },
    {
      "Comune": "Aiello Calabro",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87031
    },
    {
      "Comune": "Aiello del Friuli",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33041
    },
    {
      "Comune": "Aiello del Sabato",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Aieta",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Ailano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "Ailoche",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13861
    },
    {
      "Comune": "Airasca",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Airola",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82011
    },
    {
      "Comune": "Airole",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18030
    },
    {
      "Comune": "Airuno",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23881
    },
    {
      "Comune": "Aisone",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Ala",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38061
    },
    {
      "Comune": "Alà dei Sardi",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7020
    },
    {
      "Comune": "Ala di Stura",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Alagna",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Alagna Valsesia",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13021
    },
    {
      "Comune": "Alanno",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Alano di Piave",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32031
    },
    {
      "Comune": "Alassio",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17021
    },
    {
      "Comune": "Alatri",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3011
    },
    {
      "Comune": "Alba",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12051
    },
    {
      "Comune": "Alba Adriatica",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64011
    },
    {
      "Comune": "Albagiara",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Albairate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Albanella",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84044
    },
    {
      "Comune": "Albano di Lucania",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Albano Laziale",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 41
    },
    {
      "Comune": "Albano Sant'Alessandro",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24061
    },
    {
      "Comune": "Albano Vercellese",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "Albaredo Arnaboldi",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Albaredo d'Adige",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37041
    },
    {
      "Comune": "Albaredo per San Marco",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Albareto",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43051
    },
    {
      "Comune": "Albaretto della Torre",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Albavilla",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22031
    },
    {
      "Comune": "Albenga",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17031
    },
    {
      "Comune": "Albera Ligure",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Alberobello",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70011
    },
    {
      "Comune": "Alberona",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71031
    },
    {
      "Comune": "Albese con Cassano",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22032
    },
    {
      "Comune": "Albettone",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36020
    },
    {
      "Comune": "Albi",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88055
    },
    {
      "Comune": "Albiano",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38041
    },
    {
      "Comune": "Albiano d'Ivrea",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Albiate",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20847
    },
    {
      "Comune": "Albidona",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87070
    },
    {
      "Comune": "Albignasego",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Albinea",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42020
    },
    {
      "Comune": "Albino",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24021
    },
    {
      "Comune": "Albiolo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Albisola Superiore",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17011
    },
    {
      "Comune": "Albissola Marina",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17012
    },
    {
      "Comune": "Albizzate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21041
    },
    {
      "Comune": "Albonese",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Albosaggia",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Albugnano",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14022
    },
    {
      "Comune": "Albuzzano",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Alcamo",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91011
    },
    {
      "Comune": "Alcara Li Fusi",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Aldeno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Aldino",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Ales",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9091
    },
    {
      "Comune": "Alessandria",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": "1512x"
    },
    {
      "Comune": "Alessandria del Carretto",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87070
    },
    {
      "Comune": "Alessandria della Rocca",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92010
    },
    {
      "Comune": "Alessano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73031
    },
    {
      "Comune": "Alezio",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73011
    },
    {
      "Comune": "Alfano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84040
    },
    {
      "Comune": "Alfedena",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Alfianello",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Alfiano Natta",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15021
    },
    {
      "Comune": "Alfonsine",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48011
    },
    {
      "Comune": "Alghero",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7041
    },
    {
      "Comune": "Algua",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Alì",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98020
    },
    {
      "Comune": "Alì Terme",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98021
    },
    {
      "Comune": "Alia",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90021
    },
    {
      "Comune": "Aliano",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75010
    },
    {
      "Comune": "Alice Bel Colle",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Alice Castello",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Alice Superiore",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Alife",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81011
    },
    {
      "Comune": "Alimena",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Aliminusa",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Allai",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Alleghe",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32022
    },
    {
      "Comune": "Allein",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Allerona",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5011
    },
    {
      "Comune": "Alliste",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73040
    },
    {
      "Comune": "Allumiere",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 51
    },
    {
      "Comune": "Alluvioni Cambiò",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Almè",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24011
    },
    {
      "Comune": "Almenno San Bartolomeo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Almenno San Salvatore",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24031
    },
    {
      "Comune": "Almese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Alonte",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36045
    },
    {
      "Comune": "Alpette",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Alpignano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10091
    },
    {
      "Comune": "Alseno",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Alserio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22040
    },
    {
      "Comune": "Altamura",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70022
    },
    {
      "Comune": "Altare",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17041
    },
    {
      "Comune": "Altavilla Irpina",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83011
    },
    {
      "Comune": "Altavilla Milicia",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90010
    },
    {
      "Comune": "Altavilla Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15041
    },
    {
      "Comune": "Altavilla Silentina",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84045
    },
    {
      "Comune": "Altavilla Vicentina",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36077
    },
    {
      "Comune": "Altidona",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63824
    },
    {
      "Comune": "Altilia",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Altino",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Altissimo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36070
    },
    {
      "Comune": "Altivole",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31030
    },
    {
      "Comune": "Alto",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Altofonte",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Altomonte",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87042
    },
    {
      "Comune": "Altopascio",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55011
    },
    {
      "Comune": "Alviano",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5020
    },
    {
      "Comune": "Alvignano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81012
    },
    {
      "Comune": "Alvito",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3041
    },
    {
      "Comune": "Alzano Lombardo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24022
    },
    {
      "Comune": "Alzano Scrivia",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Alzate Brianza",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22040
    },
    {
      "Comune": "Amalfi",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84011
    },
    {
      "Comune": "Amandola",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63857
    },
    {
      "Comune": "Amantea",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87032
    },
    {
      "Comune": "Amaro",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Amaroni",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Amaseno",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3021
    },
    {
      "Comune": "Amato",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Amatrice",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2012
    },
    {
      "Comune": "Ambivere",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Amblar",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38011
    },
    {
      "Comune": "Ameglia",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19031
    },
    {
      "Comune": "Amelia",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5022
    },
    {
      "Comune": "Amendolara",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87071
    },
    {
      "Comune": "Ameno",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Amorosi",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82031
    },
    {
      "Comune": "Ampezzo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33021
    },
    {
      "Comune": "Anacapri",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80071
    },
    {
      "Comune": "Anagni",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3012
    },
    {
      "Comune": "Ancarano",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64010
    },
    {
      "Comune": "Ancona",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": "601xx"
    },
    {
      "Comune": "Andali",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Andalo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Andalo Valtellino",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23014
    },
    {
      "Comune": "Andezeno",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Andora",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17051
    },
    {
      "Comune": "Andorno Micca",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13811
    },
    {
      "Comune": "Andrano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73032
    },
    {
      "Comune": "Andrate",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Andreis",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "Andretta",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Andria",
      "Provincia": "BT",
      "Regione": "PUG",
      "CAP": 76123
    },
    {
      "Comune": "Andriano",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "Anela",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Anfo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25070
    },
    {
      "Comune": "Angera",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21021
    },
    {
      "Comune": "Anghiari",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52031
    },
    {
      "Comune": "Angiari",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37050
    },
    {
      "Comune": "Angolo Terme",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Angri",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84012
    },
    {
      "Comune": "Angrogna",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Anguillara Sabazia",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 61
    },
    {
      "Comune": "Anguillara Veneta",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35022
    },
    {
      "Comune": "Annicco",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26021
    },
    {
      "Comune": "Annone di Brianza",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23841
    },
    {
      "Comune": "Annone Veneto",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30020
    },
    {
      "Comune": "Anoia",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89020
    },
    {
      "Comune": "Antegnate",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24051
    },
    {
      "Comune": "Anterivo",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Antey-Saint-Andrè",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Anticoli Corrado",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 22
    },
    {
      "Comune": "Antignano",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14010
    },
    {
      "Comune": "Antillo",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Antonimina",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Antrodoco",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2013
    },
    {
      "Comune": "Antrona Schieranco",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28841
    },
    {
      "Comune": "Anversa degli Abruzzi",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Anzano del Parco",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22040
    },
    {
      "Comune": "Anzano di Puglia",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71020
    },
    {
      "Comune": "Anzi",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Anzio",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 42
    },
    {
      "Comune": "Anzola dell'Emilia",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40011
    },
    {
      "Comune": "Anzola d'Ossola",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28877
    },
    {
      "Comune": "Aosta",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11100
    },
    {
      "Comune": "Apecchio",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61042
    },
    {
      "Comune": "Apice",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82021
    },
    {
      "Comune": "Apiro",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62021
    },
    {
      "Comune": "Apollosa",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Appiano Gentile",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Appiano sulla Strada del Vino",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39057
    },
    {
      "Comune": "Appignano",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62010
    },
    {
      "Comune": "Appignano del Tronto",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63083
    },
    {
      "Comune": "Aprica",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23031
    },
    {
      "Comune": "Apricale",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18035
    },
    {
      "Comune": "Apricena",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71011
    },
    {
      "Comune": "Aprigliano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87051
    },
    {
      "Comune": "Aprilia",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4011
    },
    {
      "Comune": "Aquara",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Aquila d'Arroscia",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18020
    },
    {
      "Comune": "Aquileia",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33051
    },
    {
      "Comune": "Aquilonia",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83041
    },
    {
      "Comune": "Aquino",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3031
    },
    {
      "Comune": "Aradeo",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73040
    },
    {
      "Comune": "Aragona",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92021
    },
    {
      "Comune": "Aramengo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Arba",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33090
    },
    {
      "Comune": "Arborea",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9092
    },
    {
      "Comune": "Arborio",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13031
    },
    {
      "Comune": "Arbus",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9031
    },
    {
      "Comune": "Arcade",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31030
    },
    {
      "Comune": "Arce",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3032
    },
    {
      "Comune": "Arcene",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Arcevia",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60011
    },
    {
      "Comune": "Archi",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66044
    },
    {
      "Comune": "Arcidosso",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58031
    },
    {
      "Comune": "Arcinazzo Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Arcisate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21051
    },
    {
      "Comune": "Arco",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38062
    },
    {
      "Comune": "Arcola",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19021
    },
    {
      "Comune": "Arcole",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37040
    },
    {
      "Comune": "Arconate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20020
    },
    {
      "Comune": "Arcore",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20862
    },
    {
      "Comune": "Arcugnano",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36057
    },
    {
      "Comune": "Ardara",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Ardauli",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9081
    },
    {
      "Comune": "Ardea",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 40
    },
    {
      "Comune": "Ardenno",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23011
    },
    {
      "Comune": "Ardesio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Ardore",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89031
    },
    {
      "Comune": "Arena",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89832
    },
    {
      "Comune": "Arena Po",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Arenzano",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16011
    },
    {
      "Comune": "Arese",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20020
    },
    {
      "Comune": "Arezzo",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52100
    },
    {
      "Comune": "Argegno",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Argelato",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40050
    },
    {
      "Comune": "Argenta",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44011
    },
    {
      "Comune": "Argentera",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Arguello",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Argusto",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Ari",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Ariano Irpino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83031
    },
    {
      "Comune": "Ariano nel Polesine",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45012
    },
    {
      "Comune": "Ariccia",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 40
    },
    {
      "Comune": "Arielli",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66030
    },
    {
      "Comune": "Arienzo",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81021
    },
    {
      "Comune": "Arignano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Aritzo",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8031
    },
    {
      "Comune": "Arizzano",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28811
    },
    {
      "Comune": "Arlena di Castro",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Arluno",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Armeno",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28011
    },
    {
      "Comune": "Armento",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Armo",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18026
    },
    {
      "Comune": "Armungia",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Arnad",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Arnara",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3020
    },
    {
      "Comune": "Arnasco",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17032
    },
    {
      "Comune": "Arnesano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "Arola",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28899
    },
    {
      "Comune": "Arona",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28041
    },
    {
      "Comune": "Arosio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22060
    },
    {
      "Comune": "Arpaia",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82011
    },
    {
      "Comune": "Arpaise",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82010
    },
    {
      "Comune": "Arpino",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3033
    },
    {
      "Comune": "Arquà Petrarca",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35032
    },
    {
      "Comune": "Arquà Polesine",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45031
    },
    {
      "Comune": "Arquata del Tronto",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63096
    },
    {
      "Comune": "Arquata Scrivia",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15061
    },
    {
      "Comune": "Arre",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Arrone",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5031
    },
    {
      "Comune": "Arsago Seprio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Arsiè",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32030
    },
    {
      "Comune": "Arsiero",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36011
    },
    {
      "Comune": "Arsita",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64031
    },
    {
      "Comune": "Arsoli",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 23
    },
    {
      "Comune": "Arta Terme",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33022
    },
    {
      "Comune": "Artegna",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33011
    },
    {
      "Comune": "Artena",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 31
    },
    {
      "Comune": "Artogne",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Arvier",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11011
    },
    {
      "Comune": "Arzachena",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7021
    },
    {
      "Comune": "Arzago d'Adda",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Arzana",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Arzano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80022
    },
    {
      "Comune": "Arzene",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33098
    },
    {
      "Comune": "Arzergrande",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Arzignano",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36071
    },
    {
      "Comune": "Ascea",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84046
    },
    {
      "Comune": "Asciano",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53041
    },
    {
      "Comune": "Ascoli Piceno",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63100
    },
    {
      "Comune": "Ascoli Satriano",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71022
    },
    {
      "Comune": "Ascrea",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2020
    },
    {
      "Comune": "Asiago",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36012
    },
    {
      "Comune": "Asigliano Veneto",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36020
    },
    {
      "Comune": "Asigliano Vercellese",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13032
    },
    {
      "Comune": "Asola",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46041
    },
    {
      "Comune": "Asolo",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31011
    },
    {
      "Comune": "Assago",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20090
    },
    {
      "Comune": "Assemini",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9032
    },
    {
      "Comune": "Assisi",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6081
    },
    {
      "Comune": "Asso",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22033
    },
    {
      "Comune": "Assolo",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Assoro",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94010
    },
    {
      "Comune": "Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14100
    },
    {
      "Comune": "Asuni",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Ateleta",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Atella",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85020
    },
    {
      "Comune": "Atena Lucana",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "Atessa",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66041
    },
    {
      "Comune": "Atina",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3042
    },
    {
      "Comune": "Atrani",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "Atri",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64032
    },
    {
      "Comune": "Atripalda",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83042
    },
    {
      "Comune": "Attigliano",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5012
    },
    {
      "Comune": "Attimis",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Atzara",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Auditore",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61020
    },
    {
      "Comune": "Augusta",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96011
    },
    {
      "Comune": "Auletta",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84031
    },
    {
      "Comune": "Aulla",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54011
    },
    {
      "Comune": "Aurano",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28812
    },
    {
      "Comune": "Aurigo",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18020
    },
    {
      "Comune": "Auronzo di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32041
    },
    {
      "Comune": "Ausonia",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Austis",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Avegno",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16030
    },
    {
      "Comune": "Avelengo",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "Avella",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83021
    },
    {
      "Comune": "Avellino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83100
    },
    {
      "Comune": "Averara",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Aversa",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81031
    },
    {
      "Comune": "Avetrana",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74020
    },
    {
      "Comune": "Avezzano",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67051
    },
    {
      "Comune": "Aviano",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33081
    },
    {
      "Comune": "Aviatico",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Avigliana",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10051
    },
    {
      "Comune": "Avigliano",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85021
    },
    {
      "Comune": "Avigliano Umbro",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5020
    },
    {
      "Comune": "Avio",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38063
    },
    {
      "Comune": "Avise",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Avola",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96012
    },
    {
      "Comune": "Avolasca",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Ayas",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Aymavilles",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Azeglio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Azzanello",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Azzano d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14030
    },
    {
      "Comune": "Azzano Decimo",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33082
    },
    {
      "Comune": "Azzano Mella",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Azzano San Paolo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24052
    },
    {
      "Comune": "Azzate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21022
    },
    {
      "Comune": "Azzio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Azzone",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Baceno",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28861
    },
    {
      "Comune": "Bacoli",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80070
    },
    {
      "Comune": "Badalucco",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18010
    },
    {
      "Comune": "Badesi",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Badia",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39036
    },
    {
      "Comune": "Badia Calavena",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37030
    },
    {
      "Comune": "Badia Pavese",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Badia Polesine",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45021
    },
    {
      "Comune": "Badia Tedalda",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52032
    },
    {
      "Comune": "Badolato",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Bagaladi",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89060
    },
    {
      "Comune": "Bagheria",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90011
    },
    {
      "Comune": "Bagnacavallo",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48012
    },
    {
      "Comune": "Bagnara Calabra",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89011
    },
    {
      "Comune": "Bagnara di Romagna",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48010
    },
    {
      "Comune": "Bagnaria",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Bagnaria Arsa",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Bagnasco",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12071
    },
    {
      "Comune": "Bagnatica",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Bagni di Lucca",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55022
    },
    {
      "Comune": "Bagno a Ripoli",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50012
    },
    {
      "Comune": "Bagno di Romagna",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47021
    },
    {
      "Comune": "Bagnoli del Trigno",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86091
    },
    {
      "Comune": "Bagnoli di Sopra",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35023
    },
    {
      "Comune": "Bagnoli Irpino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83043
    },
    {
      "Comune": "Bagnolo Cremasco",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Bagnolo del Salento",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Bagnolo di Po",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45022
    },
    {
      "Comune": "Bagnolo in Piano",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42011
    },
    {
      "Comune": "Bagnolo Mella",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25021
    },
    {
      "Comune": "Bagnolo Piemonte",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12031
    },
    {
      "Comune": "Bagnolo San Vito",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46031
    },
    {
      "Comune": "Bagnone",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54021
    },
    {
      "Comune": "Bagnoregio",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1022
    },
    {
      "Comune": "Bagolino",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25072
    },
    {
      "Comune": "Baia e Latina",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "Baiano",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83022
    },
    {
      "Comune": "Bairo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Baiso",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42031
    },
    {
      "Comune": "Bajardo",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18031
    },
    {
      "Comune": "Balangero",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Baldichieri d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14011
    },
    {
      "Comune": "Baldissero Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Baldissero d'Alba",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Baldissero Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Balestrate",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90041
    },
    {
      "Comune": "Balestrino",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17020
    },
    {
      "Comune": "Ballabio",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23811
    },
    {
      "Comune": "Ballao",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Balme",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Balmuccia",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13020
    },
    {
      "Comune": "Balocco",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Balsorano",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67052
    },
    {
      "Comune": "Balvano",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Balzola",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15031
    },
    {
      "Comune": "Banari",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7040
    },
    {
      "Comune": "Banchette",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Bannio Anzino",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28871
    },
    {
      "Comune": "Banzi",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Baone",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35030
    },
    {
      "Comune": "Baradili",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Baragiano",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Baranello",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86011
    },
    {
      "Comune": "Barano d'Ischia",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80070
    },
    {
      "Comune": "Baranzate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20021
    },
    {
      "Comune": "Barasso",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Baratili San Pietro",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Barbania",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Barbara",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60010
    },
    {
      "Comune": "Barbarano Romano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Barbarano Vicentino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36021
    },
    {
      "Comune": "Barbaresco",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Barbariga",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Barbata",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Barberino di Mugello",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50031
    },
    {
      "Comune": "Barberino Val d'Elsa",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50021
    },
    {
      "Comune": "Barbianello",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27041
    },
    {
      "Comune": "Barbiano",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Barbona",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Barcellona Pozzo di Gotto",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98051
    },
    {
      "Comune": "Barchi",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61040
    },
    {
      "Comune": "Barcis",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "Bard",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Bardello",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Bardi",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43032
    },
    {
      "Comune": "Bardineto",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17057
    },
    {
      "Comune": "Bardolino",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37011
    },
    {
      "Comune": "Bardonecchia",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10052
    },
    {
      "Comune": "Bareggio",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Barengo",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Baressa",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Barete",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67010
    },
    {
      "Comune": "Barga",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55051
    },
    {
      "Comune": "Bargagli",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16021
    },
    {
      "Comune": "Barge",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12032
    },
    {
      "Comune": "Barghe",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25070
    },
    {
      "Comune": "Bari",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": "701xx"
    },
    {
      "Comune": "Bari Sardo",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8042
    },
    {
      "Comune": "Bariano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Baricella",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40052
    },
    {
      "Comune": "Barile",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85022
    },
    {
      "Comune": "Barisciano",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67021
    },
    {
      "Comune": "Barlassina",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20825
    },
    {
      "Comune": "Barletta",
      "Provincia": "BT",
      "Regione": "PUG",
      "CAP": 76121
    },
    {
      "Comune": "Barni",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Barolo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Barone Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Baronissi",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84081
    },
    {
      "Comune": "Barrafranca",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94012
    },
    {
      "Comune": "Barrali",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Barrea",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Barumini",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9021
    },
    {
      "Comune": "Barzago",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23890
    },
    {
      "Comune": "Barzana",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Barzanò",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23891
    },
    {
      "Comune": "Barzio",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23816
    },
    {
      "Comune": "Basaluzzo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Bascapè",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Baschi",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5023
    },
    {
      "Comune": "Basciano",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64030
    },
    {
      "Comune": "Baselga di Pinè",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38042
    },
    {
      "Comune": "Baselice",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Basiano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Basicò",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98060
    },
    {
      "Comune": "Basiglio",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Basiliano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33031
    },
    {
      "Comune": "Bassano Bresciano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Bassano del Grappa",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36061
    },
    {
      "Comune": "Bassano in Teverina",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1030
    },
    {
      "Comune": "Bassano Romano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1030
    },
    {
      "Comune": "Bassiano",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4010
    },
    {
      "Comune": "Bassignana",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15042
    },
    {
      "Comune": "Bastia Mondovì",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Bastia Umbra",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6083
    },
    {
      "Comune": "Bastida de' Dossi",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Bastida Pancarana",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Bastiglia",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41030
    },
    {
      "Comune": "Battaglia Terme",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35041
    },
    {
      "Comune": "Battifollo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Battipaglia",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84091
    },
    {
      "Comune": "Battuda",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Baucina",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Bauladu",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Baunei",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Baveno",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28831
    },
    {
      "Comune": "Bazzano",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40053
    },
    {
      "Comune": "Bedero Valcuvia",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21039
    },
    {
      "Comune": "Bedizzole",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25081
    },
    {
      "Comune": "Bedollo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38043
    },
    {
      "Comune": "Bedonia",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43041
    },
    {
      "Comune": "Bedulita",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Bee",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28813
    },
    {
      "Comune": "Beinasco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10092
    },
    {
      "Comune": "Beinette",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12081
    },
    {
      "Comune": "Belcastro",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Belfiore",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37050
    },
    {
      "Comune": "Belforte all'Isauro",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61026
    },
    {
      "Comune": "Belforte del Chienti",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62020
    },
    {
      "Comune": "Belforte Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15070
    },
    {
      "Comune": "Belgioioso",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27011
    },
    {
      "Comune": "Belgirate",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28832
    },
    {
      "Comune": "Bella",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85051
    },
    {
      "Comune": "Bellagio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22021
    },
    {
      "Comune": "Bellano",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23822
    },
    {
      "Comune": "Bellante",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64020
    },
    {
      "Comune": "Bellaria-Igea Marina",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47814
    },
    {
      "Comune": "Bellegra",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "Bellino",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Bellinzago Lombardo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Bellinzago Novarese",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28043
    },
    {
      "Comune": "Bellizzi",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84092
    },
    {
      "Comune": "Bellona",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81041
    },
    {
      "Comune": "Bellosguardo",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Belluno",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32100
    },
    {
      "Comune": "Bellusco",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20882
    },
    {
      "Comune": "Belmonte Calabro",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87033
    },
    {
      "Comune": "Belmonte Castello",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Belmonte del Sannio",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86080
    },
    {
      "Comune": "Belmonte in Sabina",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2020
    },
    {
      "Comune": "Belmonte Mezzagno",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90031
    },
    {
      "Comune": "Belmonte Piceno",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63838
    },
    {
      "Comune": "Belpasso",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95032
    },
    {
      "Comune": "Belsito",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87030
    },
    {
      "Comune": "Belvedere di Spinello",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88824
    },
    {
      "Comune": "Belvedere Langhe",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Belvedere Marittimo",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87021
    },
    {
      "Comune": "Belvedere Ostrense",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60030
    },
    {
      "Comune": "Belveglio",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14040
    },
    {
      "Comune": "Belvì",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Bema",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Bene Lario",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Bene Vagienna",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12041
    },
    {
      "Comune": "Benestare",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89030
    },
    {
      "Comune": "Benetutti",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Benevello",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Benevento",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82100
    },
    {
      "Comune": "Benna",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13871
    },
    {
      "Comune": "Bentivoglio",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40010
    },
    {
      "Comune": "Berbenno",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Berbenno di Valtellina",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Berceto",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43042
    },
    {
      "Comune": "Berchidda",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7022
    },
    {
      "Comune": "Beregazzo con Figliaro",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Bereguardo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27021
    },
    {
      "Comune": "Bergamasco",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15022
    },
    {
      "Comune": "Bergamo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": "241xx"
    },
    {
      "Comune": "Bergantino",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45032
    },
    {
      "Comune": "Bergeggi",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17028
    },
    {
      "Comune": "Bergolo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12074
    },
    {
      "Comune": "Berlingo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Bernalda",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75012
    },
    {
      "Comune": "Bernareggio",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20881
    },
    {
      "Comune": "Bernate Ticino",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Bernezzo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Berra",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44033
    },
    {
      "Comune": "Bersone",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38085
    },
    {
      "Comune": "Bertinoro",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47032
    },
    {
      "Comune": "Bertiolo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33032
    },
    {
      "Comune": "Bertonico",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26821
    },
    {
      "Comune": "Berzano di San Pietro",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Berzano di Tortona",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Berzo Demo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Berzo Inferiore",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Berzo San Fermo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Besana in Brianza",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20842
    },
    {
      "Comune": "Besano",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Besate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Besenello",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Besenzone",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Besnate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Besozzo",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21023
    },
    {
      "Comune": "Bessude",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7040
    },
    {
      "Comune": "Bettola",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29021
    },
    {
      "Comune": "Bettona",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6084
    },
    {
      "Comune": "Beura-Cardezza",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28851
    },
    {
      "Comune": "Bevagna",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6031
    },
    {
      "Comune": "Beverino",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Bevilacqua",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37040
    },
    {
      "Comune": "Biancavilla",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95033
    },
    {
      "Comune": "Bianchi",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Bianco",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89032
    },
    {
      "Comune": "Biandrate",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28061
    },
    {
      "Comune": "Biandronno",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21024
    },
    {
      "Comune": "Bianzano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Bianzè",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13041
    },
    {
      "Comune": "Bianzone",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23030
    },
    {
      "Comune": "Biassono",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20853
    },
    {
      "Comune": "Bibbiano",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42021
    },
    {
      "Comune": "Bibbiena",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52011
    },
    {
      "Comune": "Bibbona",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57020
    },
    {
      "Comune": "Bibiana",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Biccari",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71032
    },
    {
      "Comune": "Bicinicco",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Bidonì",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Biella",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13900
    },
    {
      "Comune": "Bienno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Bieno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Bientina",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56031
    },
    {
      "Comune": "Bigarello",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46030
    },
    {
      "Comune": "Binago",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Binasco",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20082
    },
    {
      "Comune": "Binetto",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70020
    },
    {
      "Comune": "Bioglio",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13841
    },
    {
      "Comune": "Bionaz",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Bione",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25070
    },
    {
      "Comune": "Birori",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8010
    },
    {
      "Comune": "Bisaccia",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83044
    },
    {
      "Comune": "Bisacquino",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90032
    },
    {
      "Comune": "Bisceglie",
      "Provincia": "BT",
      "Regione": "PUG",
      "CAP": 76011
    },
    {
      "Comune": "Bisegna",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67050
    },
    {
      "Comune": "Bisenti",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64033
    },
    {
      "Comune": "Bisignano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87043
    },
    {
      "Comune": "Bistagno",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15012
    },
    {
      "Comune": "Bisuschio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Bitetto",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70020
    },
    {
      "Comune": "Bitonto",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70032
    },
    {
      "Comune": "Bitritto",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70020
    },
    {
      "Comune": "Bitti",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8021
    },
    {
      "Comune": "Bivona",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92010
    },
    {
      "Comune": "Bivongi",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Bizzarone",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Bleggio Superiore",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38071
    },
    {
      "Comune": "Blello",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Blera",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Blessagno",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22028
    },
    {
      "Comune": "Blevio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Blufi",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Boara Pisani",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Bobbio",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29022
    },
    {
      "Comune": "Bobbio Pellice",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Boca",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Bocchigliero",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "Boccioleto",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13022
    },
    {
      "Comune": "Bocenago",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38080
    },
    {
      "Comune": "Bodio Lomnago",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Boffalora d'Adda",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26811
    },
    {
      "Comune": "Boffalora Sopra Ticino",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Bogliasco",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16031
    },
    {
      "Comune": "Bognanco",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28842
    },
    {
      "Comune": "Bogogno",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Boissano",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17054
    },
    {
      "Comune": "Bojano",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86021
    },
    {
      "Comune": "Bolano",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Bolbeno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38079
    },
    {
      "Comune": "Bolgare",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Bollate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20021
    },
    {
      "Comune": "Bollengo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10012
    },
    {
      "Comune": "Bologna",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": "401xx"
    },
    {
      "Comune": "Bolognano",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Bolognetta",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Bolognola",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62035
    },
    {
      "Comune": "Bolotana",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8011
    },
    {
      "Comune": "Bolsena",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1023
    },
    {
      "Comune": "Boltiere",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Bolzano",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39100
    },
    {
      "Comune": "Bolzano Novarese",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Bolzano Vicentino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36050
    },
    {
      "Comune": "Bomarzo",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1020
    },
    {
      "Comune": "Bomba",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66042
    },
    {
      "Comune": "Bompensiere",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93010
    },
    {
      "Comune": "Bompietro",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Bomporto",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41030
    },
    {
      "Comune": "Bonarcado",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Bonassola",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19011
    },
    {
      "Comune": "Bonate Sopra",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Bonate Sotto",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Bonavigo",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37040
    },
    {
      "Comune": "Bondeno",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44012
    },
    {
      "Comune": "Bondo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38081
    },
    {
      "Comune": "Bondone",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38080
    },
    {
      "Comune": "Bonea",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82013
    },
    {
      "Comune": "Bonefro",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86041
    },
    {
      "Comune": "Bonemerse",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26040
    },
    {
      "Comune": "Bonifati",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Bonito",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83032
    },
    {
      "Comune": "Bonnanaro",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7043
    },
    {
      "Comune": "Bono",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7011
    },
    {
      "Comune": "Bonorva",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7012
    },
    {
      "Comune": "Bonvicino",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Borbona",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2010
    },
    {
      "Comune": "Borca di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32040
    },
    {
      "Comune": "Bordano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Bordighera",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18012
    },
    {
      "Comune": "Bordolano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Bore",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43030
    },
    {
      "Comune": "Boretto",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42022
    },
    {
      "Comune": "Borgarello",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Borgaro Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10071
    },
    {
      "Comune": "Borgetto",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90042
    },
    {
      "Comune": "Borghetto d'Arroscia",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18020
    },
    {
      "Comune": "Borghetto di Borbera",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Borghetto di Vara",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Borghetto Lodigiano",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26812
    },
    {
      "Comune": "Borghetto Santo Spirito",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17052
    },
    {
      "Comune": "Borghi",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47030
    },
    {
      "Comune": "Borgia",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88021
    },
    {
      "Comune": "Borgiallo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Borgio Verezzi",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17022
    },
    {
      "Comune": "Borgo a Mozzano",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55023
    },
    {
      "Comune": "Borgo d'Ale",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Borgo di Terzo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Borgo Pace",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61040
    },
    {
      "Comune": "Borgo Priolo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Borgo San Dalmazzo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12011
    },
    {
      "Comune": "Borgo San Giacomo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25022
    },
    {
      "Comune": "Borgo San Giovanni",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26851
    },
    {
      "Comune": "Borgo San Lorenzo",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50032
    },
    {
      "Comune": "Borgo San Martino",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15032
    },
    {
      "Comune": "Borgo San Siro",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Borgo Ticino",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28040
    },
    {
      "Comune": "Borgo Tossignano",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40021
    },
    {
      "Comune": "Borgo Val di Taro",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43043
    },
    {
      "Comune": "Borgo Valsugana",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38051
    },
    {
      "Comune": "Borgo Velino",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2010
    },
    {
      "Comune": "Borgo Vercelli",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13012
    },
    {
      "Comune": "Borgoforte",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46030
    },
    {
      "Comune": "Borgofranco d'Ivrea",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10013
    },
    {
      "Comune": "Borgofranco sul Po",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46020
    },
    {
      "Comune": "Borgolavezzaro",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28071
    },
    {
      "Comune": "Borgomale",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Borgomanero",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28021
    },
    {
      "Comune": "Borgomaro",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18021
    },
    {
      "Comune": "Borgomasino",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10031
    },
    {
      "Comune": "Borgone Susa",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Borgonovo Val Tidone",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29011
    },
    {
      "Comune": "Borgoratto Alessandrino",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15013
    },
    {
      "Comune": "Borgoratto Mormorolo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Borgoricco",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Borgorose",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2021
    },
    {
      "Comune": "Borgosatollo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25010
    },
    {
      "Comune": "Borgosesia",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13011
    },
    {
      "Comune": "Bormida",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17045
    },
    {
      "Comune": "Bormio",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23032
    },
    {
      "Comune": "Bornasco",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Borno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25042
    },
    {
      "Comune": "Boroneddu",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Borore",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8016
    },
    {
      "Comune": "Borrello",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Borriana",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13872
    },
    {
      "Comune": "Borso del Grappa",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31030
    },
    {
      "Comune": "Bortigali",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8012
    },
    {
      "Comune": "Bortigiadas",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Borutta",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7040
    },
    {
      "Comune": "Borzonasca",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16041
    },
    {
      "Comune": "Bosa",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 8013
    },
    {
      "Comune": "Bosaro",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45033
    },
    {
      "Comune": "Boschi Sant'Anna",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37040
    },
    {
      "Comune": "Bosco Chiesanuova",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37021
    },
    {
      "Comune": "Bosco Marengo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15062
    },
    {
      "Comune": "Bosconero",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Boscoreale",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80041
    },
    {
      "Comune": "Boscotrecase",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80042
    },
    {
      "Comune": "Bosentino",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38049
    },
    {
      "Comune": "Bosia",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Bosio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Bosisio Parini",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23842
    },
    {
      "Comune": "Bosnasco",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Bossico",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Bossolasco",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Botricello",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88070
    },
    {
      "Comune": "Botrugno",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Bottanuco",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Botticino",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25082
    },
    {
      "Comune": "Bottidda",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Bova",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89033
    },
    {
      "Comune": "Bova Marina",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89035
    },
    {
      "Comune": "Bovalino",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89034
    },
    {
      "Comune": "Bovegno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25061
    },
    {
      "Comune": "Boves",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12012
    },
    {
      "Comune": "Bovezzo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25073
    },
    {
      "Comune": "Boville Ernica",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3022
    },
    {
      "Comune": "Bovino",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71023
    },
    {
      "Comune": "Bovisio-Masciago",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20813
    },
    {
      "Comune": "Bovolenta",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35024
    },
    {
      "Comune": "Bovolone",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37051
    },
    {
      "Comune": "Bozzole",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Bozzolo",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46012
    },
    {
      "Comune": "Bra",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12042
    },
    {
      "Comune": "Bracca",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Bracciano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 62
    },
    {
      "Comune": "Bracigliano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84082
    },
    {
      "Comune": "Braies",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Brallo di Pregola",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Brancaleone",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89036
    },
    {
      "Comune": "Brandico",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Brandizzo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10032
    },
    {
      "Comune": "Branzi",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Braone",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Brebbia",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Breda di Piave",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31030
    },
    {
      "Comune": "Bregano",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Breganze",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36042
    },
    {
      "Comune": "Bregnano",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Breguzzo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38081
    },
    {
      "Comune": "Breia",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13020
    },
    {
      "Comune": "Brembate",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24041
    },
    {
      "Comune": "Brembate di Sopra",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Brembilla",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24012
    },
    {
      "Comune": "Brembio",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26822
    },
    {
      "Comune": "Breme",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Brendola",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Brenna",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22040
    },
    {
      "Comune": "Brennero",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39041
    },
    {
      "Comune": "Breno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25043
    },
    {
      "Comune": "Brenta",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Brentino Belluno",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37020
    },
    {
      "Comune": "Brentonico",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Brenzone",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37010
    },
    {
      "Comune": "Brescello",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42041
    },
    {
      "Comune": "Brescia",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": "251xx"
    },
    {
      "Comune": "Bresimo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38020
    },
    {
      "Comune": "Bressana Bottarone",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27042
    },
    {
      "Comune": "Bressanone",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39042
    },
    {
      "Comune": "Bressanvido",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36050
    },
    {
      "Comune": "Bresso",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20091
    },
    {
      "Comune": "Brez",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38021
    },
    {
      "Comune": "Brezzo di Bedero",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Briaglia",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12080
    },
    {
      "Comune": "Briatico",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89817
    },
    {
      "Comune": "Bricherasio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Brienno",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Brienza",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Briga Alta",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 18025
    },
    {
      "Comune": "Briga Novarese",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Brignano Gera d'Adda",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24053
    },
    {
      "Comune": "Brignano-Frascata",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Brindisi",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72100
    },
    {
      "Comune": "Brindisi Montagna",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Brinzio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Briona",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28072
    },
    {
      "Comune": "Brione",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25060
    },
    {
      "Comune": "Brione",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38083
    },
    {
      "Comune": "Briosco",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20836
    },
    {
      "Comune": "Brisighella",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48013
    },
    {
      "Comune": "Brissago-Valtravaglia",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Brissogne",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Brittoli",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Brivio",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23883
    },
    {
      "Comune": "Broccostella",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Brogliano",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36070
    },
    {
      "Comune": "Brognaturo",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89822
    },
    {
      "Comune": "Brolo",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98061
    },
    {
      "Comune": "Brondello",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Broni",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27043
    },
    {
      "Comune": "Bronte",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95034
    },
    {
      "Comune": "Bronzolo",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39051
    },
    {
      "Comune": "Brossasco",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Brosso",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Brovello-Carpugnino",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28833
    },
    {
      "Comune": "Brozolo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Brugherio",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20861
    },
    {
      "Comune": "Brugine",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Brugnato",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Brugnera",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33070
    },
    {
      "Comune": "Bruino",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Brumano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24037
    },
    {
      "Comune": "Brunate",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22034
    },
    {
      "Comune": "Brunello",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Brunico",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39031
    },
    {
      "Comune": "Bruno",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14046
    },
    {
      "Comune": "Brusaporto",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Brusasco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Brusciano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80031
    },
    {
      "Comune": "Brusimpiano",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Brusnengo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13862
    },
    {
      "Comune": "Brusson",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11022
    },
    {
      "Comune": "Bruzolo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Bruzzano Zeffirio",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89030
    },
    {
      "Comune": "Bubbiano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Bubbio",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14051
    },
    {
      "Comune": "Buccheri",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96010
    },
    {
      "Comune": "Bucchianico",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66011
    },
    {
      "Comune": "Bucciano",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82010
    },
    {
      "Comune": "Buccinasco",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20090
    },
    {
      "Comune": "Buccino",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84021
    },
    {
      "Comune": "Bucine",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52021
    },
    {
      "Comune": "Buddusò",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7020
    },
    {
      "Comune": "Budoia",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33070
    },
    {
      "Comune": "Budoni",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Budrio",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40054
    },
    {
      "Comune": "Buggerru",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Buggiano",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51011
    },
    {
      "Comune": "Buglio in Monte",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Bugnara",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Buguggiate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Buja",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Bulciago",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23892
    },
    {
      "Comune": "Bulgarograsso",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Bultei",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Bulzi",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Buonabitacolo",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84032
    },
    {
      "Comune": "Buonalbergo",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Buonconvento",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53022
    },
    {
      "Comune": "Buonvicino",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Burago di Molgora",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20875
    },
    {
      "Comune": "Burcei",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Burgio",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92010
    },
    {
      "Comune": "Burgos",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Buriasco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Burolo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Buronzo",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Busachi",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9082
    },
    {
      "Comune": "Busalla",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16012
    },
    {
      "Comune": "Busana",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42032
    },
    {
      "Comune": "Busano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Busca",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12022
    },
    {
      "Comune": "Buscate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Buscemi",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96010
    },
    {
      "Comune": "Buseto Palizzolo",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91012
    },
    {
      "Comune": "Busnago",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20874
    },
    {
      "Comune": "Bussero",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Busseto",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43011
    },
    {
      "Comune": "Bussi sul Tirino",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65022
    },
    {
      "Comune": "Busso",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86010
    },
    {
      "Comune": "Bussolengo",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37012
    },
    {
      "Comune": "Bussoleno",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10053
    },
    {
      "Comune": "Busto Arsizio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21052
    },
    {
      "Comune": "Busto Garolfo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20020
    },
    {
      "Comune": "Butera",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93011
    },
    {
      "Comune": "Buti",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56032
    },
    {
      "Comune": "Buttapietra",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37060
    },
    {
      "Comune": "Buttigliera Alta",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Buttigliera d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14021
    },
    {
      "Comune": "Buttrio",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33042
    },
    {
      "Comune": "Ca' d'Andrea",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Cabella Ligure",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Cabiate",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22060
    },
    {
      "Comune": "Cabras",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9072
    },
    {
      "Comune": "Caccamo",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90012
    },
    {
      "Comune": "Caccuri",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88833
    },
    {
      "Comune": "Cadegliano-Viconago",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21031
    },
    {
      "Comune": "Cadelbosco di Sopra",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42023
    },
    {
      "Comune": "Cadeo",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Caderzone Terme",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38080
    },
    {
      "Comune": "Cadoneghe",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Cadorago",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22071
    },
    {
      "Comune": "Cadrezzate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Caerano di San Marco",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31031
    },
    {
      "Comune": "Cafasse",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Caggiano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "Cagli",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61043
    },
    {
      "Comune": "Cagliari",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": "091xx"
    },
    {
      "Comune": "Caglio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Cagnano Amiterno",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67012
    },
    {
      "Comune": "Cagnano Varano",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71010
    },
    {
      "Comune": "Cagno",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Cagnò",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38028
    },
    {
      "Comune": "Caianello",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81059
    },
    {
      "Comune": "Caiazzo",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81013
    },
    {
      "Comune": "Caines",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "Caino",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25070
    },
    {
      "Comune": "Caiolo",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Cairano",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Cairate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Cairo Montenotte",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17014
    },
    {
      "Comune": "Caivano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80023
    },
    {
      "Comune": "Calabritto",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Calalzo di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32042
    },
    {
      "Comune": "Calamandrana",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14042
    },
    {
      "Comune": "Calamonaci",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92010
    },
    {
      "Comune": "Calangianus",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7023
    },
    {
      "Comune": "Calanna",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89050
    },
    {
      "Comune": "Calasca-Castiglione",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28873
    },
    {
      "Comune": "Calascibetta",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94010
    },
    {
      "Comune": "Calascio",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Calasetta",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9011
    },
    {
      "Comune": "Calatabiano",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95011
    },
    {
      "Comune": "Calatafimi Segesta",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91013
    },
    {
      "Comune": "Calavino",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38072
    },
    {
      "Comune": "Calcata",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1030
    },
    {
      "Comune": "Calceranica al Lago",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Calci",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56011
    },
    {
      "Comune": "Calciano",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75010
    },
    {
      "Comune": "Calcinaia",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56012
    },
    {
      "Comune": "Calcinate",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Calcinato",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25011
    },
    {
      "Comune": "Calcio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24054
    },
    {
      "Comune": "Calco",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23885
    },
    {
      "Comune": "Caldaro sulla Strada del Vino",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39052
    },
    {
      "Comune": "Caldarola",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62020
    },
    {
      "Comune": "Calderara di Reno",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40012
    },
    {
      "Comune": "Caldes",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38022
    },
    {
      "Comune": "Caldiero",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37042
    },
    {
      "Comune": "Caldogno",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "Caldonazzo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38052
    },
    {
      "Comune": "Calendasco",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Calenzano",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50041
    },
    {
      "Comune": "Calestano",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43030
    },
    {
      "Comune": "Calice al Cornoviglio",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Calice Ligure",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17020
    },
    {
      "Comune": "Calimera",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73021
    },
    {
      "Comune": "Calitri",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83045
    },
    {
      "Comune": "Calizzano",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17057
    },
    {
      "Comune": "Callabiana",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13821
    },
    {
      "Comune": "Calliano",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14031
    },
    {
      "Comune": "Calliano",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Calolziocorte",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23801
    },
    {
      "Comune": "Calopezzati",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "Calosso",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14052
    },
    {
      "Comune": "Caloveto",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "Caltabellotta",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92010
    },
    {
      "Comune": "Caltagirone",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95041
    },
    {
      "Comune": "Caltanissetta",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93100
    },
    {
      "Comune": "Caltavuturo",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90022
    },
    {
      "Comune": "Caltignaga",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Calto",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "Caltrano",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "Calusco d'Adda",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24033
    },
    {
      "Comune": "Caluso",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10014
    },
    {
      "Comune": "Calvagese della Riviera",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Calvanico",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84080
    },
    {
      "Comune": "Calvatone",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Calvello",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Calvene",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "Calvenzano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Calvera",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85030
    },
    {
      "Comune": "Calvi",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82018
    },
    {
      "Comune": "Calvi dell'Umbria",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5032
    },
    {
      "Comune": "Calvi Risorta",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81042
    },
    {
      "Comune": "Calvignano",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Calvignasco",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Calvisano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25012
    },
    {
      "Comune": "Calvizzano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80012
    },
    {
      "Comune": "Camagna Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15030
    },
    {
      "Comune": "Camaiore",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55041
    },
    {
      "Comune": "Camairago",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26823
    },
    {
      "Comune": "Camandona",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13821
    },
    {
      "Comune": "Camastra",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92020
    },
    {
      "Comune": "Cambiago",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20040
    },
    {
      "Comune": "Cambiano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Cambiasca",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28814
    },
    {
      "Comune": "Camburzano",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13891
    },
    {
      "Comune": "Camerana",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12072
    },
    {
      "Comune": "Camerano",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60021
    },
    {
      "Comune": "Camerano Casasco",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Camerata Cornello",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Camerata Nuova",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Camerata Picena",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60020
    },
    {
      "Comune": "Cameri",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28062
    },
    {
      "Comune": "Camerino",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62032
    },
    {
      "Comune": "Camerota",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84040
    },
    {
      "Comune": "Camigliano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81050
    },
    {
      "Comune": "Caminata",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Camini",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Camino",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Camino al Tagliamento",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Camisano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Camisano Vicentino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36043
    },
    {
      "Comune": "Cammarata",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92022
    },
    {
      "Comune": "Camo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Camogli",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16032
    },
    {
      "Comune": "Campagna",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84022
    },
    {
      "Comune": "Campagna Lupia",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30010
    },
    {
      "Comune": "Campagnano di Roma",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 63
    },
    {
      "Comune": "Campagnatico",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58042
    },
    {
      "Comune": "Campagnola Cremasca",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Campagnola Emilia",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42012
    },
    {
      "Comune": "Campana",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87061
    },
    {
      "Comune": "Camparada",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20857
    },
    {
      "Comune": "Campegine",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42040
    },
    {
      "Comune": "Campello sul Clitunno",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6042
    },
    {
      "Comune": "Campertogno",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13023
    },
    {
      "Comune": "Campi Bisenzio",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50013
    },
    {
      "Comune": "Campi Salentina",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73012
    },
    {
      "Comune": "Campiglia Cervo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13812
    },
    {
      "Comune": "Campiglia dei Berici",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36020
    },
    {
      "Comune": "Campiglia Marittima",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57021
    },
    {
      "Comune": "Campiglione-Fenile",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Campione d'Italia",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22060
    },
    {
      "Comune": "Campitello di Fassa",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38031
    },
    {
      "Comune": "Campli",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64012
    },
    {
      "Comune": "Campo Calabro",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89052
    },
    {
      "Comune": "Campo di Giove",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Campo di Trens",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Campo Ligure",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16013
    },
    {
      "Comune": "Campo nell'Elba",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57034
    },
    {
      "Comune": "Campo San Martino",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Campo Tures",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39032
    },
    {
      "Comune": "Campobasso",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86100
    },
    {
      "Comune": "Campobello di Licata",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92023
    },
    {
      "Comune": "Campobello di Mazara",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91021
    },
    {
      "Comune": "Campochiaro",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86020
    },
    {
      "Comune": "Campodarsego",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35011
    },
    {
      "Comune": "Campodenno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Campodimele",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4020
    },
    {
      "Comune": "Campodipietra",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86010
    },
    {
      "Comune": "Campodolcino",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23021
    },
    {
      "Comune": "Campodoro",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Campofelice di Fitalia",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Campofelice di Roccella",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90010
    },
    {
      "Comune": "Campofilone",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63828
    },
    {
      "Comune": "Campofiorito",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Campoformido",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Campofranco",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93010
    },
    {
      "Comune": "Campogalliano",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41011
    },
    {
      "Comune": "Campolattaro",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Campoli Appennino",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Campoli del Monte Taburno",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Campolieto",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86040
    },
    {
      "Comune": "Campolongo Maggiore",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30010
    },
    {
      "Comune": "Campolongo sul Brenta",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36020
    },
    {
      "Comune": "Campolongo Tapogliano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Campomaggiore",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Campomarino",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86042
    },
    {
      "Comune": "Campomorone",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16014
    },
    {
      "Comune": "Camponogara",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30010
    },
    {
      "Comune": "Campora",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84040
    },
    {
      "Comune": "Camporeale",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90043
    },
    {
      "Comune": "Camporgiano",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55031
    },
    {
      "Comune": "Camporosso",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18033
    },
    {
      "Comune": "Camporotondo di Fiastrone",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62020
    },
    {
      "Comune": "Camporotondo Etneo",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95040
    },
    {
      "Comune": "Camposampiero",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35012
    },
    {
      "Comune": "Camposano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "Camposanto",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41031
    },
    {
      "Comune": "Campospinoso",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Campotosto",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67013
    },
    {
      "Comune": "Camugnano",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40032
    },
    {
      "Comune": "Canal San Bovo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Canale",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12043
    },
    {
      "Comune": "Canale d'Agordo",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Canale Monterano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Canaro",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45034
    },
    {
      "Comune": "Canazei",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38032
    },
    {
      "Comune": "Cancellara",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Cancello ed Arnone",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Canda",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45020
    },
    {
      "Comune": "Candela",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71024
    },
    {
      "Comune": "Candelo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13878
    },
    {
      "Comune": "Candia Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Candia Lomellina",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27031
    },
    {
      "Comune": "Candiana",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Candida",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Candidoni",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89020
    },
    {
      "Comune": "Candiolo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Canegrate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Canelli",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14053
    },
    {
      "Comune": "Canepina",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1030
    },
    {
      "Comune": "Caneva",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33070
    },
    {
      "Comune": "Canevino",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Canicattì",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92024
    },
    {
      "Comune": "Canicattini Bagni",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96010
    },
    {
      "Comune": "Canino",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1011
    },
    {
      "Comune": "Canischio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Canistro",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67050
    },
    {
      "Comune": "Canna",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87070
    },
    {
      "Comune": "Cannalonga",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84040
    },
    {
      "Comune": "Cannara",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6033
    },
    {
      "Comune": "Cannero Riviera",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28821
    },
    {
      "Comune": "Canneto Pavese",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27044
    },
    {
      "Comune": "Canneto sull'Oglio",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46013
    },
    {
      "Comune": "Cannobio",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28822
    },
    {
      "Comune": "Cannole",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Canolo",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Canonica d'Adda",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Canosa di Puglia",
      "Provincia": "BT",
      "Regione": "PUG",
      "CAP": 76012
    },
    {
      "Comune": "Canosa Sannita",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Canosio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Canossa",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42026
    },
    {
      "Comune": "Cansano",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Cantagallo",
      "Provincia": "PO",
      "Regione": "TOS",
      "CAP": 59025
    },
    {
      "Comune": "Cantalice",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2014
    },
    {
      "Comune": "Cantalupa",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Cantalupo in Sabina",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Cantalupo Ligure",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Cantalupo nel Sannio",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86092
    },
    {
      "Comune": "Cantarana",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14010
    },
    {
      "Comune": "Cantello",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Canterano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Cantiano",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61044
    },
    {
      "Comune": "Cantoira",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Cantù",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22063
    },
    {
      "Comune": "Canzano",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64020
    },
    {
      "Comune": "Canzo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22035
    },
    {
      "Comune": "Caorle",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30021
    },
    {
      "Comune": "Caorso",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29012
    },
    {
      "Comune": "Capaccio",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84047
    },
    {
      "Comune": "Capaci",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90040
    },
    {
      "Comune": "Capalbio",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58011
    },
    {
      "Comune": "Capannoli",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56033
    },
    {
      "Comune": "Capannori",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55012
    },
    {
      "Comune": "Capena",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Capergnanica",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Capestrano",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67022
    },
    {
      "Comune": "Capiago Intimiano",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Capistrano",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89818
    },
    {
      "Comune": "Capistrello",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67053
    },
    {
      "Comune": "Capitignano",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67014
    },
    {
      "Comune": "Capizzi",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98031
    },
    {
      "Comune": "Capizzone",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Capo di Ponte",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25044
    },
    {
      "Comune": "Capo d'Orlando",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98071
    },
    {
      "Comune": "Capodimonte",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Capodrise",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81020
    },
    {
      "Comune": "Capoliveri",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57031
    },
    {
      "Comune": "Capolona",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52010
    },
    {
      "Comune": "Caponago",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20867
    },
    {
      "Comune": "Caporciano",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Caposele",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Capoterra",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9012
    },
    {
      "Comune": "Capovalle",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25070
    },
    {
      "Comune": "Cappadocia",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67060
    },
    {
      "Comune": "Cappella Cantone",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Cappella de' Picenardi",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Cappella Maggiore",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31012
    },
    {
      "Comune": "Cappelle sul Tavo",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Capracotta",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86082
    },
    {
      "Comune": "Capraia e Limite",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50050
    },
    {
      "Comune": "Capraia Isola",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57032
    },
    {
      "Comune": "Capralba",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Capranica",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1012
    },
    {
      "Comune": "Capranica Prenestina",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "Caprarica di Lecce",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "Caprarola",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1032
    },
    {
      "Comune": "Caprauna",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Caprese Michelangelo",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52033
    },
    {
      "Comune": "Caprezzo",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28815
    },
    {
      "Comune": "Capri",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80073
    },
    {
      "Comune": "Capri Leone",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Capriana",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Capriano del Colle",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Capriata d'Orba",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Capriate San Gervasio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24042
    },
    {
      "Comune": "Capriati a Volturno",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81014
    },
    {
      "Comune": "Caprie",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Capriglia Irpina",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83010
    },
    {
      "Comune": "Capriglio",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14014
    },
    {
      "Comune": "Caprile",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13864
    },
    {
      "Comune": "Caprino Bergamasco",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Caprino Veronese",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37013
    },
    {
      "Comune": "Capriolo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25031
    },
    {
      "Comune": "Capriva del Friuli",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "Capua",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81043
    },
    {
      "Comune": "Capurso",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70010
    },
    {
      "Comune": "Caraffa del Bianco",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89030
    },
    {
      "Comune": "Caraffa di Catanzaro",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Caraglio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12023
    },
    {
      "Comune": "Caramagna Piemonte",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Caramanico Terme",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65023
    },
    {
      "Comune": "Carano",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38033
    },
    {
      "Comune": "Carapelle",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71041
    },
    {
      "Comune": "Carapelle Calvisio",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Carasco",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16042
    },
    {
      "Comune": "Carassai",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63063
    },
    {
      "Comune": "Carate Brianza",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20841
    },
    {
      "Comune": "Carate Urio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Caravaggio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24043
    },
    {
      "Comune": "Caravate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21032
    },
    {
      "Comune": "Caravino",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Caravonica",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18020
    },
    {
      "Comune": "Carbognano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1030
    },
    {
      "Comune": "Carbonara al Ticino",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Carbonara di Nola",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "Carbonara di Po",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46020
    },
    {
      "Comune": "Carbonara Scrivia",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Carbonate",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Carbone",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85030
    },
    {
      "Comune": "Carbonera",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31030
    },
    {
      "Comune": "Carbonia",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9013
    },
    {
      "Comune": "Carcare",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17043
    },
    {
      "Comune": "Carceri",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Carcoforo",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13026
    },
    {
      "Comune": "Cardano al Campo",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Cardè",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Cardedu",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Cardeto",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89060
    },
    {
      "Comune": "Cardinale",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88062
    },
    {
      "Comune": "Cardito",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80024
    },
    {
      "Comune": "Careggine",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55030
    },
    {
      "Comune": "Carema",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Carenno",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23802
    },
    {
      "Comune": "Carentino",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15026
    },
    {
      "Comune": "Careri",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89030
    },
    {
      "Comune": "Caresana",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13010
    },
    {
      "Comune": "Caresanablot",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "Carezzano",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15051
    },
    {
      "Comune": "Carfizzi",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88817
    },
    {
      "Comune": "Cargeghe",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Cariati",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87062
    },
    {
      "Comune": "Carife",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Carignano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10041
    },
    {
      "Comune": "Carimate",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22060
    },
    {
      "Comune": "Carinaro",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81032
    },
    {
      "Comune": "Carini",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90044
    },
    {
      "Comune": "Carinola",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Carisio",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Carisolo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38080
    },
    {
      "Comune": "Carlantino",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71030
    },
    {
      "Comune": "Carlazzo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Carlentini",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96013
    },
    {
      "Comune": "Carlino",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Carloforte",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9014
    },
    {
      "Comune": "Carlopoli",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Carmagnola",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10022
    },
    {
      "Comune": "Carmiano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73041
    },
    {
      "Comune": "Carmignano",
      "Provincia": "PO",
      "Regione": "TOS",
      "CAP": 59015
    },
    {
      "Comune": "Carmignano di Brenta",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Carnago",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Carnate",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20866
    },
    {
      "Comune": "Carobbio degli Angeli",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Carolei",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87030
    },
    {
      "Comune": "Carona",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Caronia",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98072
    },
    {
      "Comune": "Caronno Pertusella",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21042
    },
    {
      "Comune": "Caronno Varesino",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Carosino",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74021
    },
    {
      "Comune": "Carovigno",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72012
    },
    {
      "Comune": "Carovilli",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86083
    },
    {
      "Comune": "Carpaneto Piacentino",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29013
    },
    {
      "Comune": "Carpanzano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Carpasio",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18010
    },
    {
      "Comune": "Carpegna",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61021
    },
    {
      "Comune": "Carpenedolo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25013
    },
    {
      "Comune": "Carpeneto",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15071
    },
    {
      "Comune": "Carpi",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41012
    },
    {
      "Comune": "Carpiano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Carpignano Salentino",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Carpignano Sesia",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28064
    },
    {
      "Comune": "Carpineti",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42033
    },
    {
      "Comune": "Carpineto della Nora",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Carpineto Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 32
    },
    {
      "Comune": "Carpineto Sinello",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66030
    },
    {
      "Comune": "Carpino",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71010
    },
    {
      "Comune": "Carpinone",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86093
    },
    {
      "Comune": "Carrara",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54033
    },
    {
      "Comune": "Carrè",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36010
    },
    {
      "Comune": "Carrega Ligure",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Carro",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19012
    },
    {
      "Comune": "Carrodano",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Carrosio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Carrù",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12061
    },
    {
      "Comune": "Carsoli",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67061
    },
    {
      "Comune": "Cartigliano",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36050
    },
    {
      "Comune": "Cartignano",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Cartoceto",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61030
    },
    {
      "Comune": "Cartosio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15015
    },
    {
      "Comune": "Cartura",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35025
    },
    {
      "Comune": "Carugate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20061
    },
    {
      "Comune": "Carugo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22060
    },
    {
      "Comune": "Carunchio",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Carvico",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Carzano",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Casabona",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88822
    },
    {
      "Comune": "Casacalenda",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86043
    },
    {
      "Comune": "Casacanditella",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Casagiove",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81022
    },
    {
      "Comune": "Casal Cermelli",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15072
    },
    {
      "Comune": "Casal di Principe",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81033
    },
    {
      "Comune": "Casal Velino",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84040
    },
    {
      "Comune": "Casalanguida",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66031
    },
    {
      "Comune": "Casalattico",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Casalbeltrame",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Casalbordino",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66021
    },
    {
      "Comune": "Casalbore",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83034
    },
    {
      "Comune": "Casalborgone",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Casalbuono",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "Casalbuttano ed Uniti",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26011
    },
    {
      "Comune": "Casalciprano",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86010
    },
    {
      "Comune": "Casalduni",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82027
    },
    {
      "Comune": "Casale Corte Cerro",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28881
    },
    {
      "Comune": "Casale Cremasco-Vidolasco",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Casale di Scodosia",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Casale Litta",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Casale Marittimo",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56040
    },
    {
      "Comune": "Casale Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15033
    },
    {
      "Comune": "Casale sul Sile",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31032
    },
    {
      "Comune": "Casalecchio di Reno",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40033
    },
    {
      "Comune": "Casaleggio Boiro",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15070
    },
    {
      "Comune": "Casaleggio Novara",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Casaleone",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37052
    },
    {
      "Comune": "Casaletto Ceredano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Casaletto di Sopra",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26014
    },
    {
      "Comune": "Casaletto Lodigiano",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26852
    },
    {
      "Comune": "Casaletto Spartano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "Casaletto Vaprio",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Casalfiumanese",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40020
    },
    {
      "Comune": "Casalgrande",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42013
    },
    {
      "Comune": "Casalgrasso",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Casalincontrada",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66012
    },
    {
      "Comune": "Casalino",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Casalmaggiore",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26041
    },
    {
      "Comune": "Casalmaiocco",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26831
    },
    {
      "Comune": "Casalmorano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Casalmoro",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46040
    },
    {
      "Comune": "Casalnoceto",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15052
    },
    {
      "Comune": "Casalnuovo di Napoli",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80013
    },
    {
      "Comune": "Casalnuovo Monterotaro",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71033
    },
    {
      "Comune": "Casaloldo",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46040
    },
    {
      "Comune": "Casalpusterlengo",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26841
    },
    {
      "Comune": "Casalromano",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46040
    },
    {
      "Comune": "Casalserugo",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Casaluce",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Casalvecchio di Puglia",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71030
    },
    {
      "Comune": "Casalvecchio Siculo",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98032
    },
    {
      "Comune": "Casalvieri",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3034
    },
    {
      "Comune": "Casalvolone",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Casalzuigno",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Casamarciano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80032
    },
    {
      "Comune": "Casamassima",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70010
    },
    {
      "Comune": "Casamicciola Terme",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80074
    },
    {
      "Comune": "Casandrino",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80025
    },
    {
      "Comune": "Casanova Elvo",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "Casanova Lerrone",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17033
    },
    {
      "Comune": "Casanova Lonati",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27041
    },
    {
      "Comune": "Casape",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 10
    },
    {
      "Comune": "Casapesenna",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Casapinta",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13866
    },
    {
      "Comune": "Casaprota",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2030
    },
    {
      "Comune": "Casapulla",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81020
    },
    {
      "Comune": "Casarano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73042
    },
    {
      "Comune": "Casargo",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23831
    },
    {
      "Comune": "Casarile",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Casarsa della Delizia",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33072
    },
    {
      "Comune": "Casarza Ligure",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16030
    },
    {
      "Comune": "Casasco",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Casasco d'Intelvi",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22022
    },
    {
      "Comune": "Casatenovo",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23880
    },
    {
      "Comune": "Casatisma",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Casavatore",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80020
    },
    {
      "Comune": "Casazza",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Cascia",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6043
    },
    {
      "Comune": "Casciago",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Casciana Terme",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56034
    },
    {
      "Comune": "Cascina",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56021
    },
    {
      "Comune": "Cascinette d'Ivrea",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Casei Gerola",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Caselette",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Casella",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16015
    },
    {
      "Comune": "Caselle in Pittari",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "Caselle Landi",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26842
    },
    {
      "Comune": "Caselle Lurani",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26853
    },
    {
      "Comune": "Caselle Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10072
    },
    {
      "Comune": "Caserta",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81100
    },
    {
      "Comune": "Casier",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31030
    },
    {
      "Comune": "Casignana",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89030
    },
    {
      "Comune": "Casina",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42034
    },
    {
      "Comune": "Casirate d'Adda",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Caslino d'Erba",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Casnate con Bernate",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Casnigo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Casola di Napoli",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80050
    },
    {
      "Comune": "Casola in Lunigiana",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54014
    },
    {
      "Comune": "Casola Valsenio",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48010
    },
    {
      "Comune": "Casole Bruzio",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Casole d'Elsa",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53031
    },
    {
      "Comune": "Casoli",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66043
    },
    {
      "Comune": "Casorate Primo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27022
    },
    {
      "Comune": "Casorate Sempione",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21011
    },
    {
      "Comune": "Casorezzo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Casoria",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80026
    },
    {
      "Comune": "Casorzo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14032
    },
    {
      "Comune": "Casperia",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2041
    },
    {
      "Comune": "Caspoggio",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Cassacco",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Cassago Brianza",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23893
    },
    {
      "Comune": "Cassano all'Ionio",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87011
    },
    {
      "Comune": "Cassano d'Adda",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20062
    },
    {
      "Comune": "Cassano delle Murge",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70020
    },
    {
      "Comune": "Cassano Irpino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Cassano Magnago",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21012
    },
    {
      "Comune": "Cassano Spinola",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15063
    },
    {
      "Comune": "Cassano Valcuvia",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Cassaro",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96010
    },
    {
      "Comune": "Cassiglio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Cassina de' Pecchi",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Cassina Rizzardi",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Cassina Valsassina",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23817
    },
    {
      "Comune": "Cassinasco",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14050
    },
    {
      "Comune": "Cassine",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15016
    },
    {
      "Comune": "Cassinelle",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15070
    },
    {
      "Comune": "Cassinetta di Lugagnano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20081
    },
    {
      "Comune": "Cassino",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3043
    },
    {
      "Comune": "Cassola",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36022
    },
    {
      "Comune": "Cassolnovo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27023
    },
    {
      "Comune": "Castagnaro",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37043
    },
    {
      "Comune": "Castagneto Carducci",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57022
    },
    {
      "Comune": "Castagneto Po",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Castagnito",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Castagnole delle Lanze",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14054
    },
    {
      "Comune": "Castagnole Monferrato",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14030
    },
    {
      "Comune": "Castagnole Piemonte",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Castana",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Castano Primo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20022
    },
    {
      "Comune": "Casteggio",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27045
    },
    {
      "Comune": "Castegnato",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25045
    },
    {
      "Comune": "Castegnero",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36020
    },
    {
      "Comune": "Castel Baronia",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Castel Boglione",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14040
    },
    {
      "Comune": "Castel Bolognese",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48014
    },
    {
      "Comune": "Castel Campagnano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "Castel Castagna",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64030
    },
    {
      "Comune": "Castel Colonna",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60010
    },
    {
      "Comune": "Castel Condino",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38082
    },
    {
      "Comune": "Castel d'Aiano",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40034
    },
    {
      "Comune": "Castel d'Ario",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46033
    },
    {
      "Comune": "Castel d'Azzano",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37060
    },
    {
      "Comune": "Castel del Giudice",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86080
    },
    {
      "Comune": "Castel del Monte",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67023
    },
    {
      "Comune": "Castel del Piano",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58033
    },
    {
      "Comune": "Castel del Rio",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40022
    },
    {
      "Comune": "Castel di Casio",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40030
    },
    {
      "Comune": "Castel di Ieri",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Castel di Iudica",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95040
    },
    {
      "Comune": "Castel di Lama",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63082
    },
    {
      "Comune": "Castel di Lucio",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Castel di Sangro",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67031
    },
    {
      "Comune": "Castel di Sasso",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81040
    },
    {
      "Comune": "Castel di Tora",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2020
    },
    {
      "Comune": "Castel Focognano",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52016
    },
    {
      "Comune": "Castel Frentano",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66032
    },
    {
      "Comune": "Castel Gabbiano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Castel Gandolfo",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 40
    },
    {
      "Comune": "Castel Giorgio",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5013
    },
    {
      "Comune": "Castel Goffredo",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46042
    },
    {
      "Comune": "Castel Guelfo di Bologna",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40023
    },
    {
      "Comune": "Castel Madama",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 24
    },
    {
      "Comune": "Castel Maggiore",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40013
    },
    {
      "Comune": "Castel Mella",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Castel Morrone",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81020
    },
    {
      "Comune": "Castel Ritaldi",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6044
    },
    {
      "Comune": "Castel Rocchero",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14044
    },
    {
      "Comune": "Castel Rozzone",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Castel San Giorgio",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84083
    },
    {
      "Comune": "Castel San Giovanni",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29015
    },
    {
      "Comune": "Castel San Lorenzo",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84049
    },
    {
      "Comune": "Castel San Niccolò",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52018
    },
    {
      "Comune": "Castel San Pietro Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "Castel San Pietro Terme",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40024
    },
    {
      "Comune": "Castel San Vincenzo",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86071
    },
    {
      "Comune": "Castel Sant'Angelo",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2010
    },
    {
      "Comune": "Castel Sant'Elia",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1030
    },
    {
      "Comune": "Castel Viscardo",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5014
    },
    {
      "Comune": "Castel Vittorio",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18030
    },
    {
      "Comune": "Castel Volturno",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Castelbaldo",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Castelbelforte",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46032
    },
    {
      "Comune": "Castelbellino",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60030
    },
    {
      "Comune": "Castelbello-Ciardes",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39020
    },
    {
      "Comune": "Castelbianco",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17030
    },
    {
      "Comune": "Castelbottaccio",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86030
    },
    {
      "Comune": "Castelbuono",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90013
    },
    {
      "Comune": "Castelcivita",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Castelcovati",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Castelcucco",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31030
    },
    {
      "Comune": "Casteldaccia",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90014
    },
    {
      "Comune": "Casteldelci",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47861
    },
    {
      "Comune": "Casteldelfino",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Casteldidone",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Castelfidardo",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60022
    },
    {
      "Comune": "Castelfiorentino",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50051
    },
    {
      "Comune": "Castelfondo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38020
    },
    {
      "Comune": "Castelforte",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4021
    },
    {
      "Comune": "Castelfranci",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Castelfranco di Sopra",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52020
    },
    {
      "Comune": "Castelfranco di Sotto",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56022
    },
    {
      "Comune": "Castelfranco Emilia",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41013
    },
    {
      "Comune": "Castelfranco in Miscano",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82022
    },
    {
      "Comune": "Castelfranco Veneto",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31033
    },
    {
      "Comune": "Castelgomberto",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36070
    },
    {
      "Comune": "Castelgrande",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Castelguglielmo",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45020
    },
    {
      "Comune": "Castelguidone",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Castellabate",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84048
    },
    {
      "Comune": "Castellafiume",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67050
    },
    {
      "Comune": "Castell'Alfero",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14033
    },
    {
      "Comune": "Castellalto",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64020
    },
    {
      "Comune": "Castellammare del Golfo",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91014
    },
    {
      "Comune": "Castellammare di Stabia",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80053
    },
    {
      "Comune": "Castellamonte",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10081
    },
    {
      "Comune": "Castellana Grotte",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70013
    },
    {
      "Comune": "Castellana Sicula",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Castellaneta",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74011
    },
    {
      "Comune": "Castellania",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15051
    },
    {
      "Comune": "Castellanza",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21053
    },
    {
      "Comune": "Castellar",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Castellar Guidobono",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Castellarano",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42014
    },
    {
      "Comune": "Castellaro",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18011
    },
    {
      "Comune": "Castell'Arquato",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29014
    },
    {
      "Comune": "Castellavazzo",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32010
    },
    {
      "Comune": "Castell'Azzara",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58034
    },
    {
      "Comune": "Castellazzo Bormida",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15073
    },
    {
      "Comune": "Castellazzo Novarese",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Castelleone",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26012
    },
    {
      "Comune": "Castelleone di Suasa",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60010
    },
    {
      "Comune": "Castellero",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14013
    },
    {
      "Comune": "Castelletto Cervo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13851
    },
    {
      "Comune": "Castelletto d'Erro",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Castelletto di Branduzzo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Castelletto d'Orba",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Castelletto Merli",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Castelletto Molina",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14040
    },
    {
      "Comune": "Castelletto Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Castelletto Sopra Ticino",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28053
    },
    {
      "Comune": "Castelletto Stura",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Castelletto Uzzone",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Castelli",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64041
    },
    {
      "Comune": "Castelli Calepio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Castellina in Chianti",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53011
    },
    {
      "Comune": "Castellina Marittima",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56040
    },
    {
      "Comune": "Castellinaldo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Castellino del Biferno",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86020
    },
    {
      "Comune": "Castellino Tanaro",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Castelliri",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Castello Cabiaglio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Castello d'Agogna",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Castello d'Argile",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40050
    },
    {
      "Comune": "Castello del Matese",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81016
    },
    {
      "Comune": "Castello dell'Acqua",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23030
    },
    {
      "Comune": "Castello di Annone",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14034
    },
    {
      "Comune": "Castello di Brianza",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23884
    },
    {
      "Comune": "Castello di Cisterna",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "Castello di Godego",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31030
    },
    {
      "Comune": "Castello di Serravalle",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40050
    },
    {
      "Comune": "Castello Tesino",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38053
    },
    {
      "Comune": "Castello-Molina di Fiemme",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Castellucchio",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46014
    },
    {
      "Comune": "Castelluccio dei Sauri",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71025
    },
    {
      "Comune": "Castelluccio Inferiore",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85040
    },
    {
      "Comune": "Castelluccio Superiore",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85040
    },
    {
      "Comune": "Castelluccio Valmaggiore",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71020
    },
    {
      "Comune": "Castell'Umberto",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Castelmagno",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Castelmarte",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Castelmassa",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45035
    },
    {
      "Comune": "Castelmauro",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86031
    },
    {
      "Comune": "Castelmezzano",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Castelmola",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Castelnovetto",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Castelnovo Bariano",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "Castelnovo del Friuli",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33090
    },
    {
      "Comune": "Castelnovo di Sotto",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42024
    },
    {
      "Comune": "Castelnovo ne' Monti",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42035
    },
    {
      "Comune": "Castelnuovo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Castelnuovo Belbo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14043
    },
    {
      "Comune": "Castelnuovo Berardenga",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53019
    },
    {
      "Comune": "Castelnuovo Bocca d'Adda",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26843
    },
    {
      "Comune": "Castelnuovo Bormida",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15017
    },
    {
      "Comune": "Castelnuovo Bozzente",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Castelnuovo Calcea",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14040
    },
    {
      "Comune": "Castelnuovo Cilento",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84040
    },
    {
      "Comune": "Castelnuovo del Garda",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37014
    },
    {
      "Comune": "Castelnuovo della Daunia",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71034
    },
    {
      "Comune": "Castelnuovo di Ceva",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Castelnuovo di Conza",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Castelnuovo di Farfa",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2031
    },
    {
      "Comune": "Castelnuovo di Garfagnana",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55032
    },
    {
      "Comune": "Castelnuovo di Porto",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Castelnuovo di Val di Cecina",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56041
    },
    {
      "Comune": "Castelnuovo Don Bosco",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14022
    },
    {
      "Comune": "Castelnuovo Magra",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19033
    },
    {
      "Comune": "Castelnuovo Nigra",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Castelnuovo Parano",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Castelnuovo Rangone",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41051
    },
    {
      "Comune": "Castelnuovo Scrivia",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15053
    },
    {
      "Comune": "Castelpagano",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82024
    },
    {
      "Comune": "Castelpetroso",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86090
    },
    {
      "Comune": "Castelpizzuto",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86090
    },
    {
      "Comune": "Castelplanio",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60031
    },
    {
      "Comune": "Castelpoto",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Castelraimondo",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62022
    },
    {
      "Comune": "Castelrotto",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Castelsantangelo sul Nera",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62039
    },
    {
      "Comune": "Castelsaraceno",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85031
    },
    {
      "Comune": "Castelsardo",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7031
    },
    {
      "Comune": "Castelseprio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Castelsilano",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88834
    },
    {
      "Comune": "Castelspina",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15070
    },
    {
      "Comune": "Casteltermini",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92025
    },
    {
      "Comune": "Castelveccana",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Castelvecchio Calvisio",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Castelvecchio di Rocca Barbena",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17034
    },
    {
      "Comune": "Castelvecchio Subequo",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67024
    },
    {
      "Comune": "Castelvenere",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82037
    },
    {
      "Comune": "Castelverde",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26022
    },
    {
      "Comune": "Castelverrino",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86080
    },
    {
      "Comune": "Castelvetere in Val Fortore",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82023
    },
    {
      "Comune": "Castelvetere sul Calore",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Castelvetrano",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91022
    },
    {
      "Comune": "Castelvetro di Modena",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41014
    },
    {
      "Comune": "Castelvetro Piacentino",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Castelvisconti",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Castenaso",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40055
    },
    {
      "Comune": "Castenedolo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25014
    },
    {
      "Comune": "Castiadas",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Castiglion Fibocchi",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52029
    },
    {
      "Comune": "Castiglion Fiorentino",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52043
    },
    {
      "Comune": "Castiglione a Casauria",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Castiglione Chiavarese",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16030
    },
    {
      "Comune": "Castiglione Cosentino",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Castiglione d'Adda",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26823
    },
    {
      "Comune": "Castiglione dei Pepoli",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40035
    },
    {
      "Comune": "Castiglione del Genovesi",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84090
    },
    {
      "Comune": "Castiglione del Lago",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6061
    },
    {
      "Comune": "Castiglione della Pescaia",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58043
    },
    {
      "Comune": "Castiglione delle Stiviere",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46043
    },
    {
      "Comune": "Castiglione di Garfagnana",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55033
    },
    {
      "Comune": "Castiglione di Sicilia",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95012
    },
    {
      "Comune": "Castiglione d'Intelvi",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22023
    },
    {
      "Comune": "Castiglione d'Orcia",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53023
    },
    {
      "Comune": "Castiglione Falletto",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Castiglione in Teverina",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1024
    },
    {
      "Comune": "Castiglione Messer Marino",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66033
    },
    {
      "Comune": "Castiglione Messer Raimondo",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64034
    },
    {
      "Comune": "Castiglione Olona",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21043
    },
    {
      "Comune": "Castiglione Tinella",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12053
    },
    {
      "Comune": "Castiglione Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Castignano",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63072
    },
    {
      "Comune": "Castilenti",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64035
    },
    {
      "Comune": "Castino",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Castione Andevenno",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23012
    },
    {
      "Comune": "Castione della Presolana",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Castions di Strada",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Castiraga Vidardo",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26866
    },
    {
      "Comune": "Casto",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25070
    },
    {
      "Comune": "Castorano",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63081
    },
    {
      "Comune": "Castrezzato",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Castri di Lecce",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Castrignano de' Greci",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Castrignano del Capo",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73040
    },
    {
      "Comune": "Castro",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24063
    },
    {
      "Comune": "Castro",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73030
    },
    {
      "Comune": "Castro dei Volsci",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3020
    },
    {
      "Comune": "Castrocaro Terme e Terra del Sole",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47011
    },
    {
      "Comune": "Castrocielo",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Castrofilippo",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92020
    },
    {
      "Comune": "Castrolibero",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Castronno",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Castronovo di Sicilia",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Castronuovo di Sant'Andrea",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85030
    },
    {
      "Comune": "Castropignano",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86010
    },
    {
      "Comune": "Castroreale",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98053
    },
    {
      "Comune": "Castroregio",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87070
    },
    {
      "Comune": "Castrovillari",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87012
    },
    {
      "Comune": "Catania",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": "951xx"
    },
    {
      "Comune": "Catanzaro",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88100
    },
    {
      "Comune": "Catenanuova",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94010
    },
    {
      "Comune": "Catignano",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65011
    },
    {
      "Comune": "Cattolica",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47841
    },
    {
      "Comune": "Cattolica Eraclea",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92011
    },
    {
      "Comune": "Caulonia",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89041
    },
    {
      "Comune": "Cautano",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Cava de' Tirreni",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84013
    },
    {
      "Comune": "Cava Manara",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27051
    },
    {
      "Comune": "Cavacurta",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26844
    },
    {
      "Comune": "Cavaglià",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13881
    },
    {
      "Comune": "Cavaglietto",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Cavaglio d'Agogna",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Cavaglio-Spoccia",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28825
    },
    {
      "Comune": "Cavagnolo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Cavaion Veronese",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37010
    },
    {
      "Comune": "Cavalese",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38033
    },
    {
      "Comune": "Cavallasca",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Cavallerleone",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Cavallermaggiore",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Cavallino",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Cavallino-Treporti",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30013
    },
    {
      "Comune": "Cavallirio",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Cavareno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38011
    },
    {
      "Comune": "Cavargna",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Cavaria con Premezzo",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21044
    },
    {
      "Comune": "Cavarzere",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30014
    },
    {
      "Comune": "Cavaso del Tomba",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31034
    },
    {
      "Comune": "Cavasso Nuovo",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33092
    },
    {
      "Comune": "Cavatore",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Cavazzo Carnico",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Cave",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 33
    },
    {
      "Comune": "Cavedago",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Cavedine",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38073
    },
    {
      "Comune": "Cavenago d'Adda",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26824
    },
    {
      "Comune": "Cavenago di Brianza",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20873
    },
    {
      "Comune": "Cavernago",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Cavezzo",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41032
    },
    {
      "Comune": "Cavizzana",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38022
    },
    {
      "Comune": "Cavour",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10061
    },
    {
      "Comune": "Cavriago",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42025
    },
    {
      "Comune": "Cavriana",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46040
    },
    {
      "Comune": "Cavriglia",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52022
    },
    {
      "Comune": "Cazzago Brabbia",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Cazzago San Martino",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25046
    },
    {
      "Comune": "Cazzano di Tramigna",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37030
    },
    {
      "Comune": "Cazzano Sant'Andrea",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24026
    },
    {
      "Comune": "Ceccano",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3023
    },
    {
      "Comune": "Cecima",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Cecina",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57023
    },
    {
      "Comune": "Cedegolo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25051
    },
    {
      "Comune": "Cedrasco",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Cefalà Diana",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Cefalù",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90015
    },
    {
      "Comune": "Ceggia",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30022
    },
    {
      "Comune": "Ceglie Messapica",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72013
    },
    {
      "Comune": "Celano",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67043
    },
    {
      "Comune": "Celenza sul Trigno",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Celenza Valfortore",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71035
    },
    {
      "Comune": "Celico",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87053
    },
    {
      "Comune": "Cella Dati",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26040
    },
    {
      "Comune": "Cella Monte",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15034
    },
    {
      "Comune": "Cellamare",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70010
    },
    {
      "Comune": "Cellara",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Cellarengo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14010
    },
    {
      "Comune": "Cellatica",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25060
    },
    {
      "Comune": "Celle di Bulgheria",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84040
    },
    {
      "Comune": "Celle di Macra",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Celle di San Vito",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71020
    },
    {
      "Comune": "Celle Enomondo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14010
    },
    {
      "Comune": "Celle Ligure",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17015
    },
    {
      "Comune": "Celleno",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1020
    },
    {
      "Comune": "Cellere",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Cellino Attanasio",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64036
    },
    {
      "Comune": "Cellino San Marco",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72020
    },
    {
      "Comune": "Cellio",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13024
    },
    {
      "Comune": "Cellole",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Cembra",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38034
    },
    {
      "Comune": "Cenadi",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88067
    },
    {
      "Comune": "Cenate Sopra",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Cenate Sotto",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24069
    },
    {
      "Comune": "Cencenighe Agordino",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Cene",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Ceneselli",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "Cengio",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17056
    },
    {
      "Comune": "Centa San Nicolò",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38040
    },
    {
      "Comune": "Centallo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12044
    },
    {
      "Comune": "Cento",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44042
    },
    {
      "Comune": "Centola",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84051
    },
    {
      "Comune": "Centrache",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88067
    },
    {
      "Comune": "Centuripe",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94010
    },
    {
      "Comune": "Cepagatti",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65012
    },
    {
      "Comune": "Ceppaloni",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82010
    },
    {
      "Comune": "Ceppo Morelli",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28875
    },
    {
      "Comune": "Ceprano",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3024
    },
    {
      "Comune": "Cerami",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94010
    },
    {
      "Comune": "Ceranesi",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16014
    },
    {
      "Comune": "Cerano",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28065
    },
    {
      "Comune": "Cerano d'Intelvi",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Ceranova",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Ceraso",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84052
    },
    {
      "Comune": "Cercemaggiore",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86012
    },
    {
      "Comune": "Cercenasco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Cercepiccola",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86010
    },
    {
      "Comune": "Cerchiara di Calabria",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87070
    },
    {
      "Comune": "Cerchio",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67044
    },
    {
      "Comune": "Cercino",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23016
    },
    {
      "Comune": "Cercivento",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Cercola",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80040
    },
    {
      "Comune": "Cerda",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90010
    },
    {
      "Comune": "Cerea",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37053
    },
    {
      "Comune": "Ceregnano",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45010
    },
    {
      "Comune": "Cerenzia",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88833
    },
    {
      "Comune": "Ceres",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Ceresara",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46040
    },
    {
      "Comune": "Cereseto",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Ceresole Alba",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Ceresole Reale",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Cerete",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Ceretto Lomellina",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Cergnago",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Ceriale",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17023
    },
    {
      "Comune": "Ceriana",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18034
    },
    {
      "Comune": "Ceriano Laghetto",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20816
    },
    {
      "Comune": "Cerignale",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29020
    },
    {
      "Comune": "Cerignola",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71042
    },
    {
      "Comune": "Cerisano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87044
    },
    {
      "Comune": "Cermenate",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22072
    },
    {
      "Comune": "Cermes",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "Cermignano",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64037
    },
    {
      "Comune": "Cernobbio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22012
    },
    {
      "Comune": "Cernusco Lombardone",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23870
    },
    {
      "Comune": "Cernusco sul Naviglio",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20063
    },
    {
      "Comune": "Cerreto Castello",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13852
    },
    {
      "Comune": "Cerreto d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Cerreto d'Esi",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60043
    },
    {
      "Comune": "Cerreto di Spoleto",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6041
    },
    {
      "Comune": "Cerreto Grue",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Cerreto Guidi",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50050
    },
    {
      "Comune": "Cerreto Laziale",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Cerreto Sannita",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82032
    },
    {
      "Comune": "Cerretto Langhe",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Cerrina Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Cerrione",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13882
    },
    {
      "Comune": "Cerro al Lambro",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20070
    },
    {
      "Comune": "Cerro al Volturno",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86072
    },
    {
      "Comune": "Cerro Maggiore",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20023
    },
    {
      "Comune": "Cerro Tanaro",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14030
    },
    {
      "Comune": "Cerro Veronese",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37020
    },
    {
      "Comune": "Cersosimo",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85030
    },
    {
      "Comune": "Certaldo",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50052
    },
    {
      "Comune": "Certosa di Pavia",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27012
    },
    {
      "Comune": "Cerva",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Cervara di Roma",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Cervarese Santa Croce",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35030
    },
    {
      "Comune": "Cervaro",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3044
    },
    {
      "Comune": "Cervasca",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Cervatto",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13025
    },
    {
      "Comune": "Cerveno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Cervere",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Cervesina",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Cerveteri",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 52
    },
    {
      "Comune": "Cervia",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48015
    },
    {
      "Comune": "Cervicati",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Cervignano d'Adda",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26832
    },
    {
      "Comune": "Cervignano del Friuli",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33052
    },
    {
      "Comune": "Cervinara",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83012
    },
    {
      "Comune": "Cervino",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81023
    },
    {
      "Comune": "Cervo",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18010
    },
    {
      "Comune": "Cerzeto",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Cesa",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Cesana Brianza",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23861
    },
    {
      "Comune": "Cesana Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10054
    },
    {
      "Comune": "Cesano Boscone",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20090
    },
    {
      "Comune": "Cesano Maderno",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20811
    },
    {
      "Comune": "Cesara",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28891
    },
    {
      "Comune": "Cesarò",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98033
    },
    {
      "Comune": "Cesate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20020
    },
    {
      "Comune": "Cesena",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": "4752x"
    },
    {
      "Comune": "Cesenatico",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47042
    },
    {
      "Comune": "Cesinali",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Cesio",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18022
    },
    {
      "Comune": "Cesiomaggiore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32030
    },
    {
      "Comune": "Cessalto",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Cessaniti",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89816
    },
    {
      "Comune": "Cessapalombo",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62020
    },
    {
      "Comune": "Cessole",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14050
    },
    {
      "Comune": "Cetara",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "Ceto",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Cetona",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53040
    },
    {
      "Comune": "Cetraro",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87022
    },
    {
      "Comune": "Ceva",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12073
    },
    {
      "Comune": "Cevo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Challand-Saint-Anselme",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Challand-Saint-Victor",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Chambave",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11023
    },
    {
      "Comune": "Chamois",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Champdepraz",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Champorcher",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Charvensod",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Chatillon",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11024
    },
    {
      "Comune": "Cherasco",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12062
    },
    {
      "Comune": "Cheremule",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7040
    },
    {
      "Comune": "Chialamberto",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Chiampo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36072
    },
    {
      "Comune": "Chianche",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83010
    },
    {
      "Comune": "Chianciano Terme",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53042
    },
    {
      "Comune": "Chianni",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56034
    },
    {
      "Comune": "Chianocco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Chiaramonte Gulfi",
      "Provincia": "RG",
      "Regione": "SIC",
      "CAP": 97012
    },
    {
      "Comune": "Chiaramonti",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Chiarano",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Chiaravalle",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60033
    },
    {
      "Comune": "Chiaravalle Centrale",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88064
    },
    {
      "Comune": "Chiari",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25032
    },
    {
      "Comune": "Chiaromonte",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85032
    },
    {
      "Comune": "Chiauci",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86097
    },
    {
      "Comune": "Chiavari",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16043
    },
    {
      "Comune": "Chiavenna",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23022
    },
    {
      "Comune": "Chiaverano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Chienes",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Chieri",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10023
    },
    {
      "Comune": "Chies d'Alpago",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32010
    },
    {
      "Comune": "Chiesa in Valmalenco",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23023
    },
    {
      "Comune": "Chiesanuova",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Chiesina Uzzanese",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51013
    },
    {
      "Comune": "Chieti",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66100
    },
    {
      "Comune": "Chieuti",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71010
    },
    {
      "Comune": "Chieve",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Chignolo d'Isola",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Chignolo Po",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27013
    },
    {
      "Comune": "Chioggia",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30015
    },
    {
      "Comune": "Chiomonte",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Chions",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33083
    },
    {
      "Comune": "Chiopris-Viscone",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33048
    },
    {
      "Comune": "Chitignano",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52010
    },
    {
      "Comune": "Chiuduno",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Chiuppano",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36010
    },
    {
      "Comune": "Chiuro",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23030
    },
    {
      "Comune": "Chiusa",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39043
    },
    {
      "Comune": "Chiusa di Pesio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12013
    },
    {
      "Comune": "Chiusa di San Michele",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Chiusa Sclafani",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90033
    },
    {
      "Comune": "Chiusaforte",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Chiusanico",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18027
    },
    {
      "Comune": "Chiusano d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14025
    },
    {
      "Comune": "Chiusano di San Domenico",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Chiusavecchia",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18027
    },
    {
      "Comune": "Chiusdino",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53012
    },
    {
      "Comune": "Chiusi",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53043
    },
    {
      "Comune": "Chiusi della Verna",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52010
    },
    {
      "Comune": "Chivasso",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10034
    },
    {
      "Comune": "Ciampino",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 43
    },
    {
      "Comune": "Cianciana",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92012
    },
    {
      "Comune": "Cibiana di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32040
    },
    {
      "Comune": "Cicagna",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16044
    },
    {
      "Comune": "Cicala",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Cicciano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80033
    },
    {
      "Comune": "Cicerale",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84053
    },
    {
      "Comune": "Ciciliano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Cicognolo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Ciconio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Cigliano",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13043
    },
    {
      "Comune": "Cigliè",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Cigognola",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Cigole",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Cilavegna",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27024
    },
    {
      "Comune": "Cimadolmo",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31010
    },
    {
      "Comune": "Cimbergo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Cimego",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38082
    },
    {
      "Comune": "Ciminà",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Ciminna",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90023
    },
    {
      "Comune": "Cimitile",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "Cimolais",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "Cimone",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Cinaglio",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Cineto Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Cingia de' Botti",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26042
    },
    {
      "Comune": "Cingoli",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62011
    },
    {
      "Comune": "Cinigiano",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58044
    },
    {
      "Comune": "Cinisello Balsamo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20092
    },
    {
      "Comune": "Cinisi",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90045
    },
    {
      "Comune": "Cino",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Cinquefrondi",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89021
    },
    {
      "Comune": "Cintano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Cinte Tesino",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Cinto Caomaggiore",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30020
    },
    {
      "Comune": "Cinto Euganeo",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35030
    },
    {
      "Comune": "Cinzano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Ciorlano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "Cipressa",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18017
    },
    {
      "Comune": "Circello",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Ciriè",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10073
    },
    {
      "Comune": "Cirigliano",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75010
    },
    {
      "Comune": "Cirimido",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Cirò",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88813
    },
    {
      "Comune": "Cirò Marina",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88811
    },
    {
      "Comune": "Cis",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38020
    },
    {
      "Comune": "Cisano Bergamasco",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24034
    },
    {
      "Comune": "Cisano sul Neva",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17035
    },
    {
      "Comune": "Ciserano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Cislago",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Cisliano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Cismon del Grappa",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36020
    },
    {
      "Comune": "Cison di Valmarino",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31030
    },
    {
      "Comune": "Cissone",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Cisterna d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14010
    },
    {
      "Comune": "Cisterna di Latina",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4012
    },
    {
      "Comune": "Cisternino",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72014
    },
    {
      "Comune": "Citerna",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6010
    },
    {
      "Comune": "Città della Pieve",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6062
    },
    {
      "Comune": "Città di Castello",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6012
    },
    {
      "Comune": "Città Sant'Angelo",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65013
    },
    {
      "Comune": "Cittadella",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35013
    },
    {
      "Comune": "Cittaducale",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2015
    },
    {
      "Comune": "Cittanova",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89022
    },
    {
      "Comune": "Cittareale",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2010
    },
    {
      "Comune": "Cittiglio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21033
    },
    {
      "Comune": "Civate",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23862
    },
    {
      "Comune": "Civenna",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Civezza",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18017
    },
    {
      "Comune": "Civezzano",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38045
    },
    {
      "Comune": "Civiasco",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13010
    },
    {
      "Comune": "Cividale del Friuli",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33043
    },
    {
      "Comune": "Cividate al Piano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Cividate Camuno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Civita",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Civita Castellana",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1033
    },
    {
      "Comune": "Civita d'Antino",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67050
    },
    {
      "Comune": "Civitacampomarano",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86030
    },
    {
      "Comune": "Civitaluparella",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Civitanova del Sannio",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86094
    },
    {
      "Comune": "Civitanova Marche",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62012
    },
    {
      "Comune": "Civitaquana",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Civitavecchia",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 53
    },
    {
      "Comune": "Civitella Alfedena",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Civitella Casanova",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Civitella d'Agliano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1020
    },
    {
      "Comune": "Civitella del Tronto",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64010
    },
    {
      "Comune": "Civitella di Romagna",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47012
    },
    {
      "Comune": "Civitella in Val di Chiana",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52041
    },
    {
      "Comune": "Civitella Messer Raimondo",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Civitella Paganico",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58045
    },
    {
      "Comune": "Civitella Roveto",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67054
    },
    {
      "Comune": "Civitella San Paolo",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Civo",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Claino con Osteno",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Claut",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "Clauzetto",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33090
    },
    {
      "Comune": "Clavesana",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Claviere",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Cles",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38023
    },
    {
      "Comune": "Cleto",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87030
    },
    {
      "Comune": "Clivio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Cloz",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38020
    },
    {
      "Comune": "Clusone",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24023
    },
    {
      "Comune": "Coassolo Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Coazze",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Coazzolo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14054
    },
    {
      "Comune": "Coccaglio",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Cocconato",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14023
    },
    {
      "Comune": "Cocquio-Trevisago",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21034
    },
    {
      "Comune": "Cocullo",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Codevigo",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Codevilla",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Codigoro",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44021
    },
    {
      "Comune": "Codognè",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31013
    },
    {
      "Comune": "Codogno",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26845
    },
    {
      "Comune": "Codroipo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33033
    },
    {
      "Comune": "Codrongianos",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7040
    },
    {
      "Comune": "Coggiola",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13863
    },
    {
      "Comune": "Cogliate",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20815
    },
    {
      "Comune": "Cogne",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11012
    },
    {
      "Comune": "Cogoleto",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16016
    },
    {
      "Comune": "Cogollo del Cengio",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36010
    },
    {
      "Comune": "Cogorno",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16030
    },
    {
      "Comune": "Colazza",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Colbordolo",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61022
    },
    {
      "Comune": "Colere",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Colfelice",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Coli",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29020
    },
    {
      "Comune": "Colico",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23823
    },
    {
      "Comune": "Collagna",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42037
    },
    {
      "Comune": "Collalto Sabino",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2022
    },
    {
      "Comune": "Collarmele",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67040
    },
    {
      "Comune": "Collazzone",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6050
    },
    {
      "Comune": "Colle Brianza",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23886
    },
    {
      "Comune": "Colle d'Anchise",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86020
    },
    {
      "Comune": "Colle di Tora",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2020
    },
    {
      "Comune": "Colle di Val d'Elsa",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53034
    },
    {
      "Comune": "Colle San Magno",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Colle Sannita",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82024
    },
    {
      "Comune": "Colle Santa Lucia",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Colle Umberto",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31014
    },
    {
      "Comune": "Collebeato",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25060
    },
    {
      "Comune": "Collecchio",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43044
    },
    {
      "Comune": "Collecorvino",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Colledara",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64042
    },
    {
      "Comune": "Colledimacine",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Colledimezzo",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Colleferro",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 34
    },
    {
      "Comune": "Collegiove",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2020
    },
    {
      "Comune": "Collegno",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10093
    },
    {
      "Comune": "Collelongo",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67050
    },
    {
      "Comune": "Collepardo",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3010
    },
    {
      "Comune": "Collepasso",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73040
    },
    {
      "Comune": "Collepietro",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Colleretto Castelnuovo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Colleretto Giacosa",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Collesalvetti",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57014
    },
    {
      "Comune": "Collesano",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90016
    },
    {
      "Comune": "Colletorto",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86044
    },
    {
      "Comune": "Collevecchio",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2042
    },
    {
      "Comune": "Colli a Volturno",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86073
    },
    {
      "Comune": "Colli del Tronto",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63079
    },
    {
      "Comune": "Colli sul Velino",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2010
    },
    {
      "Comune": "Colliano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Collinas",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Collio",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25060
    },
    {
      "Comune": "Collobiano",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "Colloredo di Monte Albano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Colmurano",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62020
    },
    {
      "Comune": "Colobraro",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75021
    },
    {
      "Comune": "Cologna Veneta",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37044
    },
    {
      "Comune": "Cologne",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25033
    },
    {
      "Comune": "Cologno al Serio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24055
    },
    {
      "Comune": "Cologno Monzese",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20093
    },
    {
      "Comune": "Colognola ai Colli",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37030
    },
    {
      "Comune": "Colonna",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "Colonnella",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64010
    },
    {
      "Comune": "Colonno",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Colorina",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Colorno",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43052
    },
    {
      "Comune": "Colosimi",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Colturano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Colzate",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Comabbio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Comacchio",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44022
    },
    {
      "Comune": "Comano",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54015
    },
    {
      "Comune": "Comano Terme",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38077
    },
    {
      "Comune": "Comazzo",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26833
    },
    {
      "Comune": "Comeglians",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33023
    },
    {
      "Comune": "Comelico Superiore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32040
    },
    {
      "Comune": "Comerio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21025
    },
    {
      "Comune": "Comezzano-Cizzago",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Comignago",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Comiso",
      "Provincia": "RG",
      "Regione": "SIC",
      "CAP": 97013
    },
    {
      "Comune": "Comitini",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92020
    },
    {
      "Comune": "Comiziano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "Commessaggio",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46010
    },
    {
      "Comune": "Commezzadura",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38020
    },
    {
      "Comune": "Como",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22100
    },
    {
      "Comune": "Compiano",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43053
    },
    {
      "Comune": "Comun Nuovo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Comunanza",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63087
    },
    {
      "Comune": "Cona",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30010
    },
    {
      "Comune": "Conca Casale",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86070
    },
    {
      "Comune": "Conca dei Marini",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "Conca della Campania",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81044
    },
    {
      "Comune": "Concamarise",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37050
    },
    {
      "Comune": "Concerviano",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2020
    },
    {
      "Comune": "Concesio",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25062
    },
    {
      "Comune": "Conco",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36062
    },
    {
      "Comune": "Concordia Sagittaria",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30023
    },
    {
      "Comune": "Concordia sulla Secchia",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41033
    },
    {
      "Comune": "Concorezzo",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20863
    },
    {
      "Comune": "Condino",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38083
    },
    {
      "Comune": "Condofuri",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89030
    },
    {
      "Comune": "Condove",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10055
    },
    {
      "Comune": "Condrò",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98040
    },
    {
      "Comune": "Conegliano",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31015
    },
    {
      "Comune": "Confienza",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Configni",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Conflenti",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Coniolo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15030
    },
    {
      "Comune": "Conselice",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48017
    },
    {
      "Comune": "Conselve",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35026
    },
    {
      "Comune": "Contessa Entellina",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Contigliano",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2043
    },
    {
      "Comune": "Contrada",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Controguerra",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64010
    },
    {
      "Comune": "Controne",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Contursi Terme",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84024
    },
    {
      "Comune": "Conversano",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70014
    },
    {
      "Comune": "Conza della Campania",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Conzano",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15030
    },
    {
      "Comune": "Copertino",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73043
    },
    {
      "Comune": "Copiano",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Copparo",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44034
    },
    {
      "Comune": "Corana",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Corato",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70033
    },
    {
      "Comune": "Corbara",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "Corbetta",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20011
    },
    {
      "Comune": "Corbola",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45015
    },
    {
      "Comune": "Corchiano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1030
    },
    {
      "Comune": "Corciano",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6073
    },
    {
      "Comune": "Cordenons",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33084
    },
    {
      "Comune": "Cordignano",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31016
    },
    {
      "Comune": "Cordovado",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33075
    },
    {
      "Comune": "Coredo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Coreglia Antelminelli",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55025
    },
    {
      "Comune": "Coreglia Ligure",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16040
    },
    {
      "Comune": "Coreno Ausonio",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Corfinio",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Cori",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4010
    },
    {
      "Comune": "Coriano",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47853
    },
    {
      "Comune": "Corigliano Calabro",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87064
    },
    {
      "Comune": "Corigliano d'Otranto",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73022
    },
    {
      "Comune": "Corinaldo",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60013
    },
    {
      "Comune": "Corio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Corleone",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90034
    },
    {
      "Comune": "Corleto Monforte",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Corleto Perticara",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85012
    },
    {
      "Comune": "Cormano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20032
    },
    {
      "Comune": "Cormons",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34071
    },
    {
      "Comune": "Corna Imagna",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Cornalba",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24017
    },
    {
      "Comune": "Cornale",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Cornaredo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Cornate d'Adda",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20872
    },
    {
      "Comune": "Cornedo all'Isarco",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39053
    },
    {
      "Comune": "Cornedo Vicentino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36073
    },
    {
      "Comune": "Cornegliano Laudense",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26854
    },
    {
      "Comune": "Corneliano d'Alba",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Corniglio",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43021
    },
    {
      "Comune": "Corno di Rosazzo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Corno Giovine",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26846
    },
    {
      "Comune": "Cornovecchio",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26842
    },
    {
      "Comune": "Cornuda",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31041
    },
    {
      "Comune": "Correggio",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42015
    },
    {
      "Comune": "Correzzana",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20856
    },
    {
      "Comune": "Correzzola",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Corrido",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Corridonia",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62014
    },
    {
      "Comune": "Corropoli",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64013
    },
    {
      "Comune": "Corsano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73033
    },
    {
      "Comune": "Corsico",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20094
    },
    {
      "Comune": "Corsione",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Cortaccia sulla Strada del Vino",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Cortale",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88020
    },
    {
      "Comune": "Cortandone",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14013
    },
    {
      "Comune": "Cortanze",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Cortazzone",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14010
    },
    {
      "Comune": "Corte Brugnatella",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29020
    },
    {
      "Comune": "Corte de' Cortesi con Cignone",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Corte de' Frati",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Corte Franca",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Corte Palasio",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26834
    },
    {
      "Comune": "Cortemaggiore",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29016
    },
    {
      "Comune": "Cortemilia",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12074
    },
    {
      "Comune": "Corteno Golgi",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Cortenova",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23813
    },
    {
      "Comune": "Cortenuova",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Corteolona",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27014
    },
    {
      "Comune": "Cortiglione",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14040
    },
    {
      "Comune": "Cortina d'Ampezzo",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32043
    },
    {
      "Comune": "Cortina sulla Strada del Vino",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Cortino",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64040
    },
    {
      "Comune": "Cortona",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52044
    },
    {
      "Comune": "Corvara",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Corvara in Badia",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39033
    },
    {
      "Comune": "Corvino San Quirico",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Corzano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Coseano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Cosenza",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87100
    },
    {
      "Comune": "Cosio d'Arroscia",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18023
    },
    {
      "Comune": "Cosio Valtellino",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23013
    },
    {
      "Comune": "Cosoleto",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89050
    },
    {
      "Comune": "Cossano Belbo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12054
    },
    {
      "Comune": "Cossano Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Cossato",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13836
    },
    {
      "Comune": "Cosseria",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17017
    },
    {
      "Comune": "Cossignano",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63067
    },
    {
      "Comune": "Cossogno",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28801
    },
    {
      "Comune": "Cossoine",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Cossombrato",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Costa de' Nobili",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Costa di Mezzate",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Costa di Rovigo",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45023
    },
    {
      "Comune": "Costa Masnaga",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23845
    },
    {
      "Comune": "Costa Serina",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Costa Valle Imagna",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Costa Vescovato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Costa Volpino",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24062
    },
    {
      "Comune": "Costabissara",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "Costacciaro",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6021
    },
    {
      "Comune": "Costanzana",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13033
    },
    {
      "Comune": "Costarainera",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18017
    },
    {
      "Comune": "Costermano",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37010
    },
    {
      "Comune": "Costigliole d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14055
    },
    {
      "Comune": "Costigliole Saluzzo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12024
    },
    {
      "Comune": "Cotignola",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48010
    },
    {
      "Comune": "Cotronei",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88836
    },
    {
      "Comune": "Cottanello",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Courmayeur",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11013
    },
    {
      "Comune": "Covo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Cozzo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Craco",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75010
    },
    {
      "Comune": "Crandola Valsassina",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23832
    },
    {
      "Comune": "Cravagliana",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13020
    },
    {
      "Comune": "Cravanzana",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Craveggia",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28852
    },
    {
      "Comune": "Creazzo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36051
    },
    {
      "Comune": "Crecchio",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66014
    },
    {
      "Comune": "Credaro",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Credera Rubbiano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Crema",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26013
    },
    {
      "Comune": "Cremella",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23894
    },
    {
      "Comune": "Cremenaga",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Cremeno",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23814
    },
    {
      "Comune": "Cremia",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Cremolino",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Cremona",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26100
    },
    {
      "Comune": "Cremosano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Crescentino",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13044
    },
    {
      "Comune": "Crespadoro",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36070
    },
    {
      "Comune": "Crespano del Grappa",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31017
    },
    {
      "Comune": "Crespellano",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40056
    },
    {
      "Comune": "Crespiatica",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26835
    },
    {
      "Comune": "Crespina",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56040
    },
    {
      "Comune": "Crespino",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "Cressa",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28012
    },
    {
      "Comune": "Crevacuore",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13864
    },
    {
      "Comune": "Crevalcore",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40014
    },
    {
      "Comune": "Crevoladossola",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28865
    },
    {
      "Comune": "Crispano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80020
    },
    {
      "Comune": "Crispiano",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74012
    },
    {
      "Comune": "Crissolo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Crocefieschi",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16010
    },
    {
      "Comune": "Crocetta del Montello",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31035
    },
    {
      "Comune": "Crodo",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28862
    },
    {
      "Comune": "Crognaleto",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64043
    },
    {
      "Comune": "Cropalati",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "Cropani",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88051
    },
    {
      "Comune": "Crosa",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13853
    },
    {
      "Comune": "Crosia",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "Crosio della Valle",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Crotone",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88900
    },
    {
      "Comune": "Crotta d'Adda",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Crova",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Croviana",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38027
    },
    {
      "Comune": "Crucoli",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88812
    },
    {
      "Comune": "Cuasso al Monte",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Cuccaro Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Cuccaro Vetere",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84050
    },
    {
      "Comune": "Cucciago",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22060
    },
    {
      "Comune": "Cuceglio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Cuggiono",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20012
    },
    {
      "Comune": "Cugliate-Fabiasco",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Cuglieri",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9073
    },
    {
      "Comune": "Cugnoli",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Cumiana",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Cumignano sul Naviglio",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Cunardo",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21035
    },
    {
      "Comune": "Cuneo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12100
    },
    {
      "Comune": "Cunevo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Cunico",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14026
    },
    {
      "Comune": "Cuorgnè",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10082
    },
    {
      "Comune": "Cupello",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66051
    },
    {
      "Comune": "Cupra Marittima",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63064
    },
    {
      "Comune": "Cupramontana",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60034
    },
    {
      "Comune": "Cura Carpignano",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Curcuris",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Cureggio",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Curiglia con Monteviasco",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Curinga",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88022
    },
    {
      "Comune": "Curino",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13865
    },
    {
      "Comune": "Curno",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24035
    },
    {
      "Comune": "Curon Venosta",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39027
    },
    {
      "Comune": "Cursi",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Cursolo-Orasso",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28827
    },
    {
      "Comune": "Curtarolo",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Curtatone",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46010
    },
    {
      "Comune": "Curti",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81040
    },
    {
      "Comune": "Cusago",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20090
    },
    {
      "Comune": "Cusano Milanino",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20095
    },
    {
      "Comune": "Cusano Mutri",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82033
    },
    {
      "Comune": "Cusino",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Cusio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Custonaci",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91015
    },
    {
      "Comune": "Cutigliano",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51024
    },
    {
      "Comune": "Cutro",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88842
    },
    {
      "Comune": "Cutrofiano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Cuveglio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Cuvio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Daiano",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Dairago",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20020
    },
    {
      "Comune": "Dalmine",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24044
    },
    {
      "Comune": "Dambel",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Danta di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32040
    },
    {
      "Comune": "Daone",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38080
    },
    {
      "Comune": "Darè",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38080
    },
    {
      "Comune": "Darfo Boario Terme",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25047
    },
    {
      "Comune": "Dasà",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89832
    },
    {
      "Comune": "Davagna",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16022
    },
    {
      "Comune": "Daverio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Davoli",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Dazio",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Decimomannu",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9033
    },
    {
      "Comune": "Decimoputzu",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Decollatura",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88041
    },
    {
      "Comune": "Dego",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17058
    },
    {
      "Comune": "Deiva Marina",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19013
    },
    {
      "Comune": "Delebio",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23014
    },
    {
      "Comune": "Delia",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93010
    },
    {
      "Comune": "Delianuova",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89012
    },
    {
      "Comune": "Deliceto",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71026
    },
    {
      "Comune": "Dello",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Demonte",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12014
    },
    {
      "Comune": "Denice",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Denno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Dernice",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15056
    },
    {
      "Comune": "Derovere",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26040
    },
    {
      "Comune": "Deruta",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6053
    },
    {
      "Comune": "Dervio",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23824
    },
    {
      "Comune": "Desana",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13034
    },
    {
      "Comune": "Desenzano del Garda",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25015
    },
    {
      "Comune": "Desio",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20832
    },
    {
      "Comune": "Desulo",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8032
    },
    {
      "Comune": "Diamante",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87023
    },
    {
      "Comune": "Diano Arentino",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18013
    },
    {
      "Comune": "Diano Castello",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18013
    },
    {
      "Comune": "Diano d'Alba",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12055
    },
    {
      "Comune": "Diano Marina",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18013
    },
    {
      "Comune": "Diano San Pietro",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18013
    },
    {
      "Comune": "Dicomano",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50062
    },
    {
      "Comune": "Dignano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Dimaro",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38025
    },
    {
      "Comune": "Dinami",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89833
    },
    {
      "Comune": "Dipignano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87045
    },
    {
      "Comune": "Diso",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73030
    },
    {
      "Comune": "Divignano",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Dizzasco",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Dobbiaco",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39034
    },
    {
      "Comune": "Doberdò del Lago",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "Dogliani",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12063
    },
    {
      "Comune": "Dogliola",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Dogna",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Dolcè",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37020
    },
    {
      "Comune": "Dolceacqua",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18035
    },
    {
      "Comune": "Dolcedo",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18020
    },
    {
      "Comune": "Dolegna del Collio",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "Dolianova",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9041
    },
    {
      "Comune": "Dolo",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30031
    },
    {
      "Comune": "Dolzago",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23843
    },
    {
      "Comune": "Domanico",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87030
    },
    {
      "Comune": "Domaso",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22013
    },
    {
      "Comune": "Domegge di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32040
    },
    {
      "Comune": "Domicella",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Domodossola",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28845
    },
    {
      "Comune": "Domus De Maria",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Domusnovas",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9015
    },
    {
      "Comune": "Don",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38011
    },
    {
      "Comune": "Donato",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13893
    },
    {
      "Comune": "Dongo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22014
    },
    {
      "Comune": "Donnas",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Donori",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Dorgali",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8022
    },
    {
      "Comune": "Dorio",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23824
    },
    {
      "Comune": "Dormelletto",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28040
    },
    {
      "Comune": "Dorno",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Dorsino",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38070
    },
    {
      "Comune": "Dorzano",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13881
    },
    {
      "Comune": "Dosolo",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46030
    },
    {
      "Comune": "Dossena",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Dosso del Liro",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Doues",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Dovadola",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47013
    },
    {
      "Comune": "Dovera",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Dozza",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40060
    },
    {
      "Comune": "Dragoni",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "Drapia",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89862
    },
    {
      "Comune": "Drena",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38074
    },
    {
      "Comune": "Drenchia",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Dresano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20070
    },
    {
      "Comune": "Drezzo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Drizzona",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26034
    },
    {
      "Comune": "Dro",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38074
    },
    {
      "Comune": "Dronero",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12025
    },
    {
      "Comune": "Druento",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Druogno",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28853
    },
    {
      "Comune": "Dualchi",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8010
    },
    {
      "Comune": "Dubino",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23015
    },
    {
      "Comune": "Due Carrare",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Dueville",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36031
    },
    {
      "Comune": "Dugenta",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Duino-Aurisina",
      "Provincia": "TS",
      "Regione": "FVG",
      "CAP": 34011
    },
    {
      "Comune": "Dumenza",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Duno",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Durazzano",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82015
    },
    {
      "Comune": "Duronia",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86020
    },
    {
      "Comune": "Dusino San Michele",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14010
    },
    {
      "Comune": "Eboli",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84025
    },
    {
      "Comune": "Edolo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25048
    },
    {
      "Comune": "Egna",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39044
    },
    {
      "Comune": "Elice",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Elini",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Ello",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23848
    },
    {
      "Comune": "Elmas",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9030
    },
    {
      "Comune": "Elva",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Emarèse",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Empoli",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50053
    },
    {
      "Comune": "Endine Gaiano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Enego",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36052
    },
    {
      "Comune": "Enemonzo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Enna",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94100
    },
    {
      "Comune": "Entracque",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Entratico",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Envie",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Episcopia",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85033
    },
    {
      "Comune": "Eraclea",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30020
    },
    {
      "Comune": "Erba",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22036
    },
    {
      "Comune": "Erbè",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37060
    },
    {
      "Comune": "Erbezzo",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37020
    },
    {
      "Comune": "Erbusco",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Erchie",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72020
    },
    {
      "Comune": "Ercolano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80056
    },
    {
      "Comune": "Erice",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91016
    },
    {
      "Comune": "Erli",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17030
    },
    {
      "Comune": "Erto e Casso",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "Erula",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Erve",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23805
    },
    {
      "Comune": "Esanatoglia",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62024
    },
    {
      "Comune": "Escalaplano",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8043
    },
    {
      "Comune": "Escolca",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Esine",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Esino Lario",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23825
    },
    {
      "Comune": "Esperia",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3045
    },
    {
      "Comune": "Esporlatu",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Este",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35042
    },
    {
      "Comune": "Esterzili",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Etroubles",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11014
    },
    {
      "Comune": "Eupilio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Exilles",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Fabbrica Curone",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15054
    },
    {
      "Comune": "Fabbriche di Vallico",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55020
    },
    {
      "Comune": "Fabbrico",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42042
    },
    {
      "Comune": "Fabriano",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60044
    },
    {
      "Comune": "Fabrica di Roma",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1034
    },
    {
      "Comune": "Fabrizia",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89823
    },
    {
      "Comune": "Fabro",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5015
    },
    {
      "Comune": "Faedis",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Faedo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Faedo Valtellino",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Faenza",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48018
    },
    {
      "Comune": "Faeto",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71020
    },
    {
      "Comune": "Fagagna",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33034
    },
    {
      "Comune": "Faggeto Lario",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Faggiano",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74020
    },
    {
      "Comune": "Fagnano Alto",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Fagnano Castello",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87013
    },
    {
      "Comune": "Fagnano Olona",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21054
    },
    {
      "Comune": "Fai della Paganella",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Faicchio",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Falcade",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Falciano del Massico",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Falconara Albanese",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87030
    },
    {
      "Comune": "Falconara Marittima",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60015
    },
    {
      "Comune": "Falcone",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98060
    },
    {
      "Comune": "Faleria",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1030
    },
    {
      "Comune": "Falerna",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88042
    },
    {
      "Comune": "Falerone",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63837
    },
    {
      "Comune": "Fallo",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Falmenta",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28827
    },
    {
      "Comune": "Faloppio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Falvaterra",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3020
    },
    {
      "Comune": "Falzes",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Fanano",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41021
    },
    {
      "Comune": "Fanna",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33092
    },
    {
      "Comune": "Fano",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61032
    },
    {
      "Comune": "Fano Adriano",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64044
    },
    {
      "Comune": "Fara Filiorum Petri",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Fara Gera d'Adda",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24045
    },
    {
      "Comune": "Fara in Sabina",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2032
    },
    {
      "Comune": "Fara Novarese",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28073
    },
    {
      "Comune": "Fara Olivana con Sola",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24058
    },
    {
      "Comune": "Fara San Martino",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66015
    },
    {
      "Comune": "Fara Vicentino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "Fardella",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85034
    },
    {
      "Comune": "Farigliano",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Farindola",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Farini",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29023
    },
    {
      "Comune": "Farnese",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Farra d'Alpago",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32016
    },
    {
      "Comune": "Farra di Soligo",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31010
    },
    {
      "Comune": "Farra d'Isonzo",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34072
    },
    {
      "Comune": "Fasano",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72015
    },
    {
      "Comune": "Fascia",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16020
    },
    {
      "Comune": "Fauglia",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56043
    },
    {
      "Comune": "Faule",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Favale di Malvaro",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16040
    },
    {
      "Comune": "Favara",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92026
    },
    {
      "Comune": "Faver",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Favignana",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91023
    },
    {
      "Comune": "Favria",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10083
    },
    {
      "Comune": "Feisoglio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Feletto",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Felino",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43035
    },
    {
      "Comune": "Felitto",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84055
    },
    {
      "Comune": "Felizzano",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15023
    },
    {
      "Comune": "Felonica",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46022
    },
    {
      "Comune": "Feltre",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32032
    },
    {
      "Comune": "Fenegrò",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Fenestrelle",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Fénis",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Ferentillo",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5034
    },
    {
      "Comune": "Ferentino",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3013
    },
    {
      "Comune": "Ferla",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96010
    },
    {
      "Comune": "Fermignano",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61033
    },
    {
      "Comune": "Fermo",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63900
    },
    {
      "Comune": "Ferno",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Feroleto Antico",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Feroleto della Chiesa",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89050
    },
    {
      "Comune": "Ferrandina",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75013
    },
    {
      "Comune": "Ferrara",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": "4412x"
    },
    {
      "Comune": "Ferrara di Monte Baldo",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37020
    },
    {
      "Comune": "Ferrazzano",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86010
    },
    {
      "Comune": "Ferrera di Varese",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Ferrera Erbognone",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27032
    },
    {
      "Comune": "Ferrere",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14012
    },
    {
      "Comune": "Ferriere",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29024
    },
    {
      "Comune": "Ferruzzano",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89030
    },
    {
      "Comune": "Fiamignano",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2023
    },
    {
      "Comune": "Fiano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Fiano Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 65
    },
    {
      "Comune": "Fiastra",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62035
    },
    {
      "Comune": "Fiavè",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38075
    },
    {
      "Comune": "Ficarazzi",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90010
    },
    {
      "Comune": "Ficarolo",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45036
    },
    {
      "Comune": "Ficarra",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98062
    },
    {
      "Comune": "Ficulle",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5016
    },
    {
      "Comune": "Fidenza",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43036
    },
    {
      "Comune": "Fiè allo Sciliar",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39050
    },
    {
      "Comune": "Fiera di Primiero",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38054
    },
    {
      "Comune": "Fierozzo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Fiesco",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Fiesole",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50014
    },
    {
      "Comune": "Fiesse",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Fiesso d'Artico",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30032
    },
    {
      "Comune": "Fiesso Umbertiano",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45024
    },
    {
      "Comune": "Figino Serenza",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22060
    },
    {
      "Comune": "Figline Valdarno",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50063
    },
    {
      "Comune": "Figline Vegliaturo",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Filacciano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Filadelfia",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89814
    },
    {
      "Comune": "Filago",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Filandari",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89841
    },
    {
      "Comune": "Filattiera",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54023
    },
    {
      "Comune": "Filettino",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3010
    },
    {
      "Comune": "Filetto",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66030
    },
    {
      "Comune": "Filiano",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85020
    },
    {
      "Comune": "Filighera",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Filignano",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86074
    },
    {
      "Comune": "Filogaso",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89843
    },
    {
      "Comune": "Filottrano",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60024
    },
    {
      "Comune": "Finale Emilia",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41034
    },
    {
      "Comune": "Finale Ligure",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17024
    },
    {
      "Comune": "Fino del Monte",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Fino Mornasco",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22073
    },
    {
      "Comune": "Fiorano al Serio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Fiorano Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Fiorano Modenese",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41042
    },
    {
      "Comune": "Fiordimonte",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62035
    },
    {
      "Comune": "Fiorenzuola d'Arda",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29017
    },
    {
      "Comune": "Firenze",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": "501xx"
    },
    {
      "Comune": "Firenzuola",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50033
    },
    {
      "Comune": "Firmo",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Fisciano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84084
    },
    {
      "Comune": "Fiuggi",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3014
    },
    {
      "Comune": "Fiumalbo",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41022
    },
    {
      "Comune": "Fiumara",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89050
    },
    {
      "Comune": "Fiume Veneto",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "Fiumedinisi",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98022
    },
    {
      "Comune": "Fiumefreddo Bruzio",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87030
    },
    {
      "Comune": "Fiumefreddo di Sicilia",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95013
    },
    {
      "Comune": "Fiumicello",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Fiumicino",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 54
    },
    {
      "Comune": "Fiuminata",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62025
    },
    {
      "Comune": "Fivizzano",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54013
    },
    {
      "Comune": "Flaibano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Flavon",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Flero",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Floresta",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Floridia",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96014
    },
    {
      "Comune": "Florinas",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Flumeri",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Fluminimaggiore",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Flussio",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 8010
    },
    {
      "Comune": "Fobello",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13025
    },
    {
      "Comune": "Foggia",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": "7112x"
    },
    {
      "Comune": "Foglianise",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Fogliano Redipuglia",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "Foglizzo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Foiano della Chiana",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52045
    },
    {
      "Comune": "Foiano di Val Fortore",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Folgaria",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38064
    },
    {
      "Comune": "Folignano",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63084
    },
    {
      "Comune": "Foligno",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6034
    },
    {
      "Comune": "Follina",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31051
    },
    {
      "Comune": "Follo",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Follonica",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58022
    },
    {
      "Comune": "Fombio",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26861
    },
    {
      "Comune": "Fondachelli-Fantina",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98050
    },
    {
      "Comune": "Fondi",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4022
    },
    {
      "Comune": "Fondo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38013
    },
    {
      "Comune": "Fonni",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8023
    },
    {
      "Comune": "Fontainemore",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Fontana Liri",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3035
    },
    {
      "Comune": "Fontanafredda",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33074
    },
    {
      "Comune": "Fontanarosa",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Fontanelice",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40025
    },
    {
      "Comune": "Fontanella",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24056
    },
    {
      "Comune": "Fontanellato",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43012
    },
    {
      "Comune": "Fontanelle",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31043
    },
    {
      "Comune": "Fontaneto d'Agogna",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Fontanetto Po",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Fontanigorda",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16023
    },
    {
      "Comune": "Fontanile",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14044
    },
    {
      "Comune": "Fontaniva",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35014
    },
    {
      "Comune": "Fonte",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31010
    },
    {
      "Comune": "Fonte Nuova",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 13
    },
    {
      "Comune": "Fontecchio",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Fontechiari",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Fontegreca",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81014
    },
    {
      "Comune": "Fonteno",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Fontevivo",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43010
    },
    {
      "Comune": "Fonzaso",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32030
    },
    {
      "Comune": "Foppolo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Forano",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2044
    },
    {
      "Comune": "Force",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63086
    },
    {
      "Comune": "Forchia",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82011
    },
    {
      "Comune": "Forcola",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Fordongianus",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9083
    },
    {
      "Comune": "Forenza",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85023
    },
    {
      "Comune": "Foresto Sparso",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Forgaria nel Friuli",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Forino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Forio",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80075
    },
    {
      "Comune": "Forlì",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": "4712x"
    },
    {
      "Comune": "Forlì del Sannio",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86084
    },
    {
      "Comune": "Forlimpopoli",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47034
    },
    {
      "Comune": "Formazza",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28863
    },
    {
      "Comune": "Formello",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Formia",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4023
    },
    {
      "Comune": "Formicola",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81040
    },
    {
      "Comune": "Formigara",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Formigine",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41043
    },
    {
      "Comune": "Formigliana",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "Formignana",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44035
    },
    {
      "Comune": "Fornace",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38040
    },
    {
      "Comune": "Fornelli",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86070
    },
    {
      "Comune": "Forni Avoltri",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Forni di Sopra",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33024
    },
    {
      "Comune": "Forni di Sotto",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Forno Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10084
    },
    {
      "Comune": "Forno di Zoldo",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32012
    },
    {
      "Comune": "Fornovo di Taro",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43045
    },
    {
      "Comune": "Fornovo San Giovanni",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Forte dei Marmi",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55042
    },
    {
      "Comune": "Fortezza",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39045
    },
    {
      "Comune": "Fortunago",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Forza d'Agrò",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Fosciandora",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55020
    },
    {
      "Comune": "Fosdinovo",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54035
    },
    {
      "Comune": "Fossa",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Fossacesia",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66022
    },
    {
      "Comune": "Fossalta di Piave",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30020
    },
    {
      "Comune": "Fossalta di Portogruaro",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30025
    },
    {
      "Comune": "Fossalto",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86020
    },
    {
      "Comune": "Fossano",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12045
    },
    {
      "Comune": "Fossato di Vico",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6022
    },
    {
      "Comune": "Fossato Serralta",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Fossò",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30030
    },
    {
      "Comune": "Fossombrone",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61034
    },
    {
      "Comune": "Foza",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36010
    },
    {
      "Comune": "Frabosa Soprana",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12082
    },
    {
      "Comune": "Frabosa Sottana",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12083
    },
    {
      "Comune": "Fraconalto",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Fragagnano",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74022
    },
    {
      "Comune": "Fragneto L'Abate",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Fragneto Monforte",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Fraine",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Framura",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19014
    },
    {
      "Comune": "Francavilla al Mare",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66023
    },
    {
      "Comune": "Francavilla Angitola",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89815
    },
    {
      "Comune": "Francavilla Bisio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Francavilla d'Ete",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63816
    },
    {
      "Comune": "Francavilla di Sicilia",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98034
    },
    {
      "Comune": "Francavilla Fontana",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72021
    },
    {
      "Comune": "Francavilla in Sinni",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85034
    },
    {
      "Comune": "Francavilla Marittima",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87072
    },
    {
      "Comune": "Francica",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89851
    },
    {
      "Comune": "Francofonte",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96015
    },
    {
      "Comune": "Francolise",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81050
    },
    {
      "Comune": "Frascaro",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Frascarolo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Frascati",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 44
    },
    {
      "Comune": "Frascineto",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Frassilongo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Frassinelle Polesine",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "Frassinello Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15035
    },
    {
      "Comune": "Frassineto Po",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Frassinetto",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Frassino",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Frassinoro",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41044
    },
    {
      "Comune": "Frasso Sabino",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2030
    },
    {
      "Comune": "Frasso Telesino",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Fratta Polesine",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45025
    },
    {
      "Comune": "Fratta Todina",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6054
    },
    {
      "Comune": "Frattamaggiore",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80027
    },
    {
      "Comune": "Frattaminore",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80020
    },
    {
      "Comune": "Fratte Rosa",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61040
    },
    {
      "Comune": "Frazzanò",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Fregona",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31010
    },
    {
      "Comune": "Fresagrandinaria",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Fresonara",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15064
    },
    {
      "Comune": "Frigento",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Frignano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Frinco",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14030
    },
    {
      "Comune": "Frisa",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66030
    },
    {
      "Comune": "Frisanco",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "Front",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Frontino",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61021
    },
    {
      "Comune": "Frontone",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61040
    },
    {
      "Comune": "Frosinone",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3100
    },
    {
      "Comune": "Frosolone",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86095
    },
    {
      "Comune": "Frossasco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Frugarolo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15065
    },
    {
      "Comune": "Fubine",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15043
    },
    {
      "Comune": "Fucecchio",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50054
    },
    {
      "Comune": "Fuipiano Valle Imagna",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Fumane",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37022
    },
    {
      "Comune": "Fumone",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3010
    },
    {
      "Comune": "Funes",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Furci",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Furci Siculo",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98023
    },
    {
      "Comune": "Furnari",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98054
    },
    {
      "Comune": "Furore",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "Furtei",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Fuscaldo",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87024
    },
    {
      "Comune": "Fusignano",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48010
    },
    {
      "Comune": "Fusine",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Futani",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84050
    },
    {
      "Comune": "Gabbioneta-Binanuova",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Gabiano",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Gabicce Mare",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61011
    },
    {
      "Comune": "Gaby",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Gadesco-Pieve Delmona",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Gadoni",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Gaeta",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4024
    },
    {
      "Comune": "Gaggi",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Gaggiano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20083
    },
    {
      "Comune": "Gaggio Montano",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40041
    },
    {
      "Comune": "Gaglianico",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13894
    },
    {
      "Comune": "Gagliano Aterno",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Gagliano Castelferrato",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94010
    },
    {
      "Comune": "Gagliano del Capo",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73034
    },
    {
      "Comune": "Gagliato",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Gagliole",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62022
    },
    {
      "Comune": "Gaiarine",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31018
    },
    {
      "Comune": "Gaiba",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "Gaiola",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Gaiole in Chianti",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53013
    },
    {
      "Comune": "Gairo",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Gais",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Galati Mamertino",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Galatina",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73013
    },
    {
      "Comune": "Galatone",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73044
    },
    {
      "Comune": "Galatro",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89054
    },
    {
      "Comune": "Galbiate",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23851
    },
    {
      "Comune": "Galeata",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47010
    },
    {
      "Comune": "Galgagnano",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26832
    },
    {
      "Comune": "Gallarate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21013
    },
    {
      "Comune": "Gallese",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1035
    },
    {
      "Comune": "Galliate",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28066
    },
    {
      "Comune": "Galliate Lombardo",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Galliavola",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27034
    },
    {
      "Comune": "Gallicano",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55027
    },
    {
      "Comune": "Gallicano nel Lazio",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 10
    },
    {
      "Comune": "Gallicchio",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Galliera",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40015
    },
    {
      "Comune": "Galliera Veneta",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35015
    },
    {
      "Comune": "Gallinaro",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Gallio",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36032
    },
    {
      "Comune": "Gallipoli",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73014
    },
    {
      "Comune": "Gallo Matese",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "Gallodoro",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Galluccio",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81044
    },
    {
      "Comune": "Galtellì",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Galzignano Terme",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35030
    },
    {
      "Comune": "Gamalero",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Gambara",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Gambarana",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Gambasca",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Gambassi Terme",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50050
    },
    {
      "Comune": "Gambatesa",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86013
    },
    {
      "Comune": "Gambellara",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36053
    },
    {
      "Comune": "Gamberale",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Gambettola",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47035
    },
    {
      "Comune": "Gambolò",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27025
    },
    {
      "Comune": "Gambugliano",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36050
    },
    {
      "Comune": "Gandellino",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Gandino",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24024
    },
    {
      "Comune": "Gandosso",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Gangi",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90024
    },
    {
      "Comune": "Garaguso",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75010
    },
    {
      "Comune": "Garbagna",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Garbagna Novarese",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28070
    },
    {
      "Comune": "Garbagnate Milanese",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20024
    },
    {
      "Comune": "Garbagnate Monastero",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23846
    },
    {
      "Comune": "Garda",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37016
    },
    {
      "Comune": "Gardone Riviera",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25083
    },
    {
      "Comune": "Gardone Val Trompia",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25063
    },
    {
      "Comune": "Garessio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12075
    },
    {
      "Comune": "Gargallo",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Gargazzone",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "Gargnano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25084
    },
    {
      "Comune": "Garlasco",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27026
    },
    {
      "Comune": "Garlate",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23852
    },
    {
      "Comune": "Garlenda",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17033
    },
    {
      "Comune": "Garniga Terme",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Garzeno",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Garzigliana",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Gasperina",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Gassino Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Gattatico",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42043
    },
    {
      "Comune": "Gatteo",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47043
    },
    {
      "Comune": "Gattico",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28013
    },
    {
      "Comune": "Gattinara",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13045
    },
    {
      "Comune": "Gavardo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25085
    },
    {
      "Comune": "Gavazzana",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15063
    },
    {
      "Comune": "Gavello",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45010
    },
    {
      "Comune": "Gaverina Terme",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Gavi",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15066
    },
    {
      "Comune": "Gavignano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "Gavirate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21026
    },
    {
      "Comune": "Gavoi",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Gavorrano",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58023
    },
    {
      "Comune": "Gazoldo degli Ippoliti",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46040
    },
    {
      "Comune": "Gazzada Schianno",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21045
    },
    {
      "Comune": "Gazzaniga",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24025
    },
    {
      "Comune": "Gazzo",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Gazzo Veronese",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37060
    },
    {
      "Comune": "Gazzola",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Gazzuolo",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46010
    },
    {
      "Comune": "Gela",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93012
    },
    {
      "Comune": "Gemmano",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47855
    },
    {
      "Comune": "Gemona del Friuli",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33013
    },
    {
      "Comune": "Gemonio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21036
    },
    {
      "Comune": "Genazzano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "Genga",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60040
    },
    {
      "Comune": "Genivolta",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Genola",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Genoni",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Genova",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": "161xx"
    },
    {
      "Comune": "Genuri",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Genzano di Lucania",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85013
    },
    {
      "Comune": "Genzano di Roma",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 45
    },
    {
      "Comune": "Genzone",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27014
    },
    {
      "Comune": "Gera Lario",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Gerace",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Geraci Siculo",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90010
    },
    {
      "Comune": "Gerano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 25
    },
    {
      "Comune": "Gerenzago",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Gerenzano",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Gergei",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Germagnano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Germagno",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28887
    },
    {
      "Comune": "Germignaga",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Gerocarne",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89831
    },
    {
      "Comune": "Gerola Alta",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Gerosa",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Gerre de' Caprioli",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26040
    },
    {
      "Comune": "Gesico",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Gessate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Gessopalena",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Gesturi",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Gesualdo",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Ghedi",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25016
    },
    {
      "Comune": "Ghemme",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28074
    },
    {
      "Comune": "Ghiffa",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28823
    },
    {
      "Comune": "Ghilarza",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9074
    },
    {
      "Comune": "Ghisalba",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Ghislarengo",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "Giacciano con Baruchella",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45020
    },
    {
      "Comune": "Giaglione",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Gianico",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Giano dell'Umbria",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6030
    },
    {
      "Comune": "Giano Vetusto",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81042
    },
    {
      "Comune": "Giardinello",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90040
    },
    {
      "Comune": "Giardini-Naxos",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98035
    },
    {
      "Comune": "Giarole",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15036
    },
    {
      "Comune": "Giarratana",
      "Provincia": "RG",
      "Regione": "SIC",
      "CAP": 97010
    },
    {
      "Comune": "Giarre",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95014
    },
    {
      "Comune": "Giave",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Giaveno",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10094
    },
    {
      "Comune": "Giavera del Montello",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Giba",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Gibellina",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91024
    },
    {
      "Comune": "Gifflenga",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13874
    },
    {
      "Comune": "Giffone",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89020
    },
    {
      "Comune": "Giffoni Sei Casali",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84090
    },
    {
      "Comune": "Giffoni Valle Piana",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84095
    },
    {
      "Comune": "Gignese",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28836
    },
    {
      "Comune": "Gignod",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Gildone",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86010
    },
    {
      "Comune": "Gimigliano",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88045
    },
    {
      "Comune": "Ginestra",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85020
    },
    {
      "Comune": "Ginestra degli Schiavoni",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Ginosa",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74013
    },
    {
      "Comune": "Gioi",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84056
    },
    {
      "Comune": "Gioia dei Marsi",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67055
    },
    {
      "Comune": "Gioia del Colle",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70023
    },
    {
      "Comune": "Gioia Sannitica",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "Gioia Tauro",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89013
    },
    {
      "Comune": "Gioiosa Ionica",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89042
    },
    {
      "Comune": "Gioiosa Marea",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98063
    },
    {
      "Comune": "Giove",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5024
    },
    {
      "Comune": "Giovinazzo",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70054
    },
    {
      "Comune": "Giovo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Girasole",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Girifalco",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88024
    },
    {
      "Comune": "Gironico",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Gissi",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66052
    },
    {
      "Comune": "Giuggianello",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73030
    },
    {
      "Comune": "Giugliano in Campania",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80014
    },
    {
      "Comune": "Giuliana",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Giuliano di Roma",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3020
    },
    {
      "Comune": "Giuliano Teatino",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Giulianova",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64021
    },
    {
      "Comune": "Giuncugnano",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55030
    },
    {
      "Comune": "Giungano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84050
    },
    {
      "Comune": "Giurdignano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Giussago",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Giussano",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20833
    },
    {
      "Comune": "Giustenice",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17027
    },
    {
      "Comune": "Giustino",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38086
    },
    {
      "Comune": "Giusvalla",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17010
    },
    {
      "Comune": "Givoletto",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Gizzeria",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Glorenza",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39020
    },
    {
      "Comune": "Godega di Sant'Urbano",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31010
    },
    {
      "Comune": "Godiasco",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27052
    },
    {
      "Comune": "Godrano",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Goito",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46044
    },
    {
      "Comune": "Golasecca",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Golferenzo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27047
    },
    {
      "Comune": "Golfo Aranci",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7020
    },
    {
      "Comune": "Gombito",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Gonars",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Goni",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Gonnesa",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Gonnoscodina",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Gonnosfanadiga",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9035
    },
    {
      "Comune": "Gonnosnò",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Gonnostramatza",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9093
    },
    {
      "Comune": "Gonzaga",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46023
    },
    {
      "Comune": "Gordona",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Gorga",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "Gorgo al Monticano",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Gorgoglione",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75010
    },
    {
      "Comune": "Gorgonzola",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20064
    },
    {
      "Comune": "Goriano Sicoli",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Gorizia",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34170
    },
    {
      "Comune": "Gorla Maggiore",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Gorla Minore",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21055
    },
    {
      "Comune": "Gorlago",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Gorle",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Gornate-Olona",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Gorno",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Goro",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44020
    },
    {
      "Comune": "Gorreto",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16020
    },
    {
      "Comune": "Gorzegno",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Gosaldo",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Gossolengo",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29020
    },
    {
      "Comune": "Gottasecca",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Gottolengo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25023
    },
    {
      "Comune": "Govone",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Gozzano",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28024
    },
    {
      "Comune": "Gradara",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61012
    },
    {
      "Comune": "Gradisca d'Isonzo",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34072
    },
    {
      "Comune": "Grado",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34073
    },
    {
      "Comune": "Gradoli",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Graffignana",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26813
    },
    {
      "Comune": "Graffignano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1020
    },
    {
      "Comune": "Graglia",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13895
    },
    {
      "Comune": "Gragnano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80054
    },
    {
      "Comune": "Gragnano Trebbiense",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Grammichele",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95042
    },
    {
      "Comune": "Grana",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14031
    },
    {
      "Comune": "Granaglione",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40045
    },
    {
      "Comune": "Granarolo dell'Emilia",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40057
    },
    {
      "Comune": "Grancona",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Grandate",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Grandola ed Uniti",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Graniti",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98036
    },
    {
      "Comune": "Granozzo con Monticello",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Grantola",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Grantorto",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Granze",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Grassano",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75014
    },
    {
      "Comune": "Grassobbio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Gratteri",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90010
    },
    {
      "Comune": "Grauno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Gravedona ed Uniti",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22015
    },
    {
      "Comune": "Gravellona Lomellina",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Gravellona Toce",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28883
    },
    {
      "Comune": "Gravere",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Gravina di Catania",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95030
    },
    {
      "Comune": "Gravina in Puglia",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70024
    },
    {
      "Comune": "Grazzanise",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81046
    },
    {
      "Comune": "Grazzano Badoglio",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14035
    },
    {
      "Comune": "Greccio",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2045
    },
    {
      "Comune": "Greci",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Greggio",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "Gremiasco",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15056
    },
    {
      "Comune": "Gressan",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Gressoney-la-Trinitè",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Gressoney-Saint-Jean",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11025
    },
    {
      "Comune": "Greve in Chianti",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50022
    },
    {
      "Comune": "Grezzago",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20056
    },
    {
      "Comune": "Grezzana",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37023
    },
    {
      "Comune": "Griante",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22011
    },
    {
      "Comune": "Gricignano di Aversa",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Grignasco",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28075
    },
    {
      "Comune": "Grigno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38055
    },
    {
      "Comune": "Grimacco",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Grimaldi",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87034
    },
    {
      "Comune": "Grinzane Cavour",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Grisignano di Zocco",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Grisolia",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Grizzana Morandi",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40030
    },
    {
      "Comune": "Grognardo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Gromo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Grondona",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Grone",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Grontardo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26044
    },
    {
      "Comune": "Gropello Cairoli",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27027
    },
    {
      "Comune": "Gropparello",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29025
    },
    {
      "Comune": "Groscavallo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Grosio",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23033
    },
    {
      "Comune": "Grosotto",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23034
    },
    {
      "Comune": "Grosseto",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58100
    },
    {
      "Comune": "Grosso",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Grottaferrata",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 46
    },
    {
      "Comune": "Grottaglie",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74023
    },
    {
      "Comune": "Grottaminarda",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83035
    },
    {
      "Comune": "Grottammare",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63066
    },
    {
      "Comune": "Grottazzolina",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63844
    },
    {
      "Comune": "Grotte",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92020
    },
    {
      "Comune": "Grotte di Castro",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1025
    },
    {
      "Comune": "Grotteria",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89043
    },
    {
      "Comune": "Grottole",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75010
    },
    {
      "Comune": "Grottolella",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83010
    },
    {
      "Comune": "Gruaro",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30020
    },
    {
      "Comune": "Grugliasco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10095
    },
    {
      "Comune": "Grumello Cremonese ed Uniti",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26023
    },
    {
      "Comune": "Grumello del Monte",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24064
    },
    {
      "Comune": "Grumento Nova",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Grumes",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Grumo Appula",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70025
    },
    {
      "Comune": "Grumo Nevano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80028
    },
    {
      "Comune": "Grumolo delle Abbadesse",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Guagnano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "Gualdo",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62020
    },
    {
      "Comune": "Gualdo Cattaneo",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6035
    },
    {
      "Comune": "Gualdo Tadino",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6023
    },
    {
      "Comune": "Gualtieri",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42044
    },
    {
      "Comune": "Gualtieri Sicaminò",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98040
    },
    {
      "Comune": "Guamaggiore",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Guanzate",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Guarcino",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3016
    },
    {
      "Comune": "Guarda Veneta",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "Guardabosone",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13010
    },
    {
      "Comune": "Guardamiglio",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26862
    },
    {
      "Comune": "Guardavalle",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88065
    },
    {
      "Comune": "Guardea",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5025
    },
    {
      "Comune": "Guardia Lombardi",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Guardia Perticara",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Guardia Piemontese",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Guardia Sanframondi",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82034
    },
    {
      "Comune": "Guardiagrele",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66016
    },
    {
      "Comune": "Guardialfiera",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86030
    },
    {
      "Comune": "Guardiaregia",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86014
    },
    {
      "Comune": "Guardistallo",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56040
    },
    {
      "Comune": "Guarene",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Guasila",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Guastalla",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42016
    },
    {
      "Comune": "Guazzora",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Gubbio",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6024
    },
    {
      "Comune": "Gudo Visconti",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20088
    },
    {
      "Comune": "Guglionesi",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86034
    },
    {
      "Comune": "Guidizzolo",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46040
    },
    {
      "Comune": "Guidonia Montecelio",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 12
    },
    {
      "Comune": "Guiglia",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41052
    },
    {
      "Comune": "Guilmi",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Gurro",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28828
    },
    {
      "Comune": "Guspini",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9036
    },
    {
      "Comune": "Gussago",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25064
    },
    {
      "Comune": "Gussola",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26040
    },
    {
      "Comune": "Hone",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Idro",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25074
    },
    {
      "Comune": "Iglesias",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9016
    },
    {
      "Comune": "Igliano",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Ilbono",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Illasi",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37031
    },
    {
      "Comune": "Illorai",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Imbersago",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23898
    },
    {
      "Comune": "Imer",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Imola",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40026
    },
    {
      "Comune": "Imperia",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18100
    },
    {
      "Comune": "Impruneta",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50023
    },
    {
      "Comune": "Inarzo",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Incisa in Val d'Arno",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50064
    },
    {
      "Comune": "Incisa Scapaccino",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14045
    },
    {
      "Comune": "Incudine",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Induno Olona",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21056
    },
    {
      "Comune": "Ingria",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Intragna",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28816
    },
    {
      "Comune": "Introbio",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23815
    },
    {
      "Comune": "Introd",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Introdacqua",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Introzzo",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23835
    },
    {
      "Comune": "Inverigo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22044
    },
    {
      "Comune": "Inverno e Monteleone",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Inverso Pinasca",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Inveruno",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Invorio",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28045
    },
    {
      "Comune": "Inzago",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20065
    },
    {
      "Comune": "Ionadi",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89851
    },
    {
      "Comune": "Irgoli",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Irma",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25061
    },
    {
      "Comune": "Irsina",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75022
    },
    {
      "Comune": "Isasca",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Isca sullo Ionio",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Ischia",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80077
    },
    {
      "Comune": "Ischia di Castro",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Ischitella",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71010
    },
    {
      "Comune": "Iseo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25049
    },
    {
      "Comune": "Isera",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Isernia",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86170
    },
    {
      "Comune": "Isili",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8033
    },
    {
      "Comune": "Isnello",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90010
    },
    {
      "Comune": "Isola d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14057
    },
    {
      "Comune": "Isola del Cantone",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16017
    },
    {
      "Comune": "Isola del Giglio",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58012
    },
    {
      "Comune": "Isola del Gran Sasso d'Italia",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64045
    },
    {
      "Comune": "Isola del Liri",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3036
    },
    {
      "Comune": "Isola del Piano",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61030
    },
    {
      "Comune": "Isola della Scala",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37063
    },
    {
      "Comune": "Isola delle Femmine",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90040
    },
    {
      "Comune": "Isola di Capo Rizzuto",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88841
    },
    {
      "Comune": "Isola di Fondra",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Isola Dovarese",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26031
    },
    {
      "Comune": "Isola Rizza",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37050
    },
    {
      "Comune": "Isola Sant'Antonio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Isola Vicentina",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36033
    },
    {
      "Comune": "Isolabella",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10046
    },
    {
      "Comune": "Isolabona",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18035
    },
    {
      "Comune": "Isole Tremiti",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71040
    },
    {
      "Comune": "Isorella",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25010
    },
    {
      "Comune": "Ispani",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84050
    },
    {
      "Comune": "Ispica",
      "Provincia": "RG",
      "Regione": "SIC",
      "CAP": 97014
    },
    {
      "Comune": "Ispra",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21027
    },
    {
      "Comune": "Issiglio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Issime",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Isso",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Issogne",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Istrana",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31036
    },
    {
      "Comune": "Itala",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98025
    },
    {
      "Comune": "Itri",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4020
    },
    {
      "Comune": "Ittireddu",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Ittiri",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7044
    },
    {
      "Comune": "Ivano-Fracena",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38059
    },
    {
      "Comune": "Ivrea",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10015
    },
    {
      "Comune": "Izano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Jacurso",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88020
    },
    {
      "Comune": "Jelsi",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86015
    },
    {
      "Comune": "Jenne",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Jerago con Orago",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Jerzu",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8044
    },
    {
      "Comune": "Jesi",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60035
    },
    {
      "Comune": "Jesolo",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30016
    },
    {
      "Comune": "Jolanda di Savoia",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44037
    },
    {
      "Comune": "Joppolo",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89863
    },
    {
      "Comune": "Joppolo Giancaxio",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92010
    },
    {
      "Comune": "Jovencan",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "La Cassa",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "La Loggia",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "La Maddalena",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7024
    },
    {
      "Comune": "La Magdeleine",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "La Morra",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12064
    },
    {
      "Comune": "La Salle",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11015
    },
    {
      "Comune": "La Spezia",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": "191xx"
    },
    {
      "Comune": "La Thuile",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11016
    },
    {
      "Comune": "La Valle",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "La Valle Agordina",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Labico",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "Labro",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2010
    },
    {
      "Comune": "Lacchiarella",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20084
    },
    {
      "Comune": "Lacco Ameno",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80076
    },
    {
      "Comune": "Lacedonia",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83046
    },
    {
      "Comune": "Laces",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39021
    },
    {
      "Comune": "Laconi",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 8034
    },
    {
      "Comune": "Ladispoli",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 55
    },
    {
      "Comune": "Laerru",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Laganadi",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89050
    },
    {
      "Comune": "Laghi",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36010
    },
    {
      "Comune": "Laglio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Lagnasco",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Lago",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87035
    },
    {
      "Comune": "Lagonegro",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85042
    },
    {
      "Comune": "Lagosanto",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44023
    },
    {
      "Comune": "Lagundo",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39022
    },
    {
      "Comune": "Laigueglia",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17053
    },
    {
      "Comune": "Lainate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20020
    },
    {
      "Comune": "Laino",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Laino Borgo",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87014
    },
    {
      "Comune": "Laino Castello",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87015
    },
    {
      "Comune": "Laion",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Laives",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39055
    },
    {
      "Comune": "Lajatico",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56030
    },
    {
      "Comune": "Lallio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Lama dei Peligni",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Lama Mocogno",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41023
    },
    {
      "Comune": "Lambrugo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22045
    },
    {
      "Comune": "Lamezia Terme",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88046
    },
    {
      "Comune": "Lamon",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32033
    },
    {
      "Comune": "Lampedusa e Linosa",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92010
    },
    {
      "Comune": "Lamporecchio",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51035
    },
    {
      "Comune": "Lamporo",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13046
    },
    {
      "Comune": "Lana",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39011
    },
    {
      "Comune": "Lanciano",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66034
    },
    {
      "Comune": "Landiona",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28064
    },
    {
      "Comune": "Landriano",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27015
    },
    {
      "Comune": "Langhirano",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43013
    },
    {
      "Comune": "Langosco",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Lanusei",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8045
    },
    {
      "Comune": "Lanuvio",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 40
    },
    {
      "Comune": "Lanzada",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Lanzo d'Intelvi",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22024
    },
    {
      "Comune": "Lanzo Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10074
    },
    {
      "Comune": "Lapedona",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63823
    },
    {
      "Comune": "Lapio",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Lappano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "L'Aquila",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67100
    },
    {
      "Comune": "Larciano",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51036
    },
    {
      "Comune": "Lardaro",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38087
    },
    {
      "Comune": "Lardirago",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27016
    },
    {
      "Comune": "Lari",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56035
    },
    {
      "Comune": "Lariano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 40
    },
    {
      "Comune": "Larino",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86035
    },
    {
      "Comune": "Las Plassas",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Lasa",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39023
    },
    {
      "Comune": "Lascari",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90010
    },
    {
      "Comune": "Lasino",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38076
    },
    {
      "Comune": "Lasnigo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Lastebasse",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Lastra a Signa",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50055
    },
    {
      "Comune": "Latera",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Laterina",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52020
    },
    {
      "Comune": "Laterza",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74014
    },
    {
      "Comune": "Latiano",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72022
    },
    {
      "Comune": "Latina",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4100
    },
    {
      "Comune": "Latisana",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33053
    },
    {
      "Comune": "Latronico",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85043
    },
    {
      "Comune": "Lattarico",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Lauco",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33029
    },
    {
      "Comune": "Laureana Cilento",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84050
    },
    {
      "Comune": "Laureana di Borrello",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89023
    },
    {
      "Comune": "Lauregno",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Laurenzana",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85014
    },
    {
      "Comune": "Lauria",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85044
    },
    {
      "Comune": "Lauriano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Laurino",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84057
    },
    {
      "Comune": "Laurito",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84050
    },
    {
      "Comune": "Lauro",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83023
    },
    {
      "Comune": "Lavagna",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16033
    },
    {
      "Comune": "Lavagno",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37030
    },
    {
      "Comune": "Lavarone",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38046
    },
    {
      "Comune": "Lavello",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85024
    },
    {
      "Comune": "Lavena Ponte Tresa",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21037
    },
    {
      "Comune": "Laveno-Mombello",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21014
    },
    {
      "Comune": "Lavenone",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25074
    },
    {
      "Comune": "Laviano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Lavis",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38015
    },
    {
      "Comune": "Lazise",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37017
    },
    {
      "Comune": "Lazzate",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20824
    },
    {
      "Comune": "Lecce",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73100
    },
    {
      "Comune": "Lecce nei Marsi",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67050
    },
    {
      "Comune": "Lecco",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23900
    },
    {
      "Comune": "Ledro",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38067
    },
    {
      "Comune": "Leffe",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24026
    },
    {
      "Comune": "Leggiuno",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21038
    },
    {
      "Comune": "Legnago",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37045
    },
    {
      "Comune": "Legnano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20025
    },
    {
      "Comune": "Legnaro",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Lei",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8010
    },
    {
      "Comune": "Leini",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Leivi",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16040
    },
    {
      "Comune": "Lemie",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Lendinara",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45026
    },
    {
      "Comune": "Leni",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98050
    },
    {
      "Comune": "Lenna",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Lenno",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22016
    },
    {
      "Comune": "Leno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25024
    },
    {
      "Comune": "Lenola",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4025
    },
    {
      "Comune": "Lenta",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13035
    },
    {
      "Comune": "Lentate sul Seveso",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20823
    },
    {
      "Comune": "Lentella",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Lentiai",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Lentini",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96016
    },
    {
      "Comune": "Leonessa",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2016
    },
    {
      "Comune": "Leonforte",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94013
    },
    {
      "Comune": "Leporano",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74020
    },
    {
      "Comune": "Lequile",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "Lequio Berria",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Lequio Tanaro",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Lercara Friddi",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90025
    },
    {
      "Comune": "Lerici",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19032
    },
    {
      "Comune": "Lerma",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15070
    },
    {
      "Comune": "Lesa",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28040
    },
    {
      "Comune": "Lesegno",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12076
    },
    {
      "Comune": "Lesignano de' Bagni",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43037
    },
    {
      "Comune": "Lesina",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71010
    },
    {
      "Comune": "Lesmo",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20855
    },
    {
      "Comune": "Lessolo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Lessona",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13853
    },
    {
      "Comune": "Lestizza",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Letino",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "Letojanni",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98037
    },
    {
      "Comune": "Lettere",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80050
    },
    {
      "Comune": "Lettomanoppello",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Lettopalena",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Levanto",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19015
    },
    {
      "Comune": "Levate",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Leverano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73045
    },
    {
      "Comune": "Levice",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Levico Terme",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38056
    },
    {
      "Comune": "Levone",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Lezzeno",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22025
    },
    {
      "Comune": "Liberi",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81040
    },
    {
      "Comune": "Librizzi",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98064
    },
    {
      "Comune": "Licata",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92027
    },
    {
      "Comune": "Licciana Nardi",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54016
    },
    {
      "Comune": "Licenza",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 26
    },
    {
      "Comune": "Licodia Eubea",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95040
    },
    {
      "Comune": "Lierna",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23827
    },
    {
      "Comune": "Lignana",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13034
    },
    {
      "Comune": "Lignano Sabbiadoro",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33054
    },
    {
      "Comune": "Ligonchio",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42039
    },
    {
      "Comune": "Ligosullo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Lillianes",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Limana",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Limatola",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Limbadi",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89844
    },
    {
      "Comune": "Limbiate",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20812
    },
    {
      "Comune": "Limena",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Limido Comasco",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Limina",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Limone Piemonte",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12015
    },
    {
      "Comune": "Limone sul Garda",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25010
    },
    {
      "Comune": "Limosano",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86022
    },
    {
      "Comune": "Linarolo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Linguaglossa",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95015
    },
    {
      "Comune": "Lioni",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83047
    },
    {
      "Comune": "Lipari",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98055
    },
    {
      "Comune": "Lipomo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Lirio",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Liscate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Liscia",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Lisciano Niccone",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6060
    },
    {
      "Comune": "Lisignago",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Lisio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Lissone",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20851
    },
    {
      "Comune": "Liveri",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "Livigno",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23030
    },
    {
      "Comune": "Livinallongo del Col di Lana",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Livo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38020
    },
    {
      "Comune": "Livo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Livorno",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": "571xx"
    },
    {
      "Comune": "Livorno Ferraris",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13046
    },
    {
      "Comune": "Livraga",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26814
    },
    {
      "Comune": "Lizzanello",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73023
    },
    {
      "Comune": "Lizzano",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74020
    },
    {
      "Comune": "Lizzano in Belvedere",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40042
    },
    {
      "Comune": "Loano",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17025
    },
    {
      "Comune": "Loazzolo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14051
    },
    {
      "Comune": "Locana",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Locate di Triulzi",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20085
    },
    {
      "Comune": "Locate Varesino",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Locatello",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Loceri",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Locorotondo",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70010
    },
    {
      "Comune": "Locri",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89044
    },
    {
      "Comune": "Loculi",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Lodè",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Lodi",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26900
    },
    {
      "Comune": "Lodi Vecchio",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26855
    },
    {
      "Comune": "Lodine",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Lodrino",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25060
    },
    {
      "Comune": "Lograto",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Loiano",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40050
    },
    {
      "Comune": "Loiri Porto San Paolo",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7020
    },
    {
      "Comune": "Lomagna",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23871
    },
    {
      "Comune": "Lomazzo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22074
    },
    {
      "Comune": "Lombardore",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Lombriasco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Lomello",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27034
    },
    {
      "Comune": "Lona-Lases",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38040
    },
    {
      "Comune": "Lonate Ceppino",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Lonate Pozzolo",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21015
    },
    {
      "Comune": "Lonato del Garda",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25017
    },
    {
      "Comune": "Londa",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50060
    },
    {
      "Comune": "Longano",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86090
    },
    {
      "Comune": "Longare",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36023
    },
    {
      "Comune": "Longarone",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32013
    },
    {
      "Comune": "Longhena",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Longi",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Longiano",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47020
    },
    {
      "Comune": "Longobardi",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87030
    },
    {
      "Comune": "Longobucco",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87066
    },
    {
      "Comune": "Longone al Segrino",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Longone Sabino",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2020
    },
    {
      "Comune": "Lonigo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36045
    },
    {
      "Comune": "Loranzè",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Loreggia",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Loreglia",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28893
    },
    {
      "Comune": "Lorenzago di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32040
    },
    {
      "Comune": "Lorenzana",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56043
    },
    {
      "Comune": "Loreo",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45017
    },
    {
      "Comune": "Loreto",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60025
    },
    {
      "Comune": "Loreto Aprutino",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65014
    },
    {
      "Comune": "Loria",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31037
    },
    {
      "Comune": "Loro Ciuffenna",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52024
    },
    {
      "Comune": "Loro Piceno",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62020
    },
    {
      "Comune": "Lorsica",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16045
    },
    {
      "Comune": "Losine",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Lotzorai",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Lovere",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24065
    },
    {
      "Comune": "Lovero",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23030
    },
    {
      "Comune": "Lozio",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Lozza",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Lozzo Atestino",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35034
    },
    {
      "Comune": "Lozzo di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32040
    },
    {
      "Comune": "Lozzolo",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13045
    },
    {
      "Comune": "Lu",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Lubriano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1020
    },
    {
      "Comune": "Lucca",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55100
    },
    {
      "Comune": "Lucca Sicula",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92010
    },
    {
      "Comune": "Lucera",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71036
    },
    {
      "Comune": "Lucignano",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52046
    },
    {
      "Comune": "Lucinasco",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18020
    },
    {
      "Comune": "Lucito",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86030
    },
    {
      "Comune": "Luco dei Marsi",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67056
    },
    {
      "Comune": "Lucoli",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67045
    },
    {
      "Comune": "Lugagnano Val D'Arda",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29018
    },
    {
      "Comune": "Lugnacco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Lugnano in Teverina",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5020
    },
    {
      "Comune": "Lugo",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48022
    },
    {
      "Comune": "Lugo di Vicenza",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "Luino",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21016
    },
    {
      "Comune": "Luisago",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Lula",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Lumarzo",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16024
    },
    {
      "Comune": "Lumezzane",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25065
    },
    {
      "Comune": "Lunamatrona",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9022
    },
    {
      "Comune": "Lunano",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61026
    },
    {
      "Comune": "Lungavilla",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27053
    },
    {
      "Comune": "Lungro",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Luogosano",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Luogosanto",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7020
    },
    {
      "Comune": "Lupara",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86030
    },
    {
      "Comune": "Lurago d'Erba",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22040
    },
    {
      "Comune": "Lurago Marinone",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Lurano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Luras",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7025
    },
    {
      "Comune": "Lurate Caccivio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22075
    },
    {
      "Comune": "Lusciano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Luserna",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38040
    },
    {
      "Comune": "Luserna San Giovanni",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10062
    },
    {
      "Comune": "Lusernetta",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Lusevera",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Lusia",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45020
    },
    {
      "Comune": "Lusiana",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36046
    },
    {
      "Comune": "Lusigliè",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Luson",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Lustra",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84050
    },
    {
      "Comune": "Luvinate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Luzzana",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24069
    },
    {
      "Comune": "Luzzara",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42045
    },
    {
      "Comune": "Luzzi",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Maccagno",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Maccastorna",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26843
    },
    {
      "Comune": "Macchia d'Isernia",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86070
    },
    {
      "Comune": "Macchia Valfortore",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86040
    },
    {
      "Comune": "Macchiagodena",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86096
    },
    {
      "Comune": "Macello",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Macerata",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62100
    },
    {
      "Comune": "Macerata Campania",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81047
    },
    {
      "Comune": "Macerata Feltria",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61023
    },
    {
      "Comune": "Macherio",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20846
    },
    {
      "Comune": "Maclodio",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Macomer",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8015
    },
    {
      "Comune": "Macra",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Macugnaga",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28876
    },
    {
      "Comune": "Maddaloni",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81024
    },
    {
      "Comune": "Madesimo",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23024
    },
    {
      "Comune": "Madignano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Madone",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Madonna del Sasso",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28894
    },
    {
      "Comune": "Maenza",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4010
    },
    {
      "Comune": "Mafalda",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86030
    },
    {
      "Comune": "Magasa",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Magenta",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20013
    },
    {
      "Comune": "Maggiora",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28014
    },
    {
      "Comune": "Magherno",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Magione",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6063
    },
    {
      "Comune": "Magisano",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Magliano Alfieri",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Magliano Alpi",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Magliano de' Marsi",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67062
    },
    {
      "Comune": "Magliano di Tenna",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63832
    },
    {
      "Comune": "Magliano in Toscana",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58051
    },
    {
      "Comune": "Magliano Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Magliano Sabina",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2046
    },
    {
      "Comune": "Magliano Vetere",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84050
    },
    {
      "Comune": "Maglie",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73024
    },
    {
      "Comune": "Magliolo",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17020
    },
    {
      "Comune": "Maglione",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10030
    },
    {
      "Comune": "Magnacavallo",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46020
    },
    {
      "Comune": "Magnago",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20020
    },
    {
      "Comune": "Magnano",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13887
    },
    {
      "Comune": "Magnano in Riviera",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Magomadas",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 8010
    },
    {
      "Comune": "Magrè sulla Strada del Vino",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Magreglio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Maida",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88025
    },
    {
      "Comune": "Maierà",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Maierato",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89843
    },
    {
      "Comune": "Maiolati Spontini",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60030
    },
    {
      "Comune": "Maiolo",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47862
    },
    {
      "Comune": "Maiori",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "Mairago",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26825
    },
    {
      "Comune": "Mairano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Maissana",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19010
    },
    {
      "Comune": "Majano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Malagnino",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Malalbergo",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40051
    },
    {
      "Comune": "Malborghetto Valbruna",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Malcesine",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37018
    },
    {
      "Comune": "Malè",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38027
    },
    {
      "Comune": "Malegno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25053
    },
    {
      "Comune": "Maleo",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26847
    },
    {
      "Comune": "Malesco",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28854
    },
    {
      "Comune": "Maletto",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95035
    },
    {
      "Comune": "Malfa",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98050
    },
    {
      "Comune": "Malgesso",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Malgrate",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23864
    },
    {
      "Comune": "Malito",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87030
    },
    {
      "Comune": "Mallare",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17045
    },
    {
      "Comune": "Malles Venosta",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39024
    },
    {
      "Comune": "Malnate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21046
    },
    {
      "Comune": "Malo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36034
    },
    {
      "Comune": "Malonno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Malosco",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38013
    },
    {
      "Comune": "Maltignano",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63085
    },
    {
      "Comune": "Malvagna",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Malvicino",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15015
    },
    {
      "Comune": "Malvito",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Mammola",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89045
    },
    {
      "Comune": "Mamoiada",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8024
    },
    {
      "Comune": "Manciano",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58014
    },
    {
      "Comune": "Mandanici",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98020
    },
    {
      "Comune": "Mandas",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Mandatoriccio",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "Mandela",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Mandello del Lario",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23826
    },
    {
      "Comune": "Mandello Vitta",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Manduria",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74024
    },
    {
      "Comune": "Manerba del Garda",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Manerbio",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25025
    },
    {
      "Comune": "Manfredonia",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71043
    },
    {
      "Comune": "Mango",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12056
    },
    {
      "Comune": "Mangone",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Maniace",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95030
    },
    {
      "Comune": "Maniago",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33085
    },
    {
      "Comune": "Manocalzati",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Manoppello",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65024
    },
    {
      "Comune": "Mansuè",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Manta",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Mantello",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23016
    },
    {
      "Comune": "Mantova",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46100
    },
    {
      "Comune": "Manzano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33044
    },
    {
      "Comune": "Manziana",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 66
    },
    {
      "Comune": "Mapello",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Mara",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Maracalagonis",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Maranello",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41053
    },
    {
      "Comune": "Marano di Napoli",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80016
    },
    {
      "Comune": "Marano di Valpolicella",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37020
    },
    {
      "Comune": "Marano Equo",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Marano Lagunare",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Marano Marchesato",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Marano Principato",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Marano sul Panaro",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41054
    },
    {
      "Comune": "Marano Ticino",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28040
    },
    {
      "Comune": "Marano Vicentino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36035
    },
    {
      "Comune": "Maranzana",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14040
    },
    {
      "Comune": "Maratea",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85046
    },
    {
      "Comune": "Marcallo con Casone",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Marcaria",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46010
    },
    {
      "Comune": "Marcedusa",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Marcellina",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 10
    },
    {
      "Comune": "Marcellinara",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88044
    },
    {
      "Comune": "Marcetelli",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2020
    },
    {
      "Comune": "Marcheno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25060
    },
    {
      "Comune": "Marchirolo",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Marciana",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57030
    },
    {
      "Comune": "Marciana Marina",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57033
    },
    {
      "Comune": "Marcianise",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81025
    },
    {
      "Comune": "Marciano della Chiana",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52047
    },
    {
      "Comune": "Marcignago",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Marcon",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30020
    },
    {
      "Comune": "Marebbe",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Marene",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Mareno di Piave",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31010
    },
    {
      "Comune": "Marentino",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Maretto",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14018
    },
    {
      "Comune": "Margarita",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Margherita di Savoia",
      "Provincia": "BT",
      "Regione": "PUG",
      "CAP": 76016
    },
    {
      "Comune": "Margno",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23832
    },
    {
      "Comune": "Mariana Mantovana",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46010
    },
    {
      "Comune": "Mariano Comense",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22066
    },
    {
      "Comune": "Mariano del Friuli",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "Marianopoli",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93010
    },
    {
      "Comune": "Mariglianella",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "Marigliano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80034
    },
    {
      "Comune": "Marina di Gioiosa Ionica",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89046
    },
    {
      "Comune": "Marineo",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90035
    },
    {
      "Comune": "Marino",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 47
    },
    {
      "Comune": "Marlengo",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39020
    },
    {
      "Comune": "Marliana",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51010
    },
    {
      "Comune": "Marmentino",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25060
    },
    {
      "Comune": "Marmirolo",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46045
    },
    {
      "Comune": "Marmora",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Marnate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Marone",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25054
    },
    {
      "Comune": "Maropati",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89020
    },
    {
      "Comune": "Marostica",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36063
    },
    {
      "Comune": "Marradi",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50034
    },
    {
      "Comune": "Marrubiu",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9094
    },
    {
      "Comune": "Marsaglia",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Marsala",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91025
    },
    {
      "Comune": "Marsciano",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6055
    },
    {
      "Comune": "Marsico Nuovo",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85052
    },
    {
      "Comune": "Marsicovetere",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Marta",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Martano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73025
    },
    {
      "Comune": "Martellago",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30030
    },
    {
      "Comune": "Martello",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39020
    },
    {
      "Comune": "Martignacco",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33035
    },
    {
      "Comune": "Martignana di Po",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26040
    },
    {
      "Comune": "Martignano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Martina Franca",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74015
    },
    {
      "Comune": "Martinengo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24057
    },
    {
      "Comune": "Martiniana Po",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Martinsicuro",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64014
    },
    {
      "Comune": "Martirano",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Martirano Lombardo",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Martis",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Martone",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Marudo",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26866
    },
    {
      "Comune": "Maruggio",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74020
    },
    {
      "Comune": "Marzabotto",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40043
    },
    {
      "Comune": "Marzano",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Marzano Appio",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81035
    },
    {
      "Comune": "Marzano di Nola",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Marzi",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Marzio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Masainas",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Masate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Mascali",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95016
    },
    {
      "Comune": "Mascalucia",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95030
    },
    {
      "Comune": "Maschito",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85020
    },
    {
      "Comune": "Masciago Primo",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Maser",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31010
    },
    {
      "Comune": "Masera",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28855
    },
    {
      "Comune": "Maserà di Padova",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Maserada sul Piave",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31052
    },
    {
      "Comune": "Masi",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Masi Torello",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44020
    },
    {
      "Comune": "Masio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15024
    },
    {
      "Comune": "Maslianico",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22026
    },
    {
      "Comune": "Mason Vicentino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36064
    },
    {
      "Comune": "Masone",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16010
    },
    {
      "Comune": "Massa",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54100
    },
    {
      "Comune": "Massa d'Albe",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67050
    },
    {
      "Comune": "Massa di Somma",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80040
    },
    {
      "Comune": "Massa e Cozzile",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51010
    },
    {
      "Comune": "Massa Fermana",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63834
    },
    {
      "Comune": "Massa Fiscaglia",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44025
    },
    {
      "Comune": "Massa Lombarda",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48024
    },
    {
      "Comune": "Massa Lubrense",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80061
    },
    {
      "Comune": "Massa Marittima",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58024
    },
    {
      "Comune": "Massa Martana",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6056
    },
    {
      "Comune": "Massafra",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74016
    },
    {
      "Comune": "Massalengo",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26815
    },
    {
      "Comune": "Massanzago",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Massarosa",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55054
    },
    {
      "Comune": "Massazza",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13873
    },
    {
      "Comune": "Massello",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Masserano",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13866
    },
    {
      "Comune": "Massignano",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63061
    },
    {
      "Comune": "Massimeno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38086
    },
    {
      "Comune": "Massimino",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 12071
    },
    {
      "Comune": "Massino Visconti",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28040
    },
    {
      "Comune": "Massiola",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28895
    },
    {
      "Comune": "Masullas",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Matelica",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62024
    },
    {
      "Comune": "Matera",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75100
    },
    {
      "Comune": "Mathi",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10075
    },
    {
      "Comune": "Matino",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73046
    },
    {
      "Comune": "Matrice",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86030
    },
    {
      "Comune": "Mattie",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Mattinata",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71030
    },
    {
      "Comune": "Mazara del Vallo",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91026
    },
    {
      "Comune": "Mazzano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Mazzano Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Mazzarino",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93013
    },
    {
      "Comune": "Mazzarrà Sant'Andrea",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98056
    },
    {
      "Comune": "Mazzarrone",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95040
    },
    {
      "Comune": "Mazzè",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10035
    },
    {
      "Comune": "Mazzin",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Mazzo di Valtellina",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23030
    },
    {
      "Comune": "Meana di Susa",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Meana Sardo",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Meda",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20821
    },
    {
      "Comune": "Mede",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27035
    },
    {
      "Comune": "Medea",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34076
    },
    {
      "Comune": "Medesano",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43014
    },
    {
      "Comune": "Medicina",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40059
    },
    {
      "Comune": "Mediglia",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Medolago",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Medole",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46046
    },
    {
      "Comune": "Medolla",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41036
    },
    {
      "Comune": "Meduna di Livenza",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Meduno",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33092
    },
    {
      "Comune": "Megliadino San Fidenzio",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Megliadino San Vitale",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Meina",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28046
    },
    {
      "Comune": "Mel",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32026
    },
    {
      "Comune": "Melara",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45037
    },
    {
      "Comune": "Melazzo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Meldola",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47014
    },
    {
      "Comune": "Mele",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16010
    },
    {
      "Comune": "Melegnano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20077
    },
    {
      "Comune": "Melendugno",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73026
    },
    {
      "Comune": "Meleti",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26843
    },
    {
      "Comune": "Melfi",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85025
    },
    {
      "Comune": "Melicuccà",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89020
    },
    {
      "Comune": "Melicucco",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89020
    },
    {
      "Comune": "Melilli",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96010
    },
    {
      "Comune": "Melissa",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88814
    },
    {
      "Comune": "Melissano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73040
    },
    {
      "Comune": "Melito di Napoli",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80017
    },
    {
      "Comune": "Melito di Porto Salvo",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89063
    },
    {
      "Comune": "Melito Irpino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Melizzano",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Melle",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Mello",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Melpignano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Meltina",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "Melzo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20066
    },
    {
      "Comune": "Menaggio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22017
    },
    {
      "Comune": "Menarola",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Menconico",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Mendatica",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18025
    },
    {
      "Comune": "Mendicino",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Menfi",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92013
    },
    {
      "Comune": "Mentana",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 13
    },
    {
      "Comune": "Meolo",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30020
    },
    {
      "Comune": "Merana",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Merano",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39012
    },
    {
      "Comune": "Merate",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23807
    },
    {
      "Comune": "Mercallo",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Mercatello sul Metauro",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61040
    },
    {
      "Comune": "Mercatino Conca",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61013
    },
    {
      "Comune": "Mercato San Severino",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84085
    },
    {
      "Comune": "Mercato Saraceno",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47025
    },
    {
      "Comune": "Mercenasco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Mercogliano",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83013
    },
    {
      "Comune": "Mereto di Tomba",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33036
    },
    {
      "Comune": "Mergo",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60030
    },
    {
      "Comune": "Mergozzo",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28802
    },
    {
      "Comune": "Merì",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98040
    },
    {
      "Comune": "Merlara",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Merlino",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26833
    },
    {
      "Comune": "Merone",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22046
    },
    {
      "Comune": "Mesagne",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72023
    },
    {
      "Comune": "Mese",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Mesenzana",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Mesero",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Mesola",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44026
    },
    {
      "Comune": "Mesoraca",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88838
    },
    {
      "Comune": "Messina",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": "981xx"
    },
    {
      "Comune": "Mestrino",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35035
    },
    {
      "Comune": "Meta",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80062
    },
    {
      "Comune": "Meugliano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Mezzago",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20883
    },
    {
      "Comune": "Mezzana",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38020
    },
    {
      "Comune": "Mezzana Bigli",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Mezzana Mortigliengo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13831
    },
    {
      "Comune": "Mezzana Rabattone",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Mezzane di Sotto",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37030
    },
    {
      "Comune": "Mezzanego",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16046
    },
    {
      "Comune": "Mezzani",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43055
    },
    {
      "Comune": "Mezzanino",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Mezzano",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Mezzegra",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Mezzenile",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Mezzocorona",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38016
    },
    {
      "Comune": "Mezzojuso",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Mezzoldo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Mezzolombardo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38017
    },
    {
      "Comune": "Mezzomerico",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28040
    },
    {
      "Comune": "Miagliano",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13816
    },
    {
      "Comune": "Miane",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31050
    },
    {
      "Comune": "Miasino",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Miazzina",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28817
    },
    {
      "Comune": "Micigliano",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2010
    },
    {
      "Comune": "Miggiano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73035
    },
    {
      "Comune": "Miglianico",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Migliarino",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44027
    },
    {
      "Comune": "Migliaro",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44020
    },
    {
      "Comune": "Miglierina",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Miglionico",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75010
    },
    {
      "Comune": "Mignanego",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16018
    },
    {
      "Comune": "Mignano Monte Lungo",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81049
    },
    {
      "Comune": "Milano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": "201xx"
    },
    {
      "Comune": "Milazzo",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98057
    },
    {
      "Comune": "Milena",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93010
    },
    {
      "Comune": "Mileto",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89852
    },
    {
      "Comune": "Milis",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Militello in Val di Catania",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95043
    },
    {
      "Comune": "Militello Rosmarino",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Millesimo",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17017
    },
    {
      "Comune": "Milo",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95010
    },
    {
      "Comune": "Milzano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Mineo",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95044
    },
    {
      "Comune": "Minerbe",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37046
    },
    {
      "Comune": "Minerbio",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40061
    },
    {
      "Comune": "Minervino di Lecce",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73027
    },
    {
      "Comune": "Minervino Murge",
      "Provincia": "BT",
      "Regione": "PUG",
      "CAP": 76013
    },
    {
      "Comune": "Minori",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "Minturno",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4026
    },
    {
      "Comune": "Minucciano",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55034
    },
    {
      "Comune": "Mioglia",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17040
    },
    {
      "Comune": "Mira",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30034
    },
    {
      "Comune": "Mirabella Eclano",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83036
    },
    {
      "Comune": "Mirabella Imbaccari",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95040
    },
    {
      "Comune": "Mirabello",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44043
    },
    {
      "Comune": "Mirabello Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Mirabello Sannitico",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86010
    },
    {
      "Comune": "Miradolo Terme",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Miranda",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86080
    },
    {
      "Comune": "Mirandola",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41037
    },
    {
      "Comune": "Mirano",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30035
    },
    {
      "Comune": "Mirto",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Misano Adriatico",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47843
    },
    {
      "Comune": "Misano di Gera d'Adda",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Misilmeri",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90036
    },
    {
      "Comune": "Misinto",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20826
    },
    {
      "Comune": "Missaglia",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23873
    },
    {
      "Comune": "Missanello",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Misterbianco",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95045
    },
    {
      "Comune": "Mistretta",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98073
    },
    {
      "Comune": "Moasca",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14050
    },
    {
      "Comune": "Moconesi",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16047
    },
    {
      "Comune": "Modena",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": "4112x"
    },
    {
      "Comune": "Modica",
      "Provincia": "RG",
      "Regione": "SIC",
      "CAP": 97015
    },
    {
      "Comune": "Modigliana",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47015
    },
    {
      "Comune": "Modolo",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 8019
    },
    {
      "Comune": "Modugno",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70026
    },
    {
      "Comune": "Moena",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38035
    },
    {
      "Comune": "Moggio",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23817
    },
    {
      "Comune": "Moggio Udinese",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33015
    },
    {
      "Comune": "Moglia",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46024
    },
    {
      "Comune": "Mogliano",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62010
    },
    {
      "Comune": "Mogliano Veneto",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31021
    },
    {
      "Comune": "Mogorella",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Mogoro",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9095
    },
    {
      "Comune": "Moiano",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82010
    },
    {
      "Comune": "Moimacco",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Moio Alcantara",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Moio de' Calvi",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Moio della Civitella",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84060
    },
    {
      "Comune": "Moiola",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Mola di Bari",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70042
    },
    {
      "Comune": "Molare",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15074
    },
    {
      "Comune": "Molazzana",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55020
    },
    {
      "Comune": "Molfetta",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70056
    },
    {
      "Comune": "Molina Aterno",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Molinara",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Molinella",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40062
    },
    {
      "Comune": "Molini di Triora",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18010
    },
    {
      "Comune": "Molino dei Torti",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Molise",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86020
    },
    {
      "Comune": "Moliterno",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85047
    },
    {
      "Comune": "Mollia",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13020
    },
    {
      "Comune": "Molochio",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89010
    },
    {
      "Comune": "Molteno",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23847
    },
    {
      "Comune": "Moltrasio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Molvena",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36060
    },
    {
      "Comune": "Molveno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38018
    },
    {
      "Comune": "Mombaldone",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14050
    },
    {
      "Comune": "Mombarcaro",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Mombaroccio",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61024
    },
    {
      "Comune": "Mombaruzzo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14046
    },
    {
      "Comune": "Mombasiglio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Mombello di Torino",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Mombello Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Mombercelli",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14047
    },
    {
      "Comune": "Momo",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28015
    },
    {
      "Comune": "Mompantero",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10059
    },
    {
      "Comune": "Mompeo",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Momperone",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Monacilioni",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86040
    },
    {
      "Comune": "Monale",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14013
    },
    {
      "Comune": "Monasterace",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Monastero Bormida",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14058
    },
    {
      "Comune": "Monastero di Lanzo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Monastero di Vasco",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12080
    },
    {
      "Comune": "Monasterolo Casotto",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12080
    },
    {
      "Comune": "Monasterolo del Castello",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Monasterolo di Savigliano",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Monastier di Treviso",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31050
    },
    {
      "Comune": "Monastir",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9023
    },
    {
      "Comune": "Moncalieri",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10024
    },
    {
      "Comune": "Moncalvo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14036
    },
    {
      "Comune": "Moncenisio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Moncestino",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Monchiero",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Monchio delle Corti",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43010
    },
    {
      "Comune": "Monclassico",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38020
    },
    {
      "Comune": "Moncrivello",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Moncucco Torinese",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14024
    },
    {
      "Comune": "Mondaino",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47836
    },
    {
      "Comune": "Mondavio",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61040
    },
    {
      "Comune": "Mondolfo",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61037
    },
    {
      "Comune": "Mondovì",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12084
    },
    {
      "Comune": "Mondragone",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81034
    },
    {
      "Comune": "Moneglia",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16030
    },
    {
      "Comune": "Monesiglio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12077
    },
    {
      "Comune": "Monfalcone",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34074
    },
    {
      "Comune": "Monforte d'Alba",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12065
    },
    {
      "Comune": "Monforte San Giorgio",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98041
    },
    {
      "Comune": "Monfumo",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31010
    },
    {
      "Comune": "Mongardino",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14040
    },
    {
      "Comune": "Monghidoro",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40063
    },
    {
      "Comune": "Mongiana",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89823
    },
    {
      "Comune": "Mongiardino Ligure",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Mongiuffi Melia",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Mongrando",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13888
    },
    {
      "Comune": "Mongrassano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Monguelfo-Tesido",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39035
    },
    {
      "Comune": "Monguzzo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22040
    },
    {
      "Comune": "Moniga del Garda",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Monleale",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15059
    },
    {
      "Comune": "Monno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Monopoli",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70043
    },
    {
      "Comune": "Monreale",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90046
    },
    {
      "Comune": "Monrupino",
      "Provincia": "TS",
      "Regione": "FVG",
      "CAP": 34016
    },
    {
      "Comune": "Monsampietro Morico",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63842
    },
    {
      "Comune": "Monsampolo del Tronto",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63077
    },
    {
      "Comune": "Monsano",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60030
    },
    {
      "Comune": "Monselice",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35043
    },
    {
      "Comune": "Monserrato",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9042
    },
    {
      "Comune": "Monsummano Terme",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51015
    },
    {
      "Comune": "Montà",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12046
    },
    {
      "Comune": "Montabone",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14040
    },
    {
      "Comune": "Montacuto",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Montafia",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14014
    },
    {
      "Comune": "Montagano",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86023
    },
    {
      "Comune": "Montagna",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Montagna in Valtellina",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Montagnana",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35044
    },
    {
      "Comune": "Montagnareale",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98060
    },
    {
      "Comune": "Montagne",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38070
    },
    {
      "Comune": "Montaguto",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Montaione",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50050
    },
    {
      "Comune": "Montalbano Elicona",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98065
    },
    {
      "Comune": "Montalbano Jonico",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75023
    },
    {
      "Comune": "Montalcino",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53024
    },
    {
      "Comune": "Montaldeo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Montaldo Bormida",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Montaldo di Mondovì",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12080
    },
    {
      "Comune": "Montaldo Roero",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Montaldo Scarampi",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14048
    },
    {
      "Comune": "Montaldo Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Montale",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51037
    },
    {
      "Comune": "Montalenghe",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Montallegro",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92010
    },
    {
      "Comune": "Montalto delle Marche",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63068
    },
    {
      "Comune": "Montalto di Castro",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1014
    },
    {
      "Comune": "Montalto Dora",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10016
    },
    {
      "Comune": "Montalto Ligure",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18010
    },
    {
      "Comune": "Montalto Pavese",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Montalto Uffugo",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87046
    },
    {
      "Comune": "Montanaro",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10017
    },
    {
      "Comune": "Montanaso Lombardo",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26836
    },
    {
      "Comune": "Montanera",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Montano Antilia",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84060
    },
    {
      "Comune": "Montano Lucino",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Montappone",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63835
    },
    {
      "Comune": "Montaquila",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86070
    },
    {
      "Comune": "Montasola",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Montauro",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Montazzoli",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66030
    },
    {
      "Comune": "Monte Argentario",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58019
    },
    {
      "Comune": "Monte Castello di Vibio",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6057
    },
    {
      "Comune": "Monte Cavallo",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62036
    },
    {
      "Comune": "Monte Cerignone",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61010
    },
    {
      "Comune": "Monte Colombo",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47854
    },
    {
      "Comune": "Monte Compatri",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 40
    },
    {
      "Comune": "Monte Cremasco",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Monte di Malo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "Monte di Procida",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80070
    },
    {
      "Comune": "Monte Giberto",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63846
    },
    {
      "Comune": "Monte Grimano Terme",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61010
    },
    {
      "Comune": "Monte Isola",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Monte Marenzo",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23804
    },
    {
      "Comune": "Monte Porzio",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61040
    },
    {
      "Comune": "Monte Porzio Catone",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 40
    },
    {
      "Comune": "Monte Rinaldo",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63852
    },
    {
      "Comune": "Monte Roberto",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60030
    },
    {
      "Comune": "Monte Romano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Monte San Biagio",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4020
    },
    {
      "Comune": "Monte San Giacomo",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "Monte San Giovanni Campano",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3025
    },
    {
      "Comune": "Monte San Giovanni in Sabina",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Monte San Giusto",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62015
    },
    {
      "Comune": "Monte San Martino",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62020
    },
    {
      "Comune": "Monte San Pietrangeli",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63815
    },
    {
      "Comune": "Monte San Pietro",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40050
    },
    {
      "Comune": "Monte San Savino",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52048
    },
    {
      "Comune": "Monte San Vito",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60037
    },
    {
      "Comune": "Monte Santa Maria Tiberina",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6010
    },
    {
      "Comune": "Monte Sant'Angelo",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71037
    },
    {
      "Comune": "Monte Urano",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63813
    },
    {
      "Comune": "Monte Vidon Combatte",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63847
    },
    {
      "Comune": "Monte Vidon Corrado",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63836
    },
    {
      "Comune": "Montebello della Battaglia",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27054
    },
    {
      "Comune": "Montebello di Bertona",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Montebello Ionico",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89064
    },
    {
      "Comune": "Montebello sul Sangro",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Montebello Vicentino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36054
    },
    {
      "Comune": "Montebelluna",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31044
    },
    {
      "Comune": "Montebruno",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16025
    },
    {
      "Comune": "Montebuono",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Montecalvo in Foglia",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61020
    },
    {
      "Comune": "Montecalvo Irpino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83037
    },
    {
      "Comune": "Montecalvo Versiggia",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27047
    },
    {
      "Comune": "Montecarlo",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55015
    },
    {
      "Comune": "Montecarotto",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60036
    },
    {
      "Comune": "Montecassiano",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62010
    },
    {
      "Comune": "Montecastello",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Montecastrilli",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5026
    },
    {
      "Comune": "Montecatini Val di Cecina",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56040
    },
    {
      "Comune": "Montecatini-Terme",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51016
    },
    {
      "Comune": "Montecchia di Crosara",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37030
    },
    {
      "Comune": "Montecchio",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5020
    },
    {
      "Comune": "Montecchio Emilia",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42027
    },
    {
      "Comune": "Montecchio Maggiore",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36075
    },
    {
      "Comune": "Montecchio Precalcino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "Montechiaro d'Acqui",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Montechiaro d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14025
    },
    {
      "Comune": "Montechiarugolo",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43022
    },
    {
      "Comune": "Monteciccardo",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61024
    },
    {
      "Comune": "Montecilfone",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86032
    },
    {
      "Comune": "Montecopiolo",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61014
    },
    {
      "Comune": "Montecorice",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84060
    },
    {
      "Comune": "Montecorvino Pugliano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84090
    },
    {
      "Comune": "Montecorvino Rovella",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84096
    },
    {
      "Comune": "Montecosaro",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62010
    },
    {
      "Comune": "Montecrestese",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28864
    },
    {
      "Comune": "Montecreto",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41025
    },
    {
      "Comune": "Montedinove",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63069
    },
    {
      "Comune": "Montedoro",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93010
    },
    {
      "Comune": "Montefalcione",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Montefalco",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6036
    },
    {
      "Comune": "Montefalcone Appennino",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63855
    },
    {
      "Comune": "Montefalcone di Val Fortore",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82025
    },
    {
      "Comune": "Montefalcone nel Sannio",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86033
    },
    {
      "Comune": "Montefano",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62010
    },
    {
      "Comune": "Montefelcino",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61030
    },
    {
      "Comune": "Monteferrante",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Montefiascone",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1027
    },
    {
      "Comune": "Montefino",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64030
    },
    {
      "Comune": "Montefiore Conca",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47834
    },
    {
      "Comune": "Montefiore dell'Aso",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63062
    },
    {
      "Comune": "Montefiorino",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41045
    },
    {
      "Comune": "Monteflavio",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 10
    },
    {
      "Comune": "Monteforte Cilento",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84060
    },
    {
      "Comune": "Monteforte d'Alpone",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37032
    },
    {
      "Comune": "Monteforte Irpino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83024
    },
    {
      "Comune": "Montefortino",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63858
    },
    {
      "Comune": "Montefranco",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5030
    },
    {
      "Comune": "Montefredane",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Montefusco",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Montegabbione",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5010
    },
    {
      "Comune": "Montegalda",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36047
    },
    {
      "Comune": "Montegaldella",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36047
    },
    {
      "Comune": "Montegallo",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63094
    },
    {
      "Comune": "Montegioco",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Montegiordano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87070
    },
    {
      "Comune": "Montegiorgio",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63833
    },
    {
      "Comune": "Montegranaro",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63812
    },
    {
      "Comune": "Montegridolfo",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47837
    },
    {
      "Comune": "Montegrino Valtravaglia",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Montegrosso d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14048
    },
    {
      "Comune": "Montegrosso Pian Latte",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18025
    },
    {
      "Comune": "Montegrotto Terme",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35036
    },
    {
      "Comune": "Monteiasi",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74020
    },
    {
      "Comune": "Montelabbate",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61025
    },
    {
      "Comune": "Montelanico",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "Montelapiano",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Monteleone di Fermo",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63841
    },
    {
      "Comune": "Monteleone di Puglia",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71020
    },
    {
      "Comune": "Monteleone di Spoleto",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6045
    },
    {
      "Comune": "Monteleone d'Orvieto",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5017
    },
    {
      "Comune": "Monteleone Rocca Doria",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Monteleone Sabino",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2033
    },
    {
      "Comune": "Montelepre",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90040
    },
    {
      "Comune": "Montelibretti",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 10
    },
    {
      "Comune": "Montella",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83048
    },
    {
      "Comune": "Montello",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Montelongo",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86040
    },
    {
      "Comune": "Montelparo",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63853
    },
    {
      "Comune": "Montelupo Albese",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Montelupo Fiorentino",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50056
    },
    {
      "Comune": "Montelupone",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62010
    },
    {
      "Comune": "Montemaggiore al Metauro",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61030
    },
    {
      "Comune": "Montemaggiore Belsito",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Montemagno",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14030
    },
    {
      "Comune": "Montemale di Cuneo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12025
    },
    {
      "Comune": "Montemarano",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Montemarciano",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60018
    },
    {
      "Comune": "Montemarzino",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Montemesola",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74020
    },
    {
      "Comune": "Montemezzo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Montemignaio",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52010
    },
    {
      "Comune": "Montemiletto",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83038
    },
    {
      "Comune": "Montemilone",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85020
    },
    {
      "Comune": "Montemitro",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86030
    },
    {
      "Comune": "Montemonaco",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63088
    },
    {
      "Comune": "Montemurlo",
      "Provincia": "PO",
      "Regione": "TOS",
      "CAP": 59013
    },
    {
      "Comune": "Montemurro",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85053
    },
    {
      "Comune": "Montenars",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Montenero di Bisaccia",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86036
    },
    {
      "Comune": "Montenero Sabino",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Montenero Val Cocchiara",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86080
    },
    {
      "Comune": "Montenerodomo",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Monteodorisio",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Montepaone",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Monteparano",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74020
    },
    {
      "Comune": "Monteprandone",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63076
    },
    {
      "Comune": "Montepulciano",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53045
    },
    {
      "Comune": "Monterado",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60010
    },
    {
      "Comune": "Monterchi",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52035
    },
    {
      "Comune": "Montereale",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67015
    },
    {
      "Comune": "Montereale Valcellina",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33086
    },
    {
      "Comune": "Monterenzio",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40050
    },
    {
      "Comune": "Monteriggioni",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53035
    },
    {
      "Comune": "Monteroduni",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86075
    },
    {
      "Comune": "Monteroni d'Arbia",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53014
    },
    {
      "Comune": "Monteroni di Lecce",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73047
    },
    {
      "Comune": "Monterosi",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1030
    },
    {
      "Comune": "Monterosso al Mare",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19016
    },
    {
      "Comune": "Monterosso Almo",
      "Provincia": "RG",
      "Regione": "SIC",
      "CAP": 97010
    },
    {
      "Comune": "Monterosso Calabro",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89819
    },
    {
      "Comune": "Monterosso Grana",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Monterotondo",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 15
    },
    {
      "Comune": "Monterotondo Marittimo",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58025
    },
    {
      "Comune": "Monterubbiano",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63825
    },
    {
      "Comune": "Montesano Salentino",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73030
    },
    {
      "Comune": "Montesano sulla Marcellana",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84033
    },
    {
      "Comune": "Montesarchio",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82016
    },
    {
      "Comune": "Montescaglioso",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75024
    },
    {
      "Comune": "Montescano",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Montescheno",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28843
    },
    {
      "Comune": "Montescudaio",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56040
    },
    {
      "Comune": "Montescudo",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47854
    },
    {
      "Comune": "Montese",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41055
    },
    {
      "Comune": "Montesegale",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27052
    },
    {
      "Comune": "Montesilvano",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65015
    },
    {
      "Comune": "Montespertoli",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50025
    },
    {
      "Comune": "Monteu da Po",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Monteu Roero",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Montevago",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92010
    },
    {
      "Comune": "Montevarchi",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52025
    },
    {
      "Comune": "Montevecchia",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23874
    },
    {
      "Comune": "Monteveglio",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40050
    },
    {
      "Comune": "Monteverde",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83049
    },
    {
      "Comune": "Monteverdi Marittimo",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56040
    },
    {
      "Comune": "Monteviale",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36050
    },
    {
      "Comune": "Montezemolo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Monti",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7020
    },
    {
      "Comune": "Montiano",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47020
    },
    {
      "Comune": "Monticelli Brusati",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Monticelli d'Ongina",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Monticelli Pavese",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Monticello Brianza",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23876
    },
    {
      "Comune": "Monticello Conte Otto",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36010
    },
    {
      "Comune": "Monticello d'Alba",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12066
    },
    {
      "Comune": "Montichiari",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25018
    },
    {
      "Comune": "Monticiano",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53015
    },
    {
      "Comune": "Montieri",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58026
    },
    {
      "Comune": "Montiglio Monferrato",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14026
    },
    {
      "Comune": "Montignoso",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54038
    },
    {
      "Comune": "Montirone",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25010
    },
    {
      "Comune": "Montjovet",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Montodine",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Montoggio",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16026
    },
    {
      "Comune": "Montone",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6014
    },
    {
      "Comune": "Montopoli di Sabina",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2034
    },
    {
      "Comune": "Montopoli in Val d'Arno",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56020
    },
    {
      "Comune": "Montorfano",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Montorio al Vomano",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64046
    },
    {
      "Comune": "Montorio nei Frentani",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86040
    },
    {
      "Comune": "Montorio Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 10
    },
    {
      "Comune": "Montoro Inferiore",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83025
    },
    {
      "Comune": "Montoro Superiore",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83026
    },
    {
      "Comune": "Montorso Vicentino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36050
    },
    {
      "Comune": "Montottone",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63843
    },
    {
      "Comune": "Montresta",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 8010
    },
    {
      "Comune": "Montù Beccaria",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Monvalle",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Monza",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20900
    },
    {
      "Comune": "Monzambano",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46040
    },
    {
      "Comune": "Monzuno",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40036
    },
    {
      "Comune": "Morano Calabro",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87016
    },
    {
      "Comune": "Morano sul Po",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15025
    },
    {
      "Comune": "Moransengo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14023
    },
    {
      "Comune": "Moraro",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "Morazzone",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Morbegno",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23017
    },
    {
      "Comune": "Morbello",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Morciano di Leuca",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73040
    },
    {
      "Comune": "Morciano di Romagna",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47833
    },
    {
      "Comune": "Morcone",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82026
    },
    {
      "Comune": "Mordano",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40027
    },
    {
      "Comune": "Morengo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Mores",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7013
    },
    {
      "Comune": "Moresco",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63826
    },
    {
      "Comune": "Moretta",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12033
    },
    {
      "Comune": "Morfasso",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29020
    },
    {
      "Comune": "Morgano",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31050
    },
    {
      "Comune": "Morgex",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11017
    },
    {
      "Comune": "Morgongiori",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Mori",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38065
    },
    {
      "Comune": "Moriago della Battaglia",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31010
    },
    {
      "Comune": "Moricone",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 10
    },
    {
      "Comune": "Morigerati",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "Morimondo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20081
    },
    {
      "Comune": "Morino",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67050
    },
    {
      "Comune": "Moriondo Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Morlupo",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 67
    },
    {
      "Comune": "Mormanno",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87026
    },
    {
      "Comune": "Mornago",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Mornese",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15075
    },
    {
      "Comune": "Mornico al Serio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Mornico Losana",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Morolo",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3017
    },
    {
      "Comune": "Morozzo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Morra De Sanctis",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83040
    },
    {
      "Comune": "Morro d'Alba",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60030
    },
    {
      "Comune": "Morro d'Oro",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64020
    },
    {
      "Comune": "Morro Reatino",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2010
    },
    {
      "Comune": "Morrone del Sannio",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86040
    },
    {
      "Comune": "Morrovalle",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62010
    },
    {
      "Comune": "Morsano al Tagliamento",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33075
    },
    {
      "Comune": "Morsasco",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Mortara",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27036
    },
    {
      "Comune": "Mortegliano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Morterone",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23811
    },
    {
      "Comune": "Moruzzo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Moscazzano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Moschiano",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Mosciano Sant'Angelo",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64023
    },
    {
      "Comune": "Moscufo",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Moso in Passiria",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39013
    },
    {
      "Comune": "Mossa",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "Mossano",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36024
    },
    {
      "Comune": "Mosso",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13822
    },
    {
      "Comune": "Motta Baluffi",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26045
    },
    {
      "Comune": "Motta Camastra",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Motta d'Affermo",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Motta de' Conti",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13010
    },
    {
      "Comune": "Motta di Livenza",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31045
    },
    {
      "Comune": "Motta Montecorvino",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71030
    },
    {
      "Comune": "Motta San Giovanni",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89065
    },
    {
      "Comune": "Motta Santa Lucia",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Motta Sant'Anastasia",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95040
    },
    {
      "Comune": "Motta Visconti",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20086
    },
    {
      "Comune": "Mottafollone",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Mottalciata",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13874
    },
    {
      "Comune": "Motteggiana",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46020
    },
    {
      "Comune": "Mottola",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74017
    },
    {
      "Comune": "Mozzagrogna",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66030
    },
    {
      "Comune": "Mozzanica",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Mozzate",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22076
    },
    {
      "Comune": "Mozzecane",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37060
    },
    {
      "Comune": "Mozzo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Muccia",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62034
    },
    {
      "Comune": "Muggia",
      "Provincia": "TS",
      "Regione": "FVG",
      "CAP": 34015
    },
    {
      "Comune": "Muggiò",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20835
    },
    {
      "Comune": "Mugnano del Cardinale",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83027
    },
    {
      "Comune": "Mugnano di Napoli",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80018
    },
    {
      "Comune": "Mulazzano",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26837
    },
    {
      "Comune": "Mulazzo",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54026
    },
    {
      "Comune": "Mura",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25070
    },
    {
      "Comune": "Muravera",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9043
    },
    {
      "Comune": "Murazzano",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Murello",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Murialdo",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17013
    },
    {
      "Comune": "Murisengo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Murlo",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53016
    },
    {
      "Comune": "Muro Leccese",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73036
    },
    {
      "Comune": "Muro Lucano",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85054
    },
    {
      "Comune": "Muros",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Muscoline",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Musei",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Musile di Piave",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30024
    },
    {
      "Comune": "Musso",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Mussolente",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36065
    },
    {
      "Comune": "Mussomeli",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93014
    },
    {
      "Comune": "Muzzana del Turgnano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33055
    },
    {
      "Comune": "Muzzano",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13895
    },
    {
      "Comune": "Nago-Torbole",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38069
    },
    {
      "Comune": "Nalles",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "Nanno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Nanto",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36024
    },
    {
      "Comune": "Napoli",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": "801xx"
    },
    {
      "Comune": "Narbolia",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Narcao",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Nardò",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73048
    },
    {
      "Comune": "Nardodipace",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89824
    },
    {
      "Comune": "Narni",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5035
    },
    {
      "Comune": "Naro",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92028
    },
    {
      "Comune": "Narzole",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12068
    },
    {
      "Comune": "Nasino",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17030
    },
    {
      "Comune": "Naso",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98074
    },
    {
      "Comune": "Naturno",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39025
    },
    {
      "Comune": "Nave",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25075
    },
    {
      "Comune": "Nave San Rocco",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Navelli",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Naz-Sciaves",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Nazzano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Ne",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16040
    },
    {
      "Comune": "Nebbiuno",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Negrar",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37024
    },
    {
      "Comune": "Neirone",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16040
    },
    {
      "Comune": "Neive",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12052
    },
    {
      "Comune": "Nembro",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24027
    },
    {
      "Comune": "Nemi",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 40
    },
    {
      "Comune": "Nemoli",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85040
    },
    {
      "Comune": "Neoneli",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Nepi",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1036
    },
    {
      "Comune": "Nereto",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64015
    },
    {
      "Comune": "Nerola",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 17
    },
    {
      "Comune": "Nervesa della Battaglia",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Nerviano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20014
    },
    {
      "Comune": "Nespolo",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2020
    },
    {
      "Comune": "Nesso",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Netro",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13896
    },
    {
      "Comune": "Nettuno",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 48
    },
    {
      "Comune": "Neviano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73040
    },
    {
      "Comune": "Neviano degli Arduini",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43024
    },
    {
      "Comune": "Neviglie",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Niardo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Nibbiano",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Nibbiola",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28070
    },
    {
      "Comune": "Nibionno",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23895
    },
    {
      "Comune": "Nichelino",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10042
    },
    {
      "Comune": "Nicolosi",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95030
    },
    {
      "Comune": "Nicorvo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Nicosia",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94014
    },
    {
      "Comune": "Nicotera",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89844
    },
    {
      "Comune": "Niella Belbo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Niella Tanaro",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Nimis",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33045
    },
    {
      "Comune": "Niscemi",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93015
    },
    {
      "Comune": "Nissoria",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94010
    },
    {
      "Comune": "Nizza di Sicilia",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98026
    },
    {
      "Comune": "Nizza Monferrato",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14049
    },
    {
      "Comune": "Noale",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30033
    },
    {
      "Comune": "Noasca",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Nocara",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87070
    },
    {
      "Comune": "Nocciano",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Nocera Inferiore",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84014
    },
    {
      "Comune": "Nocera Superiore",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84015
    },
    {
      "Comune": "Nocera Terinese",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88047
    },
    {
      "Comune": "Nocera Umbra",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6025
    },
    {
      "Comune": "Noceto",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43015
    },
    {
      "Comune": "Noci",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70015
    },
    {
      "Comune": "Nociglia",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Noepoli",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85035
    },
    {
      "Comune": "Nogara",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37054
    },
    {
      "Comune": "Nogaredo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Nogarole Rocca",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37060
    },
    {
      "Comune": "Nogarole Vicentino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36070
    },
    {
      "Comune": "Noicàttaro",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70016
    },
    {
      "Comune": "Nola",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80035
    },
    {
      "Comune": "Nole",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10076
    },
    {
      "Comune": "Noli",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17026
    },
    {
      "Comune": "Nomaglio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Nomi",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Nonantola",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41015
    },
    {
      "Comune": "None",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Nonio",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28891
    },
    {
      "Comune": "Noragugume",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8010
    },
    {
      "Comune": "Norbello",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Norcia",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6046
    },
    {
      "Comune": "Norma",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4010
    },
    {
      "Comune": "Nosate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20020
    },
    {
      "Comune": "Notaresco",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64024
    },
    {
      "Comune": "Noto",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96017
    },
    {
      "Comune": "Nova Levante",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39056
    },
    {
      "Comune": "Nova Milanese",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20834
    },
    {
      "Comune": "Nova Ponente",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39050
    },
    {
      "Comune": "Nova Siri",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75020
    },
    {
      "Comune": "Novafeltria",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47863
    },
    {
      "Comune": "Novaledo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Novalesa",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Novara",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28100
    },
    {
      "Comune": "Novara di Sicilia",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98058
    },
    {
      "Comune": "Novate Mezzola",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23025
    },
    {
      "Comune": "Novate Milanese",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20026
    },
    {
      "Comune": "Nove",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36055
    },
    {
      "Comune": "Novedrate",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22060
    },
    {
      "Comune": "Novellara",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42017
    },
    {
      "Comune": "Novello",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Noventa di Piave",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30020
    },
    {
      "Comune": "Noventa Padovana",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35027
    },
    {
      "Comune": "Noventa Vicentina",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36025
    },
    {
      "Comune": "Novi di Modena",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41016
    },
    {
      "Comune": "Novi Ligure",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15067
    },
    {
      "Comune": "Novi Velia",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84060
    },
    {
      "Comune": "Noviglio",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20082
    },
    {
      "Comune": "Novoli",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73051
    },
    {
      "Comune": "Nucetto",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Nughedu San Nicolò",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Nughedu Santa Vittoria",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Nule",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Nulvi",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7032
    },
    {
      "Comune": "Numana",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60026
    },
    {
      "Comune": "Nuoro",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8100
    },
    {
      "Comune": "Nurachi",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Nuragus",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Nurallao",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Nuraminis",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9024
    },
    {
      "Comune": "Nureci",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Nurri",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8035
    },
    {
      "Comune": "Nus",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Nusco",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83051
    },
    {
      "Comune": "Nuvolento",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Nuvolera",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Nuxis",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Occhieppo Inferiore",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13897
    },
    {
      "Comune": "Occhieppo Superiore",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13898
    },
    {
      "Comune": "Occhiobello",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "Occimiano",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Ocre",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67040
    },
    {
      "Comune": "Odalengo Grande",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Odalengo Piccolo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Oderzo",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31046
    },
    {
      "Comune": "Odolo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25076
    },
    {
      "Comune": "Ofena",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67025
    },
    {
      "Comune": "Offagna",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60020
    },
    {
      "Comune": "Offanengo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Offida",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63073
    },
    {
      "Comune": "Offlaga",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Oggebbio",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28824
    },
    {
      "Comune": "Oggiona con Santo Stefano",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Oggiono",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23848
    },
    {
      "Comune": "Oglianico",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Ogliastro Cilento",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84061
    },
    {
      "Comune": "Olbia",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7026
    },
    {
      "Comune": "Olcenengo",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13047
    },
    {
      "Comune": "Oldenico",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "Oleggio",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28047
    },
    {
      "Comune": "Oleggio Castello",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28040
    },
    {
      "Comune": "Olevano di Lomellina",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Olevano Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 35
    },
    {
      "Comune": "Olevano sul Tusciano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84062
    },
    {
      "Comune": "Olgiate Comasco",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22077
    },
    {
      "Comune": "Olgiate Molgora",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23887
    },
    {
      "Comune": "Olgiate Olona",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21057
    },
    {
      "Comune": "Olginate",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23854
    },
    {
      "Comune": "Oliena",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8025
    },
    {
      "Comune": "Oliva Gessi",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Olivadi",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88067
    },
    {
      "Comune": "Oliveri",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98060
    },
    {
      "Comune": "Oliveto Citra",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Oliveto Lario",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23865
    },
    {
      "Comune": "Oliveto Lucano",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75010
    },
    {
      "Comune": "Olivetta San Michele",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18030
    },
    {
      "Comune": "Olivola",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15030
    },
    {
      "Comune": "Ollastra",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9088
    },
    {
      "Comune": "Ollolai",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Ollomont",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Olmedo",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7040
    },
    {
      "Comune": "Olmeneta",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Olmo al Brembo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Olmo Gentile",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14050
    },
    {
      "Comune": "Oltre il Colle",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24013
    },
    {
      "Comune": "Oltressenda Alta",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Oltrona di San Mamette",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Olzai",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Ome",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Omegna",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28887
    },
    {
      "Comune": "Omignano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84060
    },
    {
      "Comune": "Onanì",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Onano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Oncino",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Oneta",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Onifai",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Oniferi",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Ono San Pietro",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Onore",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Onzo",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17037
    },
    {
      "Comune": "Opera",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20090
    },
    {
      "Comune": "Opi",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Oppeano",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37050
    },
    {
      "Comune": "Oppido Lucano",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85015
    },
    {
      "Comune": "Oppido Mamertina",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89014
    },
    {
      "Comune": "Ora",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Orani",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8026
    },
    {
      "Comune": "Oratino",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86010
    },
    {
      "Comune": "Orbassano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10043
    },
    {
      "Comune": "Orbetello",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58015
    },
    {
      "Comune": "Orciano di Pesaro",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61038
    },
    {
      "Comune": "Orciano Pisano",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56040
    },
    {
      "Comune": "Orco Feglino",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17024
    },
    {
      "Comune": "Ordona",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71040
    },
    {
      "Comune": "Orero",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16040
    },
    {
      "Comune": "Orgiano",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Orgosolo",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8027
    },
    {
      "Comune": "Oria",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72024
    },
    {
      "Comune": "Oricola",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67063
    },
    {
      "Comune": "Origgio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Orino",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Orio al Serio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Orio Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Orio Litta",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26863
    },
    {
      "Comune": "Oriolo",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87073
    },
    {
      "Comune": "Oriolo Romano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Oristano",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9170
    },
    {
      "Comune": "Ormea",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12078
    },
    {
      "Comune": "Ormelle",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31024
    },
    {
      "Comune": "Ornago",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20876
    },
    {
      "Comune": "Ornavasso",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28877
    },
    {
      "Comune": "Ornica",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Orosei",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8028
    },
    {
      "Comune": "Orotelli",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Orria",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84060
    },
    {
      "Comune": "Orroli",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Orsago",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31010
    },
    {
      "Comune": "Orsara Bormida",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Orsara di Puglia",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71027
    },
    {
      "Comune": "Orsenigo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Orsogna",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66036
    },
    {
      "Comune": "Orsomarso",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Orta di Atella",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Orta Nova",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71045
    },
    {
      "Comune": "Orta San Giulio",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28016
    },
    {
      "Comune": "Ortacesus",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Orte",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1028
    },
    {
      "Comune": "Ortelle",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73030
    },
    {
      "Comune": "Ortezzano",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63851
    },
    {
      "Comune": "Ortignano Raggiolo",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52010
    },
    {
      "Comune": "Ortisei",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39046
    },
    {
      "Comune": "Ortona",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66026
    },
    {
      "Comune": "Ortona dei Marsi",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67050
    },
    {
      "Comune": "Ortonovo",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19034
    },
    {
      "Comune": "Ortovero",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17037
    },
    {
      "Comune": "Ortucchio",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67050
    },
    {
      "Comune": "Ortueri",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8036
    },
    {
      "Comune": "Orune",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Orvieto",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5018
    },
    {
      "Comune": "Orvinio",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2035
    },
    {
      "Comune": "Orzinuovi",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25034
    },
    {
      "Comune": "Orzivecchi",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Osasco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Osasio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Oschiri",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7027
    },
    {
      "Comune": "Osidda",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Osiglia",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17010
    },
    {
      "Comune": "Osilo",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7033
    },
    {
      "Comune": "Osimo",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60027
    },
    {
      "Comune": "Osini",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Osio Sopra",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Osio Sotto",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24046
    },
    {
      "Comune": "Osmate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21018
    },
    {
      "Comune": "Osnago",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23875
    },
    {
      "Comune": "Osoppo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Ospedaletti",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18014
    },
    {
      "Comune": "Ospedaletto",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Ospedaletto d'Alpinolo",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83014
    },
    {
      "Comune": "Ospedaletto Euganeo",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35045
    },
    {
      "Comune": "Ospedaletto Lodigiano",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26864
    },
    {
      "Comune": "Ospitale di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32010
    },
    {
      "Comune": "Ospitaletto",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25035
    },
    {
      "Comune": "Ossago Lodigiano",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26816
    },
    {
      "Comune": "Ossana",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38026
    },
    {
      "Comune": "Ossi",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7045
    },
    {
      "Comune": "Ossimo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Ossona",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Ossuccio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Ostana",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Ostellato",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44020
    },
    {
      "Comune": "Ostiano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26032
    },
    {
      "Comune": "Ostiglia",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46035
    },
    {
      "Comune": "Ostra",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60010
    },
    {
      "Comune": "Ostra Vetere",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60010
    },
    {
      "Comune": "Ostuni",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72017
    },
    {
      "Comune": "Otranto",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73028
    },
    {
      "Comune": "Otricoli",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5030
    },
    {
      "Comune": "Ottana",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Ottati",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Ottaviano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80044
    },
    {
      "Comune": "Ottiglio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15038
    },
    {
      "Comune": "Ottobiano",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Ottone",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29026
    },
    {
      "Comune": "Oulx",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10056
    },
    {
      "Comune": "Ovada",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15076
    },
    {
      "Comune": "Ovaro",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33025
    },
    {
      "Comune": "Oviglio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15026
    },
    {
      "Comune": "Ovindoli",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67046
    },
    {
      "Comune": "Ovodda",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Oyace",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Ozegna",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Ozieri",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7014
    },
    {
      "Comune": "Ozzano dell'Emilia",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40064
    },
    {
      "Comune": "Ozzano Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15039
    },
    {
      "Comune": "Ozzero",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Pabillonis",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9030
    },
    {
      "Comune": "Pace del Mela",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98042
    },
    {
      "Comune": "Paceco",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91027
    },
    {
      "Comune": "Pacentro",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Pachino",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96018
    },
    {
      "Comune": "Paciano",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6060
    },
    {
      "Comune": "Padenghe sul Garda",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Padergnone",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38070
    },
    {
      "Comune": "Paderna",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Paderno d'Adda",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23877
    },
    {
      "Comune": "Paderno del Grappa",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31017
    },
    {
      "Comune": "Paderno Dugnano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20037
    },
    {
      "Comune": "Paderno Franciacorta",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Paderno Ponchielli",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26024
    },
    {
      "Comune": "Padova",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": "351xx"
    },
    {
      "Comune": "Padria",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7015
    },
    {
      "Comune": "Padru",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7020
    },
    {
      "Comune": "Padula",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84034
    },
    {
      "Comune": "Paduli",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Paesana",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12034
    },
    {
      "Comune": "Paese",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31038
    },
    {
      "Comune": "Pagani",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84016
    },
    {
      "Comune": "Paganico Sabino",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2020
    },
    {
      "Comune": "Pagazzano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Pagliara",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98020
    },
    {
      "Comune": "Paglieta",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66020
    },
    {
      "Comune": "Pagnacco",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Pagno",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Pagnona",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23833
    },
    {
      "Comune": "Pago del Vallo di Lauro",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Pago Veiano",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Paisco Loveno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Paitone",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Paladina",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Palagano",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41046
    },
    {
      "Comune": "Palagianello",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74018
    },
    {
      "Comune": "Palagiano",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74019
    },
    {
      "Comune": "Palagonia",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95046
    },
    {
      "Comune": "Palaia",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56036
    },
    {
      "Comune": "Palanzano",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43025
    },
    {
      "Comune": "Palata",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86037
    },
    {
      "Comune": "Palau",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7020
    },
    {
      "Comune": "Palazzago",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Palazzo Adriano",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Palazzo Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Palazzo Pignano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Palazzo San Gervasio",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85026
    },
    {
      "Comune": "Palazzolo Acreide",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96010
    },
    {
      "Comune": "Palazzolo dello Stella",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33056
    },
    {
      "Comune": "Palazzolo sull'Oglio",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25036
    },
    {
      "Comune": "Palazzolo Vercellese",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Palazzuolo sul Senio",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50035
    },
    {
      "Comune": "Palena",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66017
    },
    {
      "Comune": "Palermiti",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Palermo",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": "901xx"
    },
    {
      "Comune": "Palestrina",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 36
    },
    {
      "Comune": "Palestro",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Paliano",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3018
    },
    {
      "Comune": "Palizzi",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89038
    },
    {
      "Comune": "Pallagorio",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88818
    },
    {
      "Comune": "Pallanzeno",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28884
    },
    {
      "Comune": "Pallare",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17043
    },
    {
      "Comune": "Palma Campania",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80036
    },
    {
      "Comune": "Palma di Montechiaro",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92020
    },
    {
      "Comune": "Palmanova",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33057
    },
    {
      "Comune": "Palmariggi",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Palmas Arborea",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Palmi",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89015
    },
    {
      "Comune": "Palmiano",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63092
    },
    {
      "Comune": "Palmoli",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Palo del Colle",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70027
    },
    {
      "Comune": "Palombara Sabina",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 18
    },
    {
      "Comune": "Palombaro",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Palomonte",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Palosco",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Palù",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37050
    },
    {
      "Comune": "Palù del Fersina",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Paludi",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "Paluzza",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33026
    },
    {
      "Comune": "Pamparato",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12087
    },
    {
      "Comune": "Pancalieri",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Pancarana",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Panchià",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Pandino",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26025
    },
    {
      "Comune": "Panettieri",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Panicale",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6064
    },
    {
      "Comune": "Pannarano",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82017
    },
    {
      "Comune": "Panni",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71020
    },
    {
      "Comune": "Pantelleria",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91017
    },
    {
      "Comune": "Pantigliate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20090
    },
    {
      "Comune": "Paola",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87027
    },
    {
      "Comune": "Paolisi",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82011
    },
    {
      "Comune": "Papasidero",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Papozze",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45010
    },
    {
      "Comune": "Parabiago",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20015
    },
    {
      "Comune": "Parabita",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73052
    },
    {
      "Comune": "Paratico",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Parcines",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39020
    },
    {
      "Comune": "Parè",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Parella",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Parenti",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Parete",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Pareto",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Parghelia",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89861
    },
    {
      "Comune": "Parlasco",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23837
    },
    {
      "Comune": "Parma",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": "4312x"
    },
    {
      "Comune": "Parodi Ligure",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Paroldo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Parolise",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "Parona",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Parrano",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5010
    },
    {
      "Comune": "Parre",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Partanna",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91028
    },
    {
      "Comune": "Partinico",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90047
    },
    {
      "Comune": "Paruzzaro",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28040
    },
    {
      "Comune": "Parzanica",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Pasian di Prato",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33037
    },
    {
      "Comune": "Pasiano di Pordenone",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33087
    },
    {
      "Comune": "Paspardo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Passerano Marmorito",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Passignano sul Trasimeno",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6065
    },
    {
      "Comune": "Passirano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Pastena",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3020
    },
    {
      "Comune": "Pastorano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81050
    },
    {
      "Comune": "Pastrengo",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37010
    },
    {
      "Comune": "Pasturana",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Pasturo",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23818
    },
    {
      "Comune": "Paterno",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Paternò",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95047
    },
    {
      "Comune": "Paterno Calabro",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Paternopoli",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83052
    },
    {
      "Comune": "Patrica",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3010
    },
    {
      "Comune": "Pattada",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7016
    },
    {
      "Comune": "Patti",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98066
    },
    {
      "Comune": "Patù",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73053
    },
    {
      "Comune": "Pau",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Paularo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33027
    },
    {
      "Comune": "Pauli Arbarei",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Paulilatino",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Paullo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20067
    },
    {
      "Comune": "Paupisi",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Pavarolo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Pavia",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27100
    },
    {
      "Comune": "Pavia di Udine",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Pavone Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10018
    },
    {
      "Comune": "Pavone del Mella",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Pavullo nel Frignano",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41026
    },
    {
      "Comune": "Pazzano",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Peccioli",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56037
    },
    {
      "Comune": "Pecco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Pecetto di Valenza",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Pecetto Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Pecorara",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Pedace",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Pedara",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95030
    },
    {
      "Comune": "Pedaso",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63827
    },
    {
      "Comune": "Pedavena",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32034
    },
    {
      "Comune": "Pedemonte",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Pederobba",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Pedesina",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Pedivigliano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Pedrengo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24066
    },
    {
      "Comune": "Peglio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Peglio",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61049
    },
    {
      "Comune": "Pegognaga",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46020
    },
    {
      "Comune": "Peia",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Peio",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38024
    },
    {
      "Comune": "Pelago",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50060
    },
    {
      "Comune": "Pella",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Pellegrino Parmense",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43047
    },
    {
      "Comune": "Pellezzano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84080
    },
    {
      "Comune": "Pellio Intelvi",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Pellizzano",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38020
    },
    {
      "Comune": "Pelugo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38079
    },
    {
      "Comune": "Penango",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14030
    },
    {
      "Comune": "Penna in Teverina",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5028
    },
    {
      "Comune": "Penna San Giovanni",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62020
    },
    {
      "Comune": "Penna Sant'Andrea",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64039
    },
    {
      "Comune": "Pennabilli",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47864
    },
    {
      "Comune": "Pennadomo",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Pennapiedimonte",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Penne",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65017
    },
    {
      "Comune": "Pentone",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Perano",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Perarolo di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32010
    },
    {
      "Comune": "Perca",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Percile",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Perdasdefogu",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8046
    },
    {
      "Comune": "Perdaxius",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Perdifumo",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84060
    },
    {
      "Comune": "Perego",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23888
    },
    {
      "Comune": "Pereto",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67064
    },
    {
      "Comune": "Perfugas",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7034
    },
    {
      "Comune": "Pergine Valdarno",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52020
    },
    {
      "Comune": "Pergine Valsugana",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38057
    },
    {
      "Comune": "Pergola",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61045
    },
    {
      "Comune": "Perinaldo",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18032
    },
    {
      "Comune": "Perito",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84060
    },
    {
      "Comune": "Perledo",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23828
    },
    {
      "Comune": "Perletto",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Perlo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Perloz",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Pernumia",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Pero",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20016
    },
    {
      "Comune": "Perosa Argentina",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10063
    },
    {
      "Comune": "Perosa Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Perrero",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Persico Dosimo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26043
    },
    {
      "Comune": "Pertengo",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "Pertica Alta",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25070
    },
    {
      "Comune": "Pertica Bassa",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25078
    },
    {
      "Comune": "Pertosa",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "Pertusio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Perugia",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": "061xx"
    },
    {
      "Comune": "Pesaro",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": "6112x"
    },
    {
      "Comune": "Pescaglia",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55064
    },
    {
      "Comune": "Pescantina",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37026
    },
    {
      "Comune": "Pescara",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": "6512x"
    },
    {
      "Comune": "Pescarolo ed Uniti",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26033
    },
    {
      "Comune": "Pescasseroli",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67032
    },
    {
      "Comune": "Pescate",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23855
    },
    {
      "Comune": "Pesche",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86090
    },
    {
      "Comune": "Peschici",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71010
    },
    {
      "Comune": "Peschiera Borromeo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20068
    },
    {
      "Comune": "Peschiera del Garda",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37019
    },
    {
      "Comune": "Pescia",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51017
    },
    {
      "Comune": "Pescina",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67057
    },
    {
      "Comune": "Pesco Sannita",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Pescocostanzo",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67033
    },
    {
      "Comune": "Pescolanciano",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86097
    },
    {
      "Comune": "Pescopagano",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85020
    },
    {
      "Comune": "Pescopennataro",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86080
    },
    {
      "Comune": "Pescorocchiano",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2024
    },
    {
      "Comune": "Pescosansonesco",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Pescosolido",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Pessano con Bornago",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Pessina Cremonese",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Pessinetto",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Petacciato",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86038
    },
    {
      "Comune": "Petilia Policastro",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88837
    },
    {
      "Comune": "Petina",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Petralia Soprana",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90026
    },
    {
      "Comune": "Petralia Sottana",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90027
    },
    {
      "Comune": "Petrella Salto",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2025
    },
    {
      "Comune": "Petrella Tifernina",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86024
    },
    {
      "Comune": "Petriano",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61020
    },
    {
      "Comune": "Petriolo",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62014
    },
    {
      "Comune": "Petritoli",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63848
    },
    {
      "Comune": "Petrizzi",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Petronà",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Petrosino",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91020
    },
    {
      "Comune": "Petruro Irpino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83010
    },
    {
      "Comune": "Pettenasco",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28028
    },
    {
      "Comune": "Pettinengo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13843
    },
    {
      "Comune": "Pettineo",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Pettoranello del Molise",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86090
    },
    {
      "Comune": "Pettorano sul Gizio",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67034
    },
    {
      "Comune": "Pettorazza Grimani",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45010
    },
    {
      "Comune": "Peveragno",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12016
    },
    {
      "Comune": "Pezzana",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13010
    },
    {
      "Comune": "Pezzaze",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25060
    },
    {
      "Comune": "Pezzolo Valle Uzzone",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Piacenza",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": "2912x"
    },
    {
      "Comune": "Piacenza d'Adige",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Piadena",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26034
    },
    {
      "Comune": "Piagge",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61030
    },
    {
      "Comune": "Piaggine",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84065
    },
    {
      "Comune": "Pian Camuno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Pian di Sco",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52026
    },
    {
      "Comune": "Piana Crixia",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17058
    },
    {
      "Comune": "Piana degli Albanesi",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90037
    },
    {
      "Comune": "Piana di Monte Verna",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81013
    },
    {
      "Comune": "Piancastagnaio",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53025
    },
    {
      "Comune": "Piancogno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25052
    },
    {
      "Comune": "Piandimeleto",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61026
    },
    {
      "Comune": "Piane Crati",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Pianella",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65019
    },
    {
      "Comune": "Pianello del Lario",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Pianello Val Tidone",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Pianengo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Pianezza",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10044
    },
    {
      "Comune": "Pianezze",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36060
    },
    {
      "Comune": "Pianfei",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12080
    },
    {
      "Comune": "Pianico",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Pianiga",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30030
    },
    {
      "Comune": "Piano di Sorrento",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80063
    },
    {
      "Comune": "Pianopoli",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Pianoro",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40065
    },
    {
      "Comune": "Piansano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Piantedo",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Piario",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Piasco",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12026
    },
    {
      "Comune": "Piateda",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Piatto",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13844
    },
    {
      "Comune": "Piazza al Serchio",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55035
    },
    {
      "Comune": "Piazza Armerina",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94015
    },
    {
      "Comune": "Piazza Brembana",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24014
    },
    {
      "Comune": "Piazzatorre",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Piazzola sul Brenta",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35016
    },
    {
      "Comune": "Piazzolo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Picciano",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Picerno",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85055
    },
    {
      "Comune": "Picinisco",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Pico",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3020
    },
    {
      "Comune": "Piea",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Piedicavallo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13812
    },
    {
      "Comune": "Piedimonte Etneo",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95017
    },
    {
      "Comune": "Piedimonte Matese",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81016
    },
    {
      "Comune": "Piedimonte San Germano",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Piedimulera",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28885
    },
    {
      "Comune": "Piegaro",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6066
    },
    {
      "Comune": "Pienza",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53026
    },
    {
      "Comune": "Pieranica",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26017
    },
    {
      "Comune": "Pietra de' Giorgi",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Pietra Ligure",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17027
    },
    {
      "Comune": "Pietra Marazzi",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Pietrabbondante",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86085
    },
    {
      "Comune": "Pietrabruna",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18010
    },
    {
      "Comune": "Pietracamela",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64047
    },
    {
      "Comune": "Pietracatella",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86040
    },
    {
      "Comune": "Pietracupa",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86020
    },
    {
      "Comune": "Pietradefusi",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Pietraferrazzana",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Pietrafitta",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Pietragalla",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85016
    },
    {
      "Comune": "Pietralunga",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6026
    },
    {
      "Comune": "Pietramelara",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81051
    },
    {
      "Comune": "Pietramontecorvino",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71038
    },
    {
      "Comune": "Pietranico",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Pietrapaola",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "Pietrapertosa",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Pietraperzia",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94016
    },
    {
      "Comune": "Pietraporzio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Pietraroja",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Pietrarubbia",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61023
    },
    {
      "Comune": "Pietrasanta",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55045
    },
    {
      "Comune": "Pietrastornina",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83015
    },
    {
      "Comune": "Pietravairano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81040
    },
    {
      "Comune": "Pietrelcina",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Pieve a Nievole",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51018
    },
    {
      "Comune": "Pieve Albignola",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Pieve d'Alpago",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32010
    },
    {
      "Comune": "Pieve del Cairo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27037
    },
    {
      "Comune": "Pieve di Bono",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38085
    },
    {
      "Comune": "Pieve di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32044
    },
    {
      "Comune": "Pieve di Cento",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40066
    },
    {
      "Comune": "Pieve di Coriano",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46020
    },
    {
      "Comune": "Pieve di Soligo",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31053
    },
    {
      "Comune": "Pieve di Teco",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18026
    },
    {
      "Comune": "Pieve d'Olmi",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26040
    },
    {
      "Comune": "Pieve Emanuele",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20090
    },
    {
      "Comune": "Pieve Fissiraga",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26854
    },
    {
      "Comune": "Pieve Fosciana",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55036
    },
    {
      "Comune": "Pieve Ligure",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16030
    },
    {
      "Comune": "Pieve Porto Morone",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27017
    },
    {
      "Comune": "Pieve San Giacomo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26035
    },
    {
      "Comune": "Pieve Santo Stefano",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52036
    },
    {
      "Comune": "Pieve Tesino",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Pieve Torina",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62036
    },
    {
      "Comune": "Pieve Vergonte",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28886
    },
    {
      "Comune": "Pievebovigliana",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62035
    },
    {
      "Comune": "Pievepelago",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41027
    },
    {
      "Comune": "Piglio",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3010
    },
    {
      "Comune": "Pigna",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18037
    },
    {
      "Comune": "Pignataro Interamna",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Pignataro Maggiore",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81052
    },
    {
      "Comune": "Pignola",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Pignone",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Pigra",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Pila",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13020
    },
    {
      "Comune": "Pimentel",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Pimonte",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80050
    },
    {
      "Comune": "Pinarolo Po",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Pinasca",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Pincara",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45020
    },
    {
      "Comune": "Pinerolo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10064
    },
    {
      "Comune": "Pineto",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64025
    },
    {
      "Comune": "Pino d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Pino sulla Sponda del Lago Maggiore",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Pino Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10025
    },
    {
      "Comune": "Pinzano al Tagliamento",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33094
    },
    {
      "Comune": "Pinzolo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38086
    },
    {
      "Comune": "Piobbico",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61046
    },
    {
      "Comune": "Piobesi d'Alba",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Piobesi Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Piode",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13020
    },
    {
      "Comune": "Pioltello",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20096
    },
    {
      "Comune": "Piombino",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57025
    },
    {
      "Comune": "Piombino Dese",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35017
    },
    {
      "Comune": "Pioraco",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62025
    },
    {
      "Comune": "Piossasco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10045
    },
    {
      "Comune": "Piovà Massaia",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14026
    },
    {
      "Comune": "Piove di Sacco",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35028
    },
    {
      "Comune": "Piovene Rocchette",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36013
    },
    {
      "Comune": "Piovera",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Piozzano",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Piozzo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Piraino",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98060
    },
    {
      "Comune": "Pisa",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": "5612x"
    },
    {
      "Comune": "Pisano",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Piscina",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Piscinas",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Pisciotta",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84066
    },
    {
      "Comune": "Pisogne",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25055
    },
    {
      "Comune": "Pisoniano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Pisticci",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75015
    },
    {
      "Comune": "Pistoia",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51100
    },
    {
      "Comune": "Piteglio",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51020
    },
    {
      "Comune": "Pitigliano",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58017
    },
    {
      "Comune": "Piubega",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46040
    },
    {
      "Comune": "Piuro",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Piverone",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Pizzale",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Pizzighettone",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26026
    },
    {
      "Comune": "Pizzo",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89812
    },
    {
      "Comune": "Pizzoferrato",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Pizzoli",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67017
    },
    {
      "Comune": "Pizzone",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86071
    },
    {
      "Comune": "Pizzoni",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89834
    },
    {
      "Comune": "Placanica",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Plataci",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87070
    },
    {
      "Comune": "Platania",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Platì",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89039
    },
    {
      "Comune": "Plaus",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39025
    },
    {
      "Comune": "Plesio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Ploaghe",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7017
    },
    {
      "Comune": "Plodio",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17043
    },
    {
      "Comune": "Pocapaglia",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Pocenia",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Podenzana",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54010
    },
    {
      "Comune": "Podenzano",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29027
    },
    {
      "Comune": "Pofi",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3026
    },
    {
      "Comune": "Poggiardo",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73037
    },
    {
      "Comune": "Poggibonsi",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53036
    },
    {
      "Comune": "Poggio a Caiano",
      "Provincia": "PO",
      "Regione": "TOS",
      "CAP": 59016
    },
    {
      "Comune": "Poggio Berni",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47824
    },
    {
      "Comune": "Poggio Bustone",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2018
    },
    {
      "Comune": "Poggio Catino",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Poggio Imperiale",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71010
    },
    {
      "Comune": "Poggio Mirteto",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2047
    },
    {
      "Comune": "Poggio Moiano",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2037
    },
    {
      "Comune": "Poggio Nativo",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2030
    },
    {
      "Comune": "Poggio Picenze",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67026
    },
    {
      "Comune": "Poggio Renatico",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44028
    },
    {
      "Comune": "Poggio Rusco",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46025
    },
    {
      "Comune": "Poggio San Lorenzo",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2030
    },
    {
      "Comune": "Poggio San Marcello",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60030
    },
    {
      "Comune": "Poggio San Vicino",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62021
    },
    {
      "Comune": "Poggio Sannita",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86086
    },
    {
      "Comune": "Poggiodomo",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6040
    },
    {
      "Comune": "Poggiofiorito",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66030
    },
    {
      "Comune": "Poggiomarino",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80040
    },
    {
      "Comune": "Poggioreale",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91020
    },
    {
      "Comune": "Poggiorsini",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70020
    },
    {
      "Comune": "Poggiridenti",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Pogliano Milanese",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Pognana Lario",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Pognano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Pogno",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28076
    },
    {
      "Comune": "Poirino",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10046
    },
    {
      "Comune": "Pojana Maggiore",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36026
    },
    {
      "Comune": "Polaveno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25060
    },
    {
      "Comune": "Polcenigo",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33070
    },
    {
      "Comune": "Polesella",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45038
    },
    {
      "Comune": "Polesine Parmense",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43010
    },
    {
      "Comune": "Poli",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 10
    },
    {
      "Comune": "Polia",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89813
    },
    {
      "Comune": "Policoro",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75025
    },
    {
      "Comune": "Polignano a Mare",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70044
    },
    {
      "Comune": "Polinago",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41040
    },
    {
      "Comune": "Polino",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5030
    },
    {
      "Comune": "Polistena",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89024
    },
    {
      "Comune": "Polizzi Generosa",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90028
    },
    {
      "Comune": "Polla",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84035
    },
    {
      "Comune": "Pollein",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Pollena Trocchia",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80040
    },
    {
      "Comune": "Pollenza",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62010
    },
    {
      "Comune": "Pollica",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84068
    },
    {
      "Comune": "Pollina",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90010
    },
    {
      "Comune": "Pollone",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13814
    },
    {
      "Comune": "Pollutri",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66020
    },
    {
      "Comune": "Polonghera",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Polpenazze del Garda",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Polverara",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Polverigi",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60020
    },
    {
      "Comune": "Pomarance",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56045
    },
    {
      "Comune": "Pomaretto",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10063
    },
    {
      "Comune": "Pomarico",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75016
    },
    {
      "Comune": "Pomaro Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Pomarolo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Pombia",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28050
    },
    {
      "Comune": "Pomezia",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 40
    },
    {
      "Comune": "Pomigliano d'Arco",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80038
    },
    {
      "Comune": "Pompei",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80045
    },
    {
      "Comune": "Pompeiana",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18015
    },
    {
      "Comune": "Pompiano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Pomponesco",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46030
    },
    {
      "Comune": "Pompu",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9093
    },
    {
      "Comune": "Poncarale",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Ponderano",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13875
    },
    {
      "Comune": "Ponna",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Ponsacco",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56038
    },
    {
      "Comune": "Ponso",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Pontassieve",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50065
    },
    {
      "Comune": "Pontboset",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Pont-Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10085
    },
    {
      "Comune": "Ponte",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Ponte Buggianese",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51019
    },
    {
      "Comune": "Ponte dell'Olio",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29028
    },
    {
      "Comune": "Ponte di Legno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25056
    },
    {
      "Comune": "Ponte di Piave",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31047
    },
    {
      "Comune": "Ponte Gardena",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Ponte in Valtellina",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23026
    },
    {
      "Comune": "Ponte Lambro",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22037
    },
    {
      "Comune": "Ponte nelle Alpi",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32014
    },
    {
      "Comune": "Ponte Nizza",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Ponte Nossa",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24028
    },
    {
      "Comune": "Ponte San Nicolò",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Ponte San Pietro",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24036
    },
    {
      "Comune": "Pontebba",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33016
    },
    {
      "Comune": "Pontecagnano Faiano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84098
    },
    {
      "Comune": "Pontecchio Polesine",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "Pontechianale",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Pontecorvo",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3037
    },
    {
      "Comune": "Pontecurone",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15055
    },
    {
      "Comune": "Pontedassio",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18027
    },
    {
      "Comune": "Pontedera",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56025
    },
    {
      "Comune": "Pontelandolfo",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82027
    },
    {
      "Comune": "Pontelatone",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81040
    },
    {
      "Comune": "Pontelongo",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35029
    },
    {
      "Comune": "Pontenure",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Ponteranica",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Pontestura",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15027
    },
    {
      "Comune": "Pontevico",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25026
    },
    {
      "Comune": "Pontey",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11024
    },
    {
      "Comune": "Ponti",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Ponti sul Mincio",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46040
    },
    {
      "Comune": "Pontida",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Pontinia",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4014
    },
    {
      "Comune": "Pontinvrea",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17042
    },
    {
      "Comune": "Pontirolo Nuovo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Pontoglio",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25037
    },
    {
      "Comune": "Pontremoli",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54027
    },
    {
      "Comune": "Pont-Saint-Martin",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11026
    },
    {
      "Comune": "Ponza",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4027
    },
    {
      "Comune": "Ponzano di Fermo",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63845
    },
    {
      "Comune": "Ponzano Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Ponzano Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Ponzano Veneto",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31050
    },
    {
      "Comune": "Ponzone",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Popoli",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65026
    },
    {
      "Comune": "Poppi",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52014
    },
    {
      "Comune": "Porano",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5010
    },
    {
      "Comune": "Porcari",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55016
    },
    {
      "Comune": "Porcia",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "Pordenone",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33170
    },
    {
      "Comune": "Porlezza",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22018
    },
    {
      "Comune": "Pornassio",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18024
    },
    {
      "Comune": "Porpetto",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Porretta Terme",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40046
    },
    {
      "Comune": "Portacomaro",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14037
    },
    {
      "Comune": "Portalbera",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Porte",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Portici",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80055
    },
    {
      "Comune": "Portico di Caserta",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81050
    },
    {
      "Comune": "Portico e San Benedetto",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47010
    },
    {
      "Comune": "Portigliola",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Porto Azzurro",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57036
    },
    {
      "Comune": "Porto Ceresio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Porto Cesareo",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "Porto Empedocle",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92014
    },
    {
      "Comune": "Porto Mantovano",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46047
    },
    {
      "Comune": "Porto Recanati",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62017
    },
    {
      "Comune": "Porto San Giorgio",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63822
    },
    {
      "Comune": "Porto Sant'Elpidio",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63821
    },
    {
      "Comune": "Porto Tolle",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45018
    },
    {
      "Comune": "Porto Torres",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7046
    },
    {
      "Comune": "Porto Valtravaglia",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Porto Viro",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45014
    },
    {
      "Comune": "Portobuffolè",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Portocannone",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86045
    },
    {
      "Comune": "Portoferraio",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57037
    },
    {
      "Comune": "Portofino",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16034
    },
    {
      "Comune": "Portogruaro",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30026
    },
    {
      "Comune": "Portomaggiore",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44015
    },
    {
      "Comune": "Portopalo di Capo Passero",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96010
    },
    {
      "Comune": "Portoscuso",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Portovenere",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19025
    },
    {
      "Comune": "Portula",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13833
    },
    {
      "Comune": "Posada",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Posina",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36010
    },
    {
      "Comune": "Positano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84017
    },
    {
      "Comune": "Possagno",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31054
    },
    {
      "Comune": "Posta",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2019
    },
    {
      "Comune": "Posta Fibreno",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Postal",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39014
    },
    {
      "Comune": "Postalesio",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Postiglione",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84026
    },
    {
      "Comune": "Postua",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13010
    },
    {
      "Comune": "Potenza",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85100
    },
    {
      "Comune": "Potenza Picena",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62018
    },
    {
      "Comune": "Pove del Grappa",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36020
    },
    {
      "Comune": "Povegliano",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31050
    },
    {
      "Comune": "Povegliano Veronese",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37064
    },
    {
      "Comune": "Poviglio",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42028
    },
    {
      "Comune": "Povoletto",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Pozza di Fassa",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38036
    },
    {
      "Comune": "Pozzaglia Sabina",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2030
    },
    {
      "Comune": "Pozzaglio ed Uniti",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Pozzallo",
      "Provincia": "RG",
      "Regione": "SIC",
      "CAP": 97016
    },
    {
      "Comune": "Pozzilli",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86077
    },
    {
      "Comune": "Pozzo d'Adda",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Pozzol Groppo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Pozzolengo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25010
    },
    {
      "Comune": "Pozzoleone",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36050
    },
    {
      "Comune": "Pozzolo Formigaro",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15068
    },
    {
      "Comune": "Pozzomaggiore",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7018
    },
    {
      "Comune": "Pozzonovo",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Pozzuoli",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80078
    },
    {
      "Comune": "Pozzuolo del Friuli",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Pozzuolo Martesana",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Pradalunga",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Pradamano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Pradleves",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12027
    },
    {
      "Comune": "Pragelato",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Praia a Mare",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87028
    },
    {
      "Comune": "Praiano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "Pralboino",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Prali",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Pralormo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Pralungo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13899
    },
    {
      "Comune": "Pramaggiore",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30020
    },
    {
      "Comune": "Pramollo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10065
    },
    {
      "Comune": "Prarolo",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13012
    },
    {
      "Comune": "Prarostino",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Prasco",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Prascorsano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Praso",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38080
    },
    {
      "Comune": "Prata Camportaccio",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Prata d'Ansidonia",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Prata di Pordenone",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "Prata di Principato Ultra",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Prata Sannita",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "Pratella",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "Pratiglione",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Prato",
      "Provincia": "PO",
      "Regione": "TOS",
      "CAP": 59100
    },
    {
      "Comune": "Prato allo Stelvio",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39026
    },
    {
      "Comune": "Prato Carnico",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Prato Sesia",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28077
    },
    {
      "Comune": "Pratola Peligna",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67035
    },
    {
      "Comune": "Pratola Serra",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83039
    },
    {
      "Comune": "Pratovecchio",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52015
    },
    {
      "Comune": "Pravisdomini",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33076
    },
    {
      "Comune": "Pray",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13867
    },
    {
      "Comune": "Prazzo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12028
    },
    {
      "Comune": "Precenicco",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Preci",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6047
    },
    {
      "Comune": "Predappio",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47016
    },
    {
      "Comune": "Predazzo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38037
    },
    {
      "Comune": "Predoi",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Predore",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Predosa",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15077
    },
    {
      "Comune": "Preganziol",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31022
    },
    {
      "Comune": "Pregnana Milanese",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Prelà",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18020
    },
    {
      "Comune": "Premana",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23834
    },
    {
      "Comune": "Premariacco",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Premeno",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28818
    },
    {
      "Comune": "Premia",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28866
    },
    {
      "Comune": "Premilcuore",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47010
    },
    {
      "Comune": "Premolo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Premosello-Chiovenda",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28803
    },
    {
      "Comune": "Preone",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Preore",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38070
    },
    {
      "Comune": "Prepotto",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Prè-Saint-Didier",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Preseglie",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25070
    },
    {
      "Comune": "Presenzano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81050
    },
    {
      "Comune": "Presezzo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Presicce",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73054
    },
    {
      "Comune": "Pressana",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37040
    },
    {
      "Comune": "Prestine",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Pretoro",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Prevalle",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Prezza",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Prezzo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38085
    },
    {
      "Comune": "Priero",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Prignano Cilento",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84060
    },
    {
      "Comune": "Prignano sulla Secchia",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41048
    },
    {
      "Comune": "Primaluna",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23819
    },
    {
      "Comune": "Priocca",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Priola",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Priolo Gargallo",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96010
    },
    {
      "Comune": "Priverno",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4015
    },
    {
      "Comune": "Prizzi",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90038
    },
    {
      "Comune": "Proceno",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1020
    },
    {
      "Comune": "Procida",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80079
    },
    {
      "Comune": "Propata",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16027
    },
    {
      "Comune": "Proserpio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Prossedi",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4010
    },
    {
      "Comune": "Provaglio d'Iseo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Provaglio Val Sabbia",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25070
    },
    {
      "Comune": "Proves",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Provvidenti",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86040
    },
    {
      "Comune": "Prunetto",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12077
    },
    {
      "Comune": "Puegnago sul Garda",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Puglianello",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Pula",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Pulfero",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33046
    },
    {
      "Comune": "Pulsano",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74026
    },
    {
      "Comune": "Pumenengo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Puos d'Alpago",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32015
    },
    {
      "Comune": "Pusiano",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Putifigari",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7040
    },
    {
      "Comune": "Putignano",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70017
    },
    {
      "Comune": "Quadrelle",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Quadri",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Quagliuzzo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Qualiano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80019
    },
    {
      "Comune": "Quaranti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14040
    },
    {
      "Comune": "Quaregna",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13854
    },
    {
      "Comune": "Quargnento",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15044
    },
    {
      "Comune": "Quarna Sopra",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28898
    },
    {
      "Comune": "Quarna Sotto",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28896
    },
    {
      "Comune": "Quarona",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13017
    },
    {
      "Comune": "Quarrata",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51039
    },
    {
      "Comune": "Quart",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Quarto",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80010
    },
    {
      "Comune": "Quarto d'Altino",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30020
    },
    {
      "Comune": "Quartu Sant'Elena",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9045
    },
    {
      "Comune": "Quartucciu",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9044
    },
    {
      "Comune": "Quassolo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Quattordio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15028
    },
    {
      "Comune": "Quattro Castella",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42020
    },
    {
      "Comune": "Quero",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32030
    },
    {
      "Comune": "Quiliano",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17047
    },
    {
      "Comune": "Quincinetto",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Quindici",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Quingentole",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46020
    },
    {
      "Comune": "Quintano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26017
    },
    {
      "Comune": "Quinto di Treviso",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31055
    },
    {
      "Comune": "Quinto Vercellese",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "Quinto Vicentino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36050
    },
    {
      "Comune": "Quinzano d'Oglio",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25027
    },
    {
      "Comune": "Quistello",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46026
    },
    {
      "Comune": "Quittengo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13812
    },
    {
      "Comune": "Rabbi",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38020
    },
    {
      "Comune": "Racale",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73055
    },
    {
      "Comune": "Racalmuto",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92020
    },
    {
      "Comune": "Racconigi",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12035
    },
    {
      "Comune": "Raccuja",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98067
    },
    {
      "Comune": "Racines",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Radda in Chianti",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53017
    },
    {
      "Comune": "Raddusa",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95040
    },
    {
      "Comune": "Radicofani",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53040
    },
    {
      "Comune": "Radicondoli",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53030
    },
    {
      "Comune": "Raffadali",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92015
    },
    {
      "Comune": "Ragalna",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95030
    },
    {
      "Comune": "Ragogna",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Ragoli",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38070
    },
    {
      "Comune": "Ragusa",
      "Provincia": "RG",
      "Regione": "SIC",
      "CAP": 97100
    },
    {
      "Comune": "Raiano",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67027
    },
    {
      "Comune": "Ramacca",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95040
    },
    {
      "Comune": "Ramiseto",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42030
    },
    {
      "Comune": "Ramponio Verna",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Rancio Valcuvia",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21030
    },
    {
      "Comune": "Ranco",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Randazzo",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95036
    },
    {
      "Comune": "Ranica",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Ranzanico",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Ranzo",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18020
    },
    {
      "Comune": "Rapagnano",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63831
    },
    {
      "Comune": "Rapallo",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16035
    },
    {
      "Comune": "Rapino",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Rapolano Terme",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53040
    },
    {
      "Comune": "Rapolla",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85027
    },
    {
      "Comune": "Rapone",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85020
    },
    {
      "Comune": "Rassa",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13020
    },
    {
      "Comune": "Rasun Anterselva",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Rasura",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Ravanusa",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92029
    },
    {
      "Comune": "Ravarino",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41017
    },
    {
      "Comune": "Ravascletto",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Ravello",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "Ravenna",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": "4812x"
    },
    {
      "Comune": "Raveo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33029
    },
    {
      "Comune": "Raviscanina",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81017
    },
    {
      "Comune": "Re",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28856
    },
    {
      "Comune": "Rea",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Realmonte",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92010
    },
    {
      "Comune": "Reana del Rojale",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Reano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Recale",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81020
    },
    {
      "Comune": "Recanati",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62019
    },
    {
      "Comune": "Recco",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16036
    },
    {
      "Comune": "Recetto",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Recoaro Terme",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36076
    },
    {
      "Comune": "Redavalle",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Redondesco",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46010
    },
    {
      "Comune": "Refrancore",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14030
    },
    {
      "Comune": "Refrontolo",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31020
    },
    {
      "Comune": "Regalbuto",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94017
    },
    {
      "Comune": "Reggello",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50066
    },
    {
      "Comune": "Reggio Calabria",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": "891xx"
    },
    {
      "Comune": "Reggio Emilia",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": "4212x"
    },
    {
      "Comune": "Reggiolo",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42046
    },
    {
      "Comune": "Reino",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Reitano",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Remanzacco",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33047
    },
    {
      "Comune": "Remedello",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25010
    },
    {
      "Comune": "Renate",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20838
    },
    {
      "Comune": "Rende",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87036
    },
    {
      "Comune": "Renon",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39054
    },
    {
      "Comune": "Resana",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31023
    },
    {
      "Comune": "Rescaldina",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20027
    },
    {
      "Comune": "Resia",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Resiutta",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Resuttano",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93010
    },
    {
      "Comune": "Retorbido",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Revello",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12036
    },
    {
      "Comune": "Revere",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46036
    },
    {
      "Comune": "Revigliasco d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14010
    },
    {
      "Comune": "Revine Lago",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31020
    },
    {
      "Comune": "Revò",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38028
    },
    {
      "Comune": "Rezzago",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Rezzato",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25086
    },
    {
      "Comune": "Rezzo",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18026
    },
    {
      "Comune": "Rezzoaglio",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16048
    },
    {
      "Comune": "Rhemes-Notre-Dame",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Rhemes-Saint-Georges",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Rho",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20017
    },
    {
      "Comune": "Riace",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Rialto",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17020
    },
    {
      "Comune": "Riano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Riardo",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81053
    },
    {
      "Comune": "Ribera",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92016
    },
    {
      "Comune": "Ribordone",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Ricadi",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89866
    },
    {
      "Comune": "Ricaldone",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Riccia",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86016
    },
    {
      "Comune": "Riccione",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47838
    },
    {
      "Comune": "Riccò del Golfo di Spezia",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Ricengo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Ricigliano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Riese Pio X",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31039
    },
    {
      "Comune": "Riesi",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93016
    },
    {
      "Comune": "Rieti",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2100
    },
    {
      "Comune": "Rifiano",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "Rifreddo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Rignano Flaminio",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 68
    },
    {
      "Comune": "Rignano Garganico",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71010
    },
    {
      "Comune": "Rignano sull'Arno",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50067
    },
    {
      "Comune": "Rigolato",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Rima San Giuseppe",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13026
    },
    {
      "Comune": "Rimasco",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13026
    },
    {
      "Comune": "Rimella",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13020
    },
    {
      "Comune": "Rimini",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": "4792x"
    },
    {
      "Comune": "Rio di Pusteria",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39037
    },
    {
      "Comune": "Rio Marina",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57038
    },
    {
      "Comune": "Rio nell'Elba",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57039
    },
    {
      "Comune": "Rio Saliceto",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42010
    },
    {
      "Comune": "Riofreddo",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Riola Sardo",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Riolo Terme",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48025
    },
    {
      "Comune": "Riolunato",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41020
    },
    {
      "Comune": "Riomaggiore",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19017
    },
    {
      "Comune": "Rionero in Vulture",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85028
    },
    {
      "Comune": "Rionero Sannitico",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86087
    },
    {
      "Comune": "Ripa Teatina",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Ripabottoni",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86040
    },
    {
      "Comune": "Ripacandida",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85020
    },
    {
      "Comune": "Ripalimosani",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86025
    },
    {
      "Comune": "Ripalta Arpina",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Ripalta Cremasca",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Ripalta Guerina",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Riparbella",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56046
    },
    {
      "Comune": "Ripatransone",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63065
    },
    {
      "Comune": "Ripe",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60010
    },
    {
      "Comune": "Ripe San Ginesio",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62020
    },
    {
      "Comune": "Ripi",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3027
    },
    {
      "Comune": "Riposto",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95018
    },
    {
      "Comune": "Rittana",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Riva del Garda",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38066
    },
    {
      "Comune": "Riva di Solto",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Riva Ligure",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18015
    },
    {
      "Comune": "Riva Presso Chieri",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Riva Valdobbia",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13020
    },
    {
      "Comune": "Rivalba",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Rivalta Bormida",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Rivalta di Torino",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Rivamonte Agordino",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Rivanazzano Terme",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27055
    },
    {
      "Comune": "Rivara",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Rivarolo Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10086
    },
    {
      "Comune": "Rivarolo del Re ed Uniti",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26036
    },
    {
      "Comune": "Rivarolo Mantovano",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46017
    },
    {
      "Comune": "Rivarone",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Rivarossa",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Rive",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "Rive D'Arcano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Rivello",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85040
    },
    {
      "Comune": "Rivergaro",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29029
    },
    {
      "Comune": "Rivignano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Rivisondoli",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67036
    },
    {
      "Comune": "Rivodutri",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2010
    },
    {
      "Comune": "Rivoli",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10098
    },
    {
      "Comune": "Rivoli Veronese",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37010
    },
    {
      "Comune": "Rivolta d'Adda",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26027
    },
    {
      "Comune": "Rizziconi",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89016
    },
    {
      "Comune": "Ro",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44030
    },
    {
      "Comune": "Roana",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36010
    },
    {
      "Comune": "Roaschia",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Roascio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12073
    },
    {
      "Comune": "Roasio",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13060
    },
    {
      "Comune": "Roatto",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14018
    },
    {
      "Comune": "Robassomero",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Robbiate",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23899
    },
    {
      "Comune": "Robbio",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27038
    },
    {
      "Comune": "Robecchetto con Induno",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20020
    },
    {
      "Comune": "Robecco d'Oglio",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Robecco Pavese",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27042
    },
    {
      "Comune": "Robecco sul Naviglio",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20087
    },
    {
      "Comune": "Robella",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Robilante",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12017
    },
    {
      "Comune": "Roburent",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12080
    },
    {
      "Comune": "Rocca Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Rocca Canterano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Rocca Cigliè",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Rocca d'Arazzo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14030
    },
    {
      "Comune": "Rocca d'Arce",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Rocca de' Baldi",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12047
    },
    {
      "Comune": "Rocca de' Giorgi",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Rocca D'Evandro",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81040
    },
    {
      "Comune": "Rocca di Botte",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67066
    },
    {
      "Comune": "Rocca di Cambio",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67047
    },
    {
      "Comune": "Rocca di Cave",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "Rocca di Mezzo",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67048
    },
    {
      "Comune": "Rocca di Neto",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88821
    },
    {
      "Comune": "Rocca di Papa",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 40
    },
    {
      "Comune": "Rocca Grimalda",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15078
    },
    {
      "Comune": "Rocca Imperiale",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87074
    },
    {
      "Comune": "Rocca Massima",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4010
    },
    {
      "Comune": "Rocca Pia",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Rocca Pietore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Rocca Priora",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 40
    },
    {
      "Comune": "Rocca San Casciano",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47017
    },
    {
      "Comune": "Rocca San Felice",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "Rocca San Giovanni",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66020
    },
    {
      "Comune": "Rocca Santa Maria",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64010
    },
    {
      "Comune": "Rocca Santo Stefano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "Rocca Sinibalda",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2026
    },
    {
      "Comune": "Rocca Susella",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27052
    },
    {
      "Comune": "Roccabascerana",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83016
    },
    {
      "Comune": "Roccabernarda",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88835
    },
    {
      "Comune": "Roccabianca",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43010
    },
    {
      "Comune": "Roccabruna",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Roccacasale",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Roccadaspide",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84069
    },
    {
      "Comune": "Roccafiorita",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Roccafluvione",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63093
    },
    {
      "Comune": "Roccaforte del Greco",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89060
    },
    {
      "Comune": "Roccaforte Ligure",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Roccaforte Mondovì",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12088
    },
    {
      "Comune": "Roccaforzata",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74020
    },
    {
      "Comune": "Roccafranca",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Roccagiovine",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Roccagloriosa",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84060
    },
    {
      "Comune": "Roccagorga",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4010
    },
    {
      "Comune": "Roccalbegna",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58053
    },
    {
      "Comune": "Roccalumera",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98027
    },
    {
      "Comune": "Roccamandolfi",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86092
    },
    {
      "Comune": "Roccamena",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90040
    },
    {
      "Comune": "Roccamonfina",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81035
    },
    {
      "Comune": "Roccamontepiano",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Roccamorice",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Roccanova",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85036
    },
    {
      "Comune": "Roccantica",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Roccapalumba",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Roccapiemonte",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84086
    },
    {
      "Comune": "Roccarainola",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "Roccaraso",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67037
    },
    {
      "Comune": "Roccaromana",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81051
    },
    {
      "Comune": "Roccascalegna",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Roccasecca",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3038
    },
    {
      "Comune": "Roccasecca dei Volsci",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4010
    },
    {
      "Comune": "Roccasicura",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86080
    },
    {
      "Comune": "Roccasparvera",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Roccaspinalveti",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Roccastrada",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58036
    },
    {
      "Comune": "Roccavaldina",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98040
    },
    {
      "Comune": "Roccaverano",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14050
    },
    {
      "Comune": "Roccavignale",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17017
    },
    {
      "Comune": "Roccavione",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12018
    },
    {
      "Comune": "Roccavivara",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86020
    },
    {
      "Comune": "Roccella Ionica",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89047
    },
    {
      "Comune": "Roccella Valdemone",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Rocchetta a Volturno",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86070
    },
    {
      "Comune": "Rocchetta Belbo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Rocchetta di Vara",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Rocchetta e Croce",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81042
    },
    {
      "Comune": "Rocchetta Ligure",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Rocchetta Nervina",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18030
    },
    {
      "Comune": "Rocchetta Palafea",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14042
    },
    {
      "Comune": "Rocchetta Sant'Antonio",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71020
    },
    {
      "Comune": "Rocchetta Tanaro",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14030
    },
    {
      "Comune": "Rodano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20090
    },
    {
      "Comune": "Roddi",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Roddino",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Rodello",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Rodengo",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39037
    },
    {
      "Comune": "Rodengo Saiano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Rodero",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Rodi Garganico",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71012
    },
    {
      "Comune": "Rodì Milici",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98059
    },
    {
      "Comune": "Rodigo",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46040
    },
    {
      "Comune": "Roè Volciano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25077
    },
    {
      "Comune": "Rofrano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84070
    },
    {
      "Comune": "Rogeno",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23849
    },
    {
      "Comune": "Roggiano Gravina",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87017
    },
    {
      "Comune": "Roghudi",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89060
    },
    {
      "Comune": "Rogliano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87054
    },
    {
      "Comune": "Rognano",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Rogno",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Rogolo",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Roiate",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "Roio del Sangro",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Roisan",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Roletto",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Rolo",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42047
    },
    {
      "Comune": "Roma",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": "001xx"
    },
    {
      "Comune": "Romagnano al Monte",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Romagnano Sesia",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28078
    },
    {
      "Comune": "Romagnese",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Romallo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38028
    },
    {
      "Comune": "Romana",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Romanengo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26014
    },
    {
      "Comune": "Romano Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Romano d'Ezzelino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36060
    },
    {
      "Comune": "Romano di Lombardia",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24058
    },
    {
      "Comune": "Romans d'Isonzo",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34076
    },
    {
      "Comune": "Rombiolo",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89841
    },
    {
      "Comune": "Romeno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Romentino",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28068
    },
    {
      "Comune": "Rometta",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98043
    },
    {
      "Comune": "Ronago",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22027
    },
    {
      "Comune": "Roncà",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37030
    },
    {
      "Comune": "Roncade",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31056
    },
    {
      "Comune": "Roncadelle",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Roncaro",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Roncegno Terme",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Roncello",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20877
    },
    {
      "Comune": "Ronchi dei Legionari",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34077
    },
    {
      "Comune": "Ronchi Valsugana",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Ronchis",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Ronciglione",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1037
    },
    {
      "Comune": "Ronco all'Adige",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37055
    },
    {
      "Comune": "Ronco Biellese",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13845
    },
    {
      "Comune": "Ronco Briantino",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20885
    },
    {
      "Comune": "Ronco Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Ronco Scrivia",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16019
    },
    {
      "Comune": "Roncobello",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Roncoferraro",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46037
    },
    {
      "Comune": "Roncofreddo",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47020
    },
    {
      "Comune": "Roncola",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Roncone",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38087
    },
    {
      "Comune": "Rondanina",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16025
    },
    {
      "Comune": "Rondissone",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10030
    },
    {
      "Comune": "Ronsecco",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13036
    },
    {
      "Comune": "Ronzo-Chienis",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Ronzone",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Roppolo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13883
    },
    {
      "Comune": "Rorà",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Rosà",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36027
    },
    {
      "Comune": "Rosarno",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89025
    },
    {
      "Comune": "Rosasco",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Rosate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20088
    },
    {
      "Comune": "Rosazza",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13815
    },
    {
      "Comune": "Rosciano",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Roscigno",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Rose",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Rosello",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66040
    },
    {
      "Comune": "Roseto Capo Spulico",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87070
    },
    {
      "Comune": "Roseto degli Abruzzi",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64026
    },
    {
      "Comune": "Roseto Valfortore",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71039
    },
    {
      "Comune": "Rosignano Marittimo",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57016
    },
    {
      "Comune": "Rosignano Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15030
    },
    {
      "Comune": "Rosolina",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45010
    },
    {
      "Comune": "Rosolini",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96019
    },
    {
      "Comune": "Rosora",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60030
    },
    {
      "Comune": "Rossa",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13020
    },
    {
      "Comune": "Rossana",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Rossano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87067
    },
    {
      "Comune": "Rossano Veneto",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36028
    },
    {
      "Comune": "Rossiglione",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16010
    },
    {
      "Comune": "Rosta",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Rota d'Imagna",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24037
    },
    {
      "Comune": "Rota Greca",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Rotella",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63071
    },
    {
      "Comune": "Rotello",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86040
    },
    {
      "Comune": "Rotonda",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85048
    },
    {
      "Comune": "Rotondella",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75026
    },
    {
      "Comune": "Rotondi",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83017
    },
    {
      "Comune": "Rottofreno",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Rotzo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36010
    },
    {
      "Comune": "Roure",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Rovagnate",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23888
    },
    {
      "Comune": "Rovasenda",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Rovato",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25038
    },
    {
      "Comune": "Rovegno",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16028
    },
    {
      "Comune": "Rovellasca",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22069
    },
    {
      "Comune": "Rovello Porro",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Roverbella",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46048
    },
    {
      "Comune": "Roverchiara",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37050
    },
    {
      "Comune": "Roverè della Luna",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Roverè Veronese",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37028
    },
    {
      "Comune": "Roveredo di Guà",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37040
    },
    {
      "Comune": "Roveredo in Piano",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "Rovereto",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38068
    },
    {
      "Comune": "Rovescala",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Rovetta",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Roviano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 27
    },
    {
      "Comune": "Rovigo",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45100
    },
    {
      "Comune": "Rovito",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Rovolon",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35030
    },
    {
      "Comune": "Rozzano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20089
    },
    {
      "Comune": "Rubano",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35030
    },
    {
      "Comune": "Rubiana",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Rubiera",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42048
    },
    {
      "Comune": "Ruda",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Rudiano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Rueglio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Ruffano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73049
    },
    {
      "Comune": "Ruffia",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Ruffrè-Mendola",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Rufina",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50068
    },
    {
      "Comune": "Ruinas",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9085
    },
    {
      "Comune": "Ruino",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Rumo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38020
    },
    {
      "Comune": "Ruoti",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85056
    },
    {
      "Comune": "Russi",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48026
    },
    {
      "Comune": "Rutigliano",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70018
    },
    {
      "Comune": "Rutino",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84070
    },
    {
      "Comune": "Ruviano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "Ruvo del Monte",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85020
    },
    {
      "Comune": "Ruvo di Puglia",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70037
    },
    {
      "Comune": "Sabaudia",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4016
    },
    {
      "Comune": "Sabbia",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13020
    },
    {
      "Comune": "Sabbio Chiese",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25070
    },
    {
      "Comune": "Sabbioneta",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46018
    },
    {
      "Comune": "Sacco",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84070
    },
    {
      "Comune": "Saccolongo",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35030
    },
    {
      "Comune": "Sacile",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33077
    },
    {
      "Comune": "Sacrofano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Sadali",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Sagama",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 8010
    },
    {
      "Comune": "Sagliano Micca",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13816
    },
    {
      "Comune": "Sagrado",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34078
    },
    {
      "Comune": "Sagron Mis",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Saint-Christophe",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Saint-Denis",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11023
    },
    {
      "Comune": "Saint-Marcel",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Saint-Nicolas",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Saint-Oyen",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11014
    },
    {
      "Comune": "Saint-Pierre",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Saint-Rhémy-en-Bosses",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Saint-Vincent",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11027
    },
    {
      "Comune": "Sala Baganza",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43038
    },
    {
      "Comune": "Sala Biellese",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13884
    },
    {
      "Comune": "Sala Bolognese",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40010
    },
    {
      "Comune": "Sala Comacina",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Sala Consilina",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84036
    },
    {
      "Comune": "Sala Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15030
    },
    {
      "Comune": "Salandra",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75017
    },
    {
      "Comune": "Salaparuta",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91020
    },
    {
      "Comune": "Salara",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "Salasco",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Salassa",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Salbertrand",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Salcedo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Salcito",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86026
    },
    {
      "Comune": "Sale",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15045
    },
    {
      "Comune": "Sale delle Langhe",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Sale Marasino",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25057
    },
    {
      "Comune": "Sale San Giovanni",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Salemi",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91018
    },
    {
      "Comune": "Salento",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84070
    },
    {
      "Comune": "Salerano Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Salerano sul Lambro",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26857
    },
    {
      "Comune": "Salerno",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": "841xx"
    },
    {
      "Comune": "Saletto",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35046
    },
    {
      "Comune": "Salgareda",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Sali Vercellese",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Salice Salentino",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73015
    },
    {
      "Comune": "Saliceto",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12079
    },
    {
      "Comune": "Salisano",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Salizzole",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37056
    },
    {
      "Comune": "Salle",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Salmour",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Salò",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25087
    },
    {
      "Comune": "Salorno",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Salsomaggiore Terme",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43039
    },
    {
      "Comune": "Saltara",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61030
    },
    {
      "Comune": "Saltrio",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21050
    },
    {
      "Comune": "Saludecio",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47835
    },
    {
      "Comune": "Saluggia",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13040
    },
    {
      "Comune": "Salussola",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13885
    },
    {
      "Comune": "Saluzzo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12037
    },
    {
      "Comune": "Salve",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73050
    },
    {
      "Comune": "Salvirola",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Salvitelle",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Salza di Pinerolo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Salza Irpina",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "Salzano",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30030
    },
    {
      "Comune": "Samarate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21017
    },
    {
      "Comune": "Samassi",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9030
    },
    {
      "Comune": "Samatzai",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Sambuca di Sicilia",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92017
    },
    {
      "Comune": "Sambuca Pistoiese",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51020
    },
    {
      "Comune": "Sambuci",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Sambuco",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Sammichele di Bari",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70010
    },
    {
      "Comune": "Samo",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89030
    },
    {
      "Comune": "Samolaco",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23027
    },
    {
      "Comune": "Samone",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Samone",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38059
    },
    {
      "Comune": "Sampeyre",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Samugheo",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9086
    },
    {
      "Comune": "San Bartolomeo al Mare",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18016
    },
    {
      "Comune": "San Bartolomeo in Galdo",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82028
    },
    {
      "Comune": "San Bartolomeo Val Cavargna",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "San Basile",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "San Basilio",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "San Bassano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "San Bellino",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45020
    },
    {
      "Comune": "San Benedetto Belbo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "San Benedetto dei Marsi",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67058
    },
    {
      "Comune": "San Benedetto del Tronto",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63074
    },
    {
      "Comune": "San Benedetto in Perillis",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "San Benedetto Po",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46027
    },
    {
      "Comune": "San Benedetto Ullano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "San Benedetto Val di Sambro",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40048
    },
    {
      "Comune": "San Benigno Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "San Bernardino Verbano",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28804
    },
    {
      "Comune": "San Biagio della Cima",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18036
    },
    {
      "Comune": "San Biagio di Callalta",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31048
    },
    {
      "Comune": "San Biagio Platani",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92020
    },
    {
      "Comune": "San Biagio Saracinisco",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "San Biase",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86020
    },
    {
      "Comune": "San Bonifacio",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37047
    },
    {
      "Comune": "San Buono",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "San Calogero",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89842
    },
    {
      "Comune": "San Candido",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39038
    },
    {
      "Comune": "San Canzian d'Isonzo",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34075
    },
    {
      "Comune": "San Carlo Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "San Casciano dei Bagni",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53040
    },
    {
      "Comune": "San Casciano in Val di Pesa",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50026
    },
    {
      "Comune": "San Cassiano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "San Cataldo",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93017
    },
    {
      "Comune": "San Cesareo",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "San Cesario di Lecce",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73016
    },
    {
      "Comune": "San Cesario sul Panaro",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41018
    },
    {
      "Comune": "San Chirico Nuovo",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "San Chirico Raparo",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85030
    },
    {
      "Comune": "San Cipirello",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90040
    },
    {
      "Comune": "San Cipriano d'Aversa",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81036
    },
    {
      "Comune": "San Cipriano Picentino",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84099
    },
    {
      "Comune": "San Cipriano Po",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27043
    },
    {
      "Comune": "San Clemente",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47832
    },
    {
      "Comune": "San Colombano al Lambro",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20078
    },
    {
      "Comune": "San Colombano Belmonte",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "San Colombano Certenoli",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16040
    },
    {
      "Comune": "San Cono",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95040
    },
    {
      "Comune": "San Cosmo Albanese",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "San Costantino Albanese",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85030
    },
    {
      "Comune": "San Costantino Calabro",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89851
    },
    {
      "Comune": "San Costanzo",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61039
    },
    {
      "Comune": "San Cristoforo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "San Damiano al Colle",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "San Damiano d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14015
    },
    {
      "Comune": "San Damiano Macra",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12029
    },
    {
      "Comune": "San Daniele del Friuli",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33038
    },
    {
      "Comune": "San Daniele Po",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26046
    },
    {
      "Comune": "San Demetrio Corone",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87069
    },
    {
      "Comune": "San Demetrio ne' Vestini",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67028
    },
    {
      "Comune": "San Didero",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "San Donà di Piave",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30027
    },
    {
      "Comune": "San Donaci",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72025
    },
    {
      "Comune": "San Donato di Lecce",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "San Donato di Ninea",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "San Donato Milanese",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20097
    },
    {
      "Comune": "San Donato Val di Comino",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3046
    },
    {
      "Comune": "San Dorligo della Valle - Dolina",
      "Provincia": "TS",
      "Regione": "FVG",
      "CAP": 34018
    },
    {
      "Comune": "San Fedele Intelvi",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22028
    },
    {
      "Comune": "San Fele",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85020
    },
    {
      "Comune": "San Felice a Cancello",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81027
    },
    {
      "Comune": "San Felice Circeo",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4017
    },
    {
      "Comune": "San Felice del Benaco",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25010
    },
    {
      "Comune": "San Felice del Molise",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86030
    },
    {
      "Comune": "San Felice sul Panaro",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41038
    },
    {
      "Comune": "San Ferdinando",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89026
    },
    {
      "Comune": "San Ferdinando di Puglia",
      "Provincia": "BT",
      "Regione": "PUG",
      "CAP": 76017
    },
    {
      "Comune": "San Fermo della Battaglia",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "San Fili",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87037
    },
    {
      "Comune": "San Filippo del Mela",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98044
    },
    {
      "Comune": "San Fior",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31020
    },
    {
      "Comune": "San Fiorano",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26848
    },
    {
      "Comune": "San Floriano del Collio",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "San Floro",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88021
    },
    {
      "Comune": "San Francesco al Campo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "San Fratello",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98075
    },
    {
      "Comune": "San Gavino Monreale",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9037
    },
    {
      "Comune": "San Gemini",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5029
    },
    {
      "Comune": "San Genesio Atesino",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39050
    },
    {
      "Comune": "San Genesio ed Uniti",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "San Gennaro Vesuviano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80040
    },
    {
      "Comune": "San Germano Chisone",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10065
    },
    {
      "Comune": "San Germano dei Berici",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "San Germano Vercellese",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13047
    },
    {
      "Comune": "San Gervasio Bresciano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "San Giacomo degli Schiavoni",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86030
    },
    {
      "Comune": "San Giacomo delle Segnate",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46020
    },
    {
      "Comune": "San Giacomo Filippo",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "San Giacomo Vercellese",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "San Gillio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "San Gimignano",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53037
    },
    {
      "Comune": "San Ginesio",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62026
    },
    {
      "Comune": "San Giorgio a Cremano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80046
    },
    {
      "Comune": "San Giorgio a Liri",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3047
    },
    {
      "Comune": "San Giorgio Albanese",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "San Giorgio Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "San Giorgio del Sannio",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82018
    },
    {
      "Comune": "San Giorgio della Richinvelda",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33095
    },
    {
      "Comune": "San Giorgio delle Pertiche",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "San Giorgio di Lomellina",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "San Giorgio di Mantova",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46030
    },
    {
      "Comune": "San Giorgio di Nogaro",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33058
    },
    {
      "Comune": "San Giorgio di Pesaro",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61030
    },
    {
      "Comune": "San Giorgio di Piano",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40016
    },
    {
      "Comune": "San Giorgio in Bosco",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "San Giorgio Ionico",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74027
    },
    {
      "Comune": "San Giorgio La Molara",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "San Giorgio Lucano",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75027
    },
    {
      "Comune": "San Giorgio Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "San Giorgio Morgeto",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89017
    },
    {
      "Comune": "San Giorgio Piacentino",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29019
    },
    {
      "Comune": "San Giorgio Scarampi",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14059
    },
    {
      "Comune": "San Giorgio su Legnano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "San Giorio di Susa",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "San Giovanni a Piro",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84070
    },
    {
      "Comune": "San Giovanni al Natisone",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33048
    },
    {
      "Comune": "San Giovanni Bianco",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24015
    },
    {
      "Comune": "San Giovanni d'Asso",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53020
    },
    {
      "Comune": "San Giovanni del Dosso",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46020
    },
    {
      "Comune": "San Giovanni di Gerace",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "San Giovanni Gemini",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92020
    },
    {
      "Comune": "San Giovanni Ilarione",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37035
    },
    {
      "Comune": "San Giovanni in Croce",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26037
    },
    {
      "Comune": "San Giovanni in Fiore",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87055
    },
    {
      "Comune": "San Giovanni in Galdo",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86010
    },
    {
      "Comune": "San Giovanni in Marignano",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47842
    },
    {
      "Comune": "San Giovanni in Persiceto",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40017
    },
    {
      "Comune": "San Giovanni Incarico",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3028
    },
    {
      "Comune": "San Giovanni la Punta",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95037
    },
    {
      "Comune": "San Giovanni Lipioni",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "San Giovanni Lupatoto",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37057
    },
    {
      "Comune": "San Giovanni Rotondo",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71013
    },
    {
      "Comune": "San Giovanni Suergiu",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "San Giovanni Teatino",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66020
    },
    {
      "Comune": "San Giovanni Valdarno",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52027
    },
    {
      "Comune": "San Giuliano del Sannio",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86010
    },
    {
      "Comune": "San Giuliano di Puglia",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86040
    },
    {
      "Comune": "San Giuliano Milanese",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20098
    },
    {
      "Comune": "San Giuliano Terme",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56017
    },
    {
      "Comune": "San Giuseppe Jato",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90048
    },
    {
      "Comune": "San Giuseppe Vesuviano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80047
    },
    {
      "Comune": "San Giustino",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6016
    },
    {
      "Comune": "San Giusto Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "San Godenzo",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50060
    },
    {
      "Comune": "San Gregorio da Sassola",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 10
    },
    {
      "Comune": "San Gregorio di Catania",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95027
    },
    {
      "Comune": "San Gregorio d'Ippona",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89853
    },
    {
      "Comune": "San Gregorio Magno",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "San Gregorio Matese",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "San Gregorio nelle Alpi",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32030
    },
    {
      "Comune": "San Lazzaro di Savena",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40068
    },
    {
      "Comune": "San Leo",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47865
    },
    {
      "Comune": "San Leonardo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "San Leonardo in Passiria",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39015
    },
    {
      "Comune": "San Leucio del Sannio",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82010
    },
    {
      "Comune": "San Lorenzello",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "San Lorenzo",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89069
    },
    {
      "Comune": "San Lorenzo al Mare",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18017
    },
    {
      "Comune": "San Lorenzo Bellizzi",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87070
    },
    {
      "Comune": "San Lorenzo del Vallo",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "San Lorenzo di Sebato",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "San Lorenzo in Banale",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38078
    },
    {
      "Comune": "San Lorenzo in Campo",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61047
    },
    {
      "Comune": "San Lorenzo Isontino",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "San Lorenzo Maggiore",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82034
    },
    {
      "Comune": "San Lorenzo Nuovo",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1020
    },
    {
      "Comune": "San Luca",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89030
    },
    {
      "Comune": "San Lucido",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87038
    },
    {
      "Comune": "San Lupo",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82034
    },
    {
      "Comune": "San Mango d'Aquino",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "San Mango Piemonte",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84090
    },
    {
      "Comune": "San Mango sul Calore",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "San Marcellino",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "San Marcello",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60030
    },
    {
      "Comune": "San Marcello Pistoiese",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51028
    },
    {
      "Comune": "San Marco Argentano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87018
    },
    {
      "Comune": "San Marco D'Alunzio",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "San Marco dei Cavoti",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82029
    },
    {
      "Comune": "San Marco Evangelista",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81020
    },
    {
      "Comune": "San Marco in Lamis",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71014
    },
    {
      "Comune": "San Marco la Catola",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71030
    },
    {
      "Comune": "San Martino al Tagliamento",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33098
    },
    {
      "Comune": "San Martino Alfieri",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14010
    },
    {
      "Comune": "San Martino Buon Albergo",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37036
    },
    {
      "Comune": "San Martino Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "San Martino d'Agri",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85030
    },
    {
      "Comune": "San Martino dall'Argine",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46010
    },
    {
      "Comune": "San Martino del Lago",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26040
    },
    {
      "Comune": "San Martino di Finita",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "San Martino di Lupari",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35018
    },
    {
      "Comune": "San Martino di Venezze",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "San Martino in Badia",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "San Martino in Passiria",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "San Martino in Pensilis",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86046
    },
    {
      "Comune": "San Martino in Rio",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42018
    },
    {
      "Comune": "San Martino in Strada",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26817
    },
    {
      "Comune": "San Martino Sannita",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82010
    },
    {
      "Comune": "San Martino Siccomario",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27028
    },
    {
      "Comune": "San Martino sulla Marrucina",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "San Martino Valle Caudina",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83018
    },
    {
      "Comune": "San Marzano di San Giuseppe",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74020
    },
    {
      "Comune": "San Marzano Oliveto",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14050
    },
    {
      "Comune": "San Marzano sul Sarno",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "San Massimo",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86027
    },
    {
      "Comune": "San Maurizio Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10077
    },
    {
      "Comune": "San Maurizio d'Opaglio",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28017
    },
    {
      "Comune": "San Mauro Castelverde",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90010
    },
    {
      "Comune": "San Mauro Cilento",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84070
    },
    {
      "Comune": "San Mauro di Saline",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37030
    },
    {
      "Comune": "San Mauro Forte",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75010
    },
    {
      "Comune": "San Mauro La Bruca",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84070
    },
    {
      "Comune": "San Mauro Marchesato",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88831
    },
    {
      "Comune": "San Mauro Pascoli",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47030
    },
    {
      "Comune": "San Mauro Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10099
    },
    {
      "Comune": "San Michele al Tagliamento",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30028
    },
    {
      "Comune": "San Michele all'Adige",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "San Michele di Ganzaria",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95040
    },
    {
      "Comune": "San Michele di Serino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "San Michele Mondovì",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12080
    },
    {
      "Comune": "San Michele Salentino",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72018
    },
    {
      "Comune": "San Miniato",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56028
    },
    {
      "Comune": "San Nazario",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36020
    },
    {
      "Comune": "San Nazzaro",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82018
    },
    {
      "Comune": "San Nazzaro Sesia",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "San Nazzaro Val Cavargna",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "San Nicandro Garganico",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71015
    },
    {
      "Comune": "San Nicola Arcella",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "San Nicola Baronia",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "San Nicola da Crissa",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89821
    },
    {
      "Comune": "San Nicola dell'Alto",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88817
    },
    {
      "Comune": "San Nicola la Strada",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81020
    },
    {
      "Comune": "San Nicola Manfredi",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82010
    },
    {
      "Comune": "San Nicolò d'Arcidano",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9097
    },
    {
      "Comune": "San Nicolò di Comelico",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32040
    },
    {
      "Comune": "San Nicolò Gerrei",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "San Pancrazio",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "San Pancrazio Salentino",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72026
    },
    {
      "Comune": "San Paolo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "San Paolo Albanese",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85030
    },
    {
      "Comune": "San Paolo Bel Sito",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "San Paolo Cervo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13812
    },
    {
      "Comune": "San Paolo d'Argon",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "San Paolo di Civitate",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71010
    },
    {
      "Comune": "San Paolo di Jesi",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60038
    },
    {
      "Comune": "San Paolo Solbrito",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14010
    },
    {
      "Comune": "San Pellegrino Terme",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24016
    },
    {
      "Comune": "San Pier d'Isonzo",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "San Pier Niceto",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98045
    },
    {
      "Comune": "San Piero a Sieve",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50037
    },
    {
      "Comune": "San Piero Patti",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98068
    },
    {
      "Comune": "San Pietro a Maida",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88025
    },
    {
      "Comune": "San Pietro al Natisone",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33049
    },
    {
      "Comune": "San Pietro al Tanagro",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "San Pietro Apostolo",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "San Pietro Avellana",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86088
    },
    {
      "Comune": "San Pietro Clarenza",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95030
    },
    {
      "Comune": "San Pietro di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32040
    },
    {
      "Comune": "San Pietro di Caridà",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89020
    },
    {
      "Comune": "San Pietro di Feletto",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31020
    },
    {
      "Comune": "San Pietro di Morubio",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37050
    },
    {
      "Comune": "San Pietro in Amantea",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87030
    },
    {
      "Comune": "San Pietro in Cariano",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37029
    },
    {
      "Comune": "San Pietro in Casale",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40018
    },
    {
      "Comune": "San Pietro in Cerro",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "San Pietro in Gu",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "San Pietro in Guarano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87047
    },
    {
      "Comune": "San Pietro in Lama",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "San Pietro Infine",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81049
    },
    {
      "Comune": "San Pietro Mosezzo",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "San Pietro Mussolino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36070
    },
    {
      "Comune": "San Pietro Val Lemina",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "San Pietro Vernotico",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72027
    },
    {
      "Comune": "San Pietro Viminario",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "San Pio delle Camere",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "San Polo dei Cavalieri",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 10
    },
    {
      "Comune": "San Polo d'Enza",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42020
    },
    {
      "Comune": "San Polo di Piave",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31020
    },
    {
      "Comune": "San Polo Matese",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86020
    },
    {
      "Comune": "San Ponso",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "San Possidonio",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41039
    },
    {
      "Comune": "San Potito Sannitico",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81016
    },
    {
      "Comune": "San Potito Ultra",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "San Prisco",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81054
    },
    {
      "Comune": "San Procopio",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89020
    },
    {
      "Comune": "San Prospero",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41030
    },
    {
      "Comune": "San Quirico d'Orcia",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53027
    },
    {
      "Comune": "San Quirino",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "San Raffaele Cimena",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "San Roberto",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89050
    },
    {
      "Comune": "San Rocco al Porto",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26865
    },
    {
      "Comune": "San Romano in Garfagnana",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55038
    },
    {
      "Comune": "San Rufo",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "San Salvatore di Fitalia",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "San Salvatore Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15046
    },
    {
      "Comune": "San Salvatore Telesino",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "San Salvo",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "San Sebastiano al Vesuvio",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80040
    },
    {
      "Comune": "San Sebastiano Curone",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15056
    },
    {
      "Comune": "San Sebastiano da Po",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "San Secondo di Pinerolo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "San Secondo Parmense",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43017
    },
    {
      "Comune": "San Severino Lucano",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85030
    },
    {
      "Comune": "San Severino Marche",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62027
    },
    {
      "Comune": "San Severo",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71016
    },
    {
      "Comune": "San Siro",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "San Sossio Baronia",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "San Sostene",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "San Sosti",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "San Sperate",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9026
    },
    {
      "Comune": "San Tammaro",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81050
    },
    {
      "Comune": "San Teodoro",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "San Teodoro",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "San Tomaso Agordino",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "San Valentino in Abruzzo Citeriore",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "San Valentino Torio",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "San Venanzo",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5010
    },
    {
      "Comune": "San Vendemiano",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31020
    },
    {
      "Comune": "San Vero Milis",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "San Vincenzo",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57027
    },
    {
      "Comune": "San Vincenzo la Costa",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87030
    },
    {
      "Comune": "San Vincenzo Valle Roveto",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67050
    },
    {
      "Comune": "San Vitaliano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "San Vito",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "San Vito al Tagliamento",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33078
    },
    {
      "Comune": "San Vito al Torre",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "San Vito Chietino",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66038
    },
    {
      "Comune": "San Vito dei Normanni",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72019
    },
    {
      "Comune": "San Vito di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32046
    },
    {
      "Comune": "San Vito di Fagagna",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "San Vito di Leguzzano",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "San Vito Lo Capo",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91010
    },
    {
      "Comune": "San Vito Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 30
    },
    {
      "Comune": "San Vito sullo Ionio",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88067
    },
    {
      "Comune": "San Vittore del Lazio",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "San Vittore Olona",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20028
    },
    {
      "Comune": "San Zeno di Montagna",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37010
    },
    {
      "Comune": "San Zeno Naviglio",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25010
    },
    {
      "Comune": "San Zenone al Lambro",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20070
    },
    {
      "Comune": "San Zenone al Po",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "San Zenone degli Ezzelini",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31020
    },
    {
      "Comune": "Sanarica",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73030
    },
    {
      "Comune": "Sandigliano",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13876
    },
    {
      "Comune": "Sandrigo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36066
    },
    {
      "Comune": "Sanfrè",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Sanfront",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Sangano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Sangiano",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21038
    },
    {
      "Comune": "Sangineto",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Sanguinetto",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37058
    },
    {
      "Comune": "Sanluri",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9025
    },
    {
      "Comune": "Sannazzaro de' Burgondi",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27039
    },
    {
      "Comune": "Sannicandro di Bari",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70028
    },
    {
      "Comune": "Sannicola",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73017
    },
    {
      "Comune": "Sanremo",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18038
    },
    {
      "Comune": "Sansepolcro",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52037
    },
    {
      "Comune": "Santa Brigida",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Santa Caterina Albanese",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Santa Caterina dello Ionio",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Santa Caterina Villarmosa",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93018
    },
    {
      "Comune": "Santa Cesarea Terme",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Santa Cristina d'Aspromonte",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89056
    },
    {
      "Comune": "Santa Cristina e Bissone",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Santa Cristina Gela",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Santa Cristina Valgardena",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39047
    },
    {
      "Comune": "Santa Croce Camerina",
      "Provincia": "RG",
      "Regione": "SIC",
      "CAP": 97017
    },
    {
      "Comune": "Santa Croce del Sannio",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82020
    },
    {
      "Comune": "Santa Croce di Magliano",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86047
    },
    {
      "Comune": "Santa Croce sull'Arno",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56029
    },
    {
      "Comune": "Santa Domenica Talao",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Santa Domenica Vittoria",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Santa Elisabetta",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92020
    },
    {
      "Comune": "Santa Fiora",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58037
    },
    {
      "Comune": "Santa Flavia",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90017
    },
    {
      "Comune": "Santa Giuletta",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27046
    },
    {
      "Comune": "Santa Giusta",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9096
    },
    {
      "Comune": "Santa Giustina",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32035
    },
    {
      "Comune": "Santa Giustina in Colle",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Santa Luce",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56040
    },
    {
      "Comune": "Santa Lucia del Mela",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98046
    },
    {
      "Comune": "Santa Lucia di Piave",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31025
    },
    {
      "Comune": "Santa Lucia di Serino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Santa Margherita d'Adige",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Santa Margherita di Belice",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92018
    },
    {
      "Comune": "Santa Margherita di Staffora",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Santa Margherita Ligure",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16038
    },
    {
      "Comune": "Santa Maria a Monte",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56020
    },
    {
      "Comune": "Santa Maria a Vico",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81028
    },
    {
      "Comune": "Santa Maria Capua Vetere",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81055
    },
    {
      "Comune": "Santa Maria Coghinas",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Santa Maria del Cedro",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Santa Maria del Molise",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86096
    },
    {
      "Comune": "Santa Maria della Versa",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27047
    },
    {
      "Comune": "Santa Maria di Licodia",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95038
    },
    {
      "Comune": "Santa Maria di Sala",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30036
    },
    {
      "Comune": "Santa Maria Hoè",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23889
    },
    {
      "Comune": "Santa Maria Imbaro",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66030
    },
    {
      "Comune": "Santa Maria la Carità",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80050
    },
    {
      "Comune": "Santa Maria La Fossa",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81050
    },
    {
      "Comune": "Santa Maria La Longa",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Santa Maria Maggiore",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28857
    },
    {
      "Comune": "Santa Maria Nuova",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60030
    },
    {
      "Comune": "Santa Marina",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84070
    },
    {
      "Comune": "Santa Marina Salina",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98050
    },
    {
      "Comune": "Santa Marinella",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 58
    },
    {
      "Comune": "Santa Ninfa",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91029
    },
    {
      "Comune": "Santa Paolina",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Santa Severina",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88832
    },
    {
      "Comune": "Santa Sofia",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47018
    },
    {
      "Comune": "Santa Sofia D'Epiro",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87048
    },
    {
      "Comune": "Santa Teresa di Riva",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98028
    },
    {
      "Comune": "Santa Teresa Gallura",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7028
    },
    {
      "Comune": "Santa Venerina",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95010
    },
    {
      "Comune": "Santa Vittoria d'Alba",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12069
    },
    {
      "Comune": "Santa Vittoria in Matenano",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63854
    },
    {
      "Comune": "Santadi",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Sant'Agapito",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86070
    },
    {
      "Comune": "Sant'Agata Bolognese",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40019
    },
    {
      "Comune": "Sant'Agata De' Goti",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82019
    },
    {
      "Comune": "Sant'Agata del Bianco",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89030
    },
    {
      "Comune": "Sant'Agata di Esaro",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Sant'Agata di Militello",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98076
    },
    {
      "Comune": "Sant'Agata di Puglia",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71028
    },
    {
      "Comune": "Sant'Agata Feltria",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47866
    },
    {
      "Comune": "Sant'Agata Fossili",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Sant'Agata Li Battiati",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95030
    },
    {
      "Comune": "Sant'Agata sul Santerno",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48020
    },
    {
      "Comune": "Sant'Agnello",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80065
    },
    {
      "Comune": "Sant'Agostino",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44047
    },
    {
      "Comune": "Sant'Albano Stura",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Sant'Alessio con Vialone",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27016
    },
    {
      "Comune": "Sant'Alessio in Aspromonte",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89050
    },
    {
      "Comune": "Sant'Alessio Siculo",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98030
    },
    {
      "Comune": "Sant'Alfio",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95010
    },
    {
      "Comune": "Sant'Ambrogio di Torino",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10057
    },
    {
      "Comune": "Sant'Ambrogio di Valpolicella",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37015
    },
    {
      "Comune": "Sant'Ambrogio sul Garigliano",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Sant'Anastasia",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80048
    },
    {
      "Comune": "Sant'Anatolia di Narco",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6040
    },
    {
      "Comune": "Sant'Andrea Apostolo dello Ionio",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Sant'Andrea del Garigliano",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Sant'Andrea di Conza",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83053
    },
    {
      "Comune": "Sant'Andrea Frius",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Sant'Angelo a Cupolo",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82010
    },
    {
      "Comune": "Sant'Angelo a Fasanella",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84027
    },
    {
      "Comune": "Sant'Angelo a Scala",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83010
    },
    {
      "Comune": "Sant'Angelo all'Esca",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "Sant'Angelo d'Alife",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81017
    },
    {
      "Comune": "Sant'Angelo dei Lombardi",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83054
    },
    {
      "Comune": "Sant'Angelo del Pesco",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86080
    },
    {
      "Comune": "Sant'Angelo di Brolo",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98060
    },
    {
      "Comune": "Sant'Angelo di Piove di Sacco",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Sant'Angelo in Lizzola",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61020
    },
    {
      "Comune": "Sant'Angelo in Pontano",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62020
    },
    {
      "Comune": "Sant'Angelo in Vado",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61048
    },
    {
      "Comune": "Sant'Angelo Le Fratte",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Sant'Angelo Limosano",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86020
    },
    {
      "Comune": "Sant'Angelo Lodigiano",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26866
    },
    {
      "Comune": "Sant'Angelo Lomellina",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Sant'Angelo Muxaro",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92020
    },
    {
      "Comune": "Sant'Angelo Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 10
    },
    {
      "Comune": "Sant'Anna Arresi",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Sant'Anna d'Alfaedo",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37020
    },
    {
      "Comune": "Sant'Antimo",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80029
    },
    {
      "Comune": "Sant'Antioco",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9017
    },
    {
      "Comune": "Sant'Antonino di Susa",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Sant'Antonio Abate",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80057
    },
    {
      "Comune": "Sant'Antonio di Gallura",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Sant'Apollinare",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3048
    },
    {
      "Comune": "Sant'Arcangelo",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85037
    },
    {
      "Comune": "Santarcangelo di Romagna",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47822
    },
    {
      "Comune": "Sant'Arcangelo Trimonte",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82021
    },
    {
      "Comune": "Sant'Arpino",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Sant'Arsenio",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84037
    },
    {
      "Comune": "Sante Marie",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67067
    },
    {
      "Comune": "Sant'Egidio alla Vibrata",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64016
    },
    {
      "Comune": "Sant'Egidio del Monte Albino",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "Sant'Elena",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Sant'Elena Sannita",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86095
    },
    {
      "Comune": "Sant'Elia a Pianisi",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86048
    },
    {
      "Comune": "Sant'Elia Fiumerapido",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3049
    },
    {
      "Comune": "Sant'Elpidio a Mare",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63811
    },
    {
      "Comune": "Santena",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10026
    },
    {
      "Comune": "Santeramo in Colle",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70029
    },
    {
      "Comune": "Sant'Eufemia a Maiella",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Sant'Eufemia d'Aspromonte",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89027
    },
    {
      "Comune": "Sant'Eusanio del Sangro",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66037
    },
    {
      "Comune": "Sant'Eusanio Forconese",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Santhià",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13048
    },
    {
      "Comune": "Santi Cosma e Damiano",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4020
    },
    {
      "Comune": "Sant'Ilario dello Ionio",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Sant'Ilario d'Enza",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42049
    },
    {
      "Comune": "Sant'Ippolito",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61040
    },
    {
      "Comune": "Santo Stefano al Mare",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18010
    },
    {
      "Comune": "Santo Stefano Belbo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12058
    },
    {
      "Comune": "Santo Stefano d'Aveto",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16049
    },
    {
      "Comune": "Santo Stefano del Sole",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "Santo Stefano di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32045
    },
    {
      "Comune": "Santo Stefano di Camastra",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98077
    },
    {
      "Comune": "Santo Stefano di Magra",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19037
    },
    {
      "Comune": "Santo Stefano di Rogliano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87056
    },
    {
      "Comune": "Santo Stefano di Sessanio",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Santo Stefano in Aspromonte",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89057
    },
    {
      "Comune": "Santo Stefano Lodigiano",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26849
    },
    {
      "Comune": "Santo Stefano Quisquina",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92020
    },
    {
      "Comune": "Santo Stefano Roero",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Santo Stefano Ticino",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Santo Stino di Livenza",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30029
    },
    {
      "Comune": "Sant'Olcese",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16010
    },
    {
      "Comune": "Santomenna",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Sant'Omero",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64027
    },
    {
      "Comune": "Sant'Omobono Terme",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24038
    },
    {
      "Comune": "Sant'Onofrio",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89843
    },
    {
      "Comune": "Santopadre",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Sant'Oreste",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Santorso",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36014
    },
    {
      "Comune": "Sant'Orsola Terme",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Santu Lussurgiu",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9075
    },
    {
      "Comune": "Sant'Urbano",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Sanza",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "Sanzeno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Saonara",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Saponara",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98047
    },
    {
      "Comune": "Sappada",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32047
    },
    {
      "Comune": "Sapri",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84073
    },
    {
      "Comune": "Saracena",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Saracinesco",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Sarcedo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "Sarconi",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Sardara",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9030
    },
    {
      "Comune": "Sardigliano",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Sarego",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Sarentino",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39058
    },
    {
      "Comune": "Sarezzano",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Sarezzo",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25068
    },
    {
      "Comune": "Sarmato",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Sarmede",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31026
    },
    {
      "Comune": "Sarnano",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62028
    },
    {
      "Comune": "Sarnico",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24067
    },
    {
      "Comune": "Sarno",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84087
    },
    {
      "Comune": "Sarnonico",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38011
    },
    {
      "Comune": "Saronno",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21047
    },
    {
      "Comune": "Sarre",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Sarroch",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9018
    },
    {
      "Comune": "Sarsina",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47027
    },
    {
      "Comune": "Sarteano",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53047
    },
    {
      "Comune": "Sartirana Lomellina",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Sarule",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Sarzana",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19038
    },
    {
      "Comune": "Sassano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84038
    },
    {
      "Comune": "Sassari",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7100
    },
    {
      "Comune": "Sassello",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17046
    },
    {
      "Comune": "Sassetta",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57020
    },
    {
      "Comune": "Sassinoro",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82026
    },
    {
      "Comune": "Sasso di Castalda",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Sasso Marconi",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40037
    },
    {
      "Comune": "Sassocorvaro",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61028
    },
    {
      "Comune": "Sassofeltrio",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61013
    },
    {
      "Comune": "Sassoferrato",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60041
    },
    {
      "Comune": "Sassuolo",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41049
    },
    {
      "Comune": "Satriano",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Satriano di Lucania",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Sauris",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Sauze di Cesana",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10054
    },
    {
      "Comune": "Sauze d'Oulx",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Sava",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74028
    },
    {
      "Comune": "Savelli",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88825
    },
    {
      "Comune": "Saviano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80039
    },
    {
      "Comune": "Savigliano",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12038
    },
    {
      "Comune": "Savignano Irpino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Savignano sul Panaro",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41056
    },
    {
      "Comune": "Savignano sul Rubicone",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47039
    },
    {
      "Comune": "Savigno",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40060
    },
    {
      "Comune": "Savignone",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16010
    },
    {
      "Comune": "Saviore dell'Adamello",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25040
    },
    {
      "Comune": "Savoca",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98038
    },
    {
      "Comune": "Savogna",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Savogna d'Isonzo",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "Savoia di Lucania",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Savona",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17100
    },
    {
      "Comune": "Scafa",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65027
    },
    {
      "Comune": "Scafati",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84018
    },
    {
      "Comune": "Scagnello",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Scala",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "Scala Coeli",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "Scaldasole",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Scalea",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87029
    },
    {
      "Comune": "Scalenghe",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Scaletta Zanclea",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98029
    },
    {
      "Comune": "Scampitella",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "Scandale",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88831
    },
    {
      "Comune": "Scandiano",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42019
    },
    {
      "Comune": "Scandicci",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50018
    },
    {
      "Comune": "Scandolara Ravara",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26040
    },
    {
      "Comune": "Scandolara Ripa d'Oglio",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26047
    },
    {
      "Comune": "Scandriglia",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2038
    },
    {
      "Comune": "Scanno",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67038
    },
    {
      "Comune": "Scano di Montiferro",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9078
    },
    {
      "Comune": "Scansano",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58054
    },
    {
      "Comune": "Scanzano Jonico",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75020
    },
    {
      "Comune": "Scanzorosciate",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Scapoli",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86070
    },
    {
      "Comune": "Scarlino",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58020
    },
    {
      "Comune": "Scarmagno",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Scarnafigi",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Scarperia",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50038
    },
    {
      "Comune": "Scena",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39017
    },
    {
      "Comune": "Scerni",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66020
    },
    {
      "Comune": "Scheggia e Pascelupo",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6027
    },
    {
      "Comune": "Scheggino",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6040
    },
    {
      "Comune": "Schiavi di Abruzzo",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66045
    },
    {
      "Comune": "Schiavon",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36060
    },
    {
      "Comune": "Schignano",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Schilpario",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Schio",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36015
    },
    {
      "Comune": "Schivenoglia",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46020
    },
    {
      "Comune": "Sciacca",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92019
    },
    {
      "Comune": "Sciara",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Scicli",
      "Provincia": "RG",
      "Regione": "SIC",
      "CAP": 97018
    },
    {
      "Comune": "Scido",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89010
    },
    {
      "Comune": "Scigliano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87057
    },
    {
      "Comune": "Scilla",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89058
    },
    {
      "Comune": "Scillato",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Sciolze",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Scisciano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "Sclafani Bagni",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Scontrone",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Scopa",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13027
    },
    {
      "Comune": "Scopello",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13028
    },
    {
      "Comune": "Scoppito",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67019
    },
    {
      "Comune": "Scordia",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95048
    },
    {
      "Comune": "Scorrano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Scorzè",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30037
    },
    {
      "Comune": "Scurcola Marsicana",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67068
    },
    {
      "Comune": "Scurelle",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Scurzolengo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14030
    },
    {
      "Comune": "Seborga",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18012
    },
    {
      "Comune": "Secinaro",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67029
    },
    {
      "Comune": "Seclì",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73050
    },
    {
      "Comune": "Secugnago",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26826
    },
    {
      "Comune": "Sedegliano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33039
    },
    {
      "Comune": "Sedico",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32036
    },
    {
      "Comune": "Sedilo",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9076
    },
    {
      "Comune": "Sedini",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7035
    },
    {
      "Comune": "Sedriano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20018
    },
    {
      "Comune": "Sedrina",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Sefro",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62025
    },
    {
      "Comune": "Segariu",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Seggiano",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58038
    },
    {
      "Comune": "Segni",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 37
    },
    {
      "Comune": "Segonzano",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38047
    },
    {
      "Comune": "Segrate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20090
    },
    {
      "Comune": "Segusino",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Selargius",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9047
    },
    {
      "Comune": "Selci",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Selegas",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Sellano",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6030
    },
    {
      "Comune": "Sellero",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Sellia",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Sellia Marina",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Selva dei Molini",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Selva di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Selva di Progno",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37030
    },
    {
      "Comune": "Selva di Val Gardena",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39048
    },
    {
      "Comune": "Selvazzano Dentro",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35030
    },
    {
      "Comune": "Selve Marcone",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13841
    },
    {
      "Comune": "Selvino",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Semestene",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Semiana",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Seminara",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89028
    },
    {
      "Comune": "Semproniano",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58055
    },
    {
      "Comune": "Senago",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20030
    },
    {
      "Comune": "Senales",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39020
    },
    {
      "Comune": "Senale-San Felice",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "Seneghe",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Senerchia",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "Seniga",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25020
    },
    {
      "Comune": "Senigallia",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60019
    },
    {
      "Comune": "Senis",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Senise",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85038
    },
    {
      "Comune": "Senna Comasco",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Senna Lodigiana",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26856
    },
    {
      "Comune": "Sennariolo",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9078
    },
    {
      "Comune": "Sennori",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7036
    },
    {
      "Comune": "Senorbì",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Sepino",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86017
    },
    {
      "Comune": "Seppiana",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28843
    },
    {
      "Comune": "Sequals",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33090
    },
    {
      "Comune": "Seravezza",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55047
    },
    {
      "Comune": "Serdiana",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Seregno",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20831
    },
    {
      "Comune": "Seren del Grappa",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32030
    },
    {
      "Comune": "Sergnano",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Seriate",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24068
    },
    {
      "Comune": "Serina",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24017
    },
    {
      "Comune": "Serino",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83028
    },
    {
      "Comune": "Serle",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Sermide",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46028
    },
    {
      "Comune": "Sermoneta",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4013
    },
    {
      "Comune": "Sernaglia della Battaglia",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31020
    },
    {
      "Comune": "Sernio",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23030
    },
    {
      "Comune": "Serole",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14050
    },
    {
      "Comune": "Serra d'Aiello",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87030
    },
    {
      "Comune": "Serra de' Conti",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60030
    },
    {
      "Comune": "Serra Pedace",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Serra Riccò",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16010
    },
    {
      "Comune": "Serra San Bruno",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89822
    },
    {
      "Comune": "Serra San Quirico",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60048
    },
    {
      "Comune": "Serra Sant'Abbondio",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61040
    },
    {
      "Comune": "Serracapriola",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71010
    },
    {
      "Comune": "Serradifalco",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93010
    },
    {
      "Comune": "Serralunga d'Alba",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Serralunga di Crea",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Serramanna",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9038
    },
    {
      "Comune": "Serramazzoni",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41028
    },
    {
      "Comune": "Serramezzana",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84070
    },
    {
      "Comune": "Serramonacesca",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65025
    },
    {
      "Comune": "Serrapetrona",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62020
    },
    {
      "Comune": "Serrara Fontana",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80070
    },
    {
      "Comune": "Serrastretta",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Serrata",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89020
    },
    {
      "Comune": "Serravalle a Po",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46030
    },
    {
      "Comune": "Serravalle di Chienti",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62038
    },
    {
      "Comune": "Serravalle Langhe",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Serravalle Pistoiese",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51030
    },
    {
      "Comune": "Serravalle Scrivia",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15069
    },
    {
      "Comune": "Serravalle Sesia",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13037
    },
    {
      "Comune": "Serre",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84028
    },
    {
      "Comune": "Serrenti",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9027
    },
    {
      "Comune": "Serri",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Serrone",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3010
    },
    {
      "Comune": "Serrungarina",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61030
    },
    {
      "Comune": "Sersale",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88054
    },
    {
      "Comune": "Servigliano",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63839
    },
    {
      "Comune": "Sessa Aurunca",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81037
    },
    {
      "Comune": "Sessa Cilento",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84074
    },
    {
      "Comune": "Sessame",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14058
    },
    {
      "Comune": "Sessano del Molise",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86097
    },
    {
      "Comune": "Sesta Godano",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Sestino",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52038
    },
    {
      "Comune": "Sesto",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Sesto al Reghena",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33079
    },
    {
      "Comune": "Sesto Calende",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21018
    },
    {
      "Comune": "Sesto Campano",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86078
    },
    {
      "Comune": "Sesto ed Uniti",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26028
    },
    {
      "Comune": "Sesto Fiorentino",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50019
    },
    {
      "Comune": "Sesto San Giovanni",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20099
    },
    {
      "Comune": "Sestola",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41029
    },
    {
      "Comune": "Sestri Levante",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16039
    },
    {
      "Comune": "Sestriere",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10058
    },
    {
      "Comune": "Sestu",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9028
    },
    {
      "Comune": "Settala",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20090
    },
    {
      "Comune": "Settefrati",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Settime",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Settimo Milanese",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20019
    },
    {
      "Comune": "Settimo Rottaro",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Settimo San Pietro",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Settimo Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10036
    },
    {
      "Comune": "Settimo Vittone",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Settingiano",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88040
    },
    {
      "Comune": "Setzu",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9029
    },
    {
      "Comune": "Seui",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8037
    },
    {
      "Comune": "Seulo",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Seveso",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20822
    },
    {
      "Comune": "Sezzadio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15079
    },
    {
      "Comune": "Sezze",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4018
    },
    {
      "Comune": "Sfruz",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Sgonico",
      "Provincia": "TS",
      "Regione": "FVG",
      "CAP": 34010
    },
    {
      "Comune": "Sgurgola",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3010
    },
    {
      "Comune": "Siamaggiore",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Siamanna",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Siano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84088
    },
    {
      "Comune": "Siapiccia",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Sicignano degli Alburni",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84029
    },
    {
      "Comune": "Siculiana",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92010
    },
    {
      "Comune": "Siddi",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Siderno",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89048
    },
    {
      "Comune": "Siena",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53100
    },
    {
      "Comune": "Sigillo",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6028
    },
    {
      "Comune": "Signa",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50058
    },
    {
      "Comune": "Silandro",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39028
    },
    {
      "Comune": "Silanus",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8017
    },
    {
      "Comune": "Silea",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31057
    },
    {
      "Comune": "Siligo",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7040
    },
    {
      "Comune": "Siliqua",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Silius",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Sillano",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55030
    },
    {
      "Comune": "Sillavengo",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28064
    },
    {
      "Comune": "Silvano d'Orba",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Silvano Pietra",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Silvi",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64028
    },
    {
      "Comune": "Simala",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Simaxis",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9088
    },
    {
      "Comune": "Simbario",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89822
    },
    {
      "Comune": "Simeri Crichi",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Sinagra",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98069
    },
    {
      "Comune": "Sinalunga",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53048
    },
    {
      "Comune": "Sindia",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8018
    },
    {
      "Comune": "Sini",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Sinio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Siniscola",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8029
    },
    {
      "Comune": "Sinnai",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9048
    },
    {
      "Comune": "Sinopoli",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89020
    },
    {
      "Comune": "Siracusa",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96100
    },
    {
      "Comune": "Sirignano",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Siris",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Sirmione",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25019
    },
    {
      "Comune": "Sirolo",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60020
    },
    {
      "Comune": "Sirone",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23844
    },
    {
      "Comune": "Siror",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38054
    },
    {
      "Comune": "Sirtori",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23896
    },
    {
      "Comune": "Sissa",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43018
    },
    {
      "Comune": "Siurgus Donigala",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Siziano",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Sizzano",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28070
    },
    {
      "Comune": "Sluderno",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39020
    },
    {
      "Comune": "Smarano",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Smerillo",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63856
    },
    {
      "Comune": "Soave",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37038
    },
    {
      "Comune": "Socchieve",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Soddì",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Sogliano al Rubicone",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47030
    },
    {
      "Comune": "Sogliano Cavour",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "Soglio",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Soiano del Lago",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Solagna",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36020
    },
    {
      "Comune": "Solarino",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96010
    },
    {
      "Comune": "Solaro",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20020
    },
    {
      "Comune": "Solarolo",
      "Provincia": "RA",
      "Regione": "EMR",
      "CAP": 48027
    },
    {
      "Comune": "Solarolo Rainerio",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Solarussa",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9077
    },
    {
      "Comune": "Solbiate",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Solbiate Arno",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21048
    },
    {
      "Comune": "Solbiate Olona",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21058
    },
    {
      "Comune": "Soldano",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18036
    },
    {
      "Comune": "Soleminis",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Solero",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15029
    },
    {
      "Comune": "Solesino",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35047
    },
    {
      "Comune": "Soleto",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "Solferino",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46040
    },
    {
      "Comune": "Soliera",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41019
    },
    {
      "Comune": "Solignano",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43040
    },
    {
      "Comune": "Solofra",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83029
    },
    {
      "Comune": "Solonghello",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Solopaca",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82036
    },
    {
      "Comune": "Solto Collina",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Solza",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Somaglia",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26867
    },
    {
      "Comune": "Somano",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Somma Lombardo",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21019
    },
    {
      "Comune": "Somma Vesuviana",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80049
    },
    {
      "Comune": "Sommacampagna",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37066
    },
    {
      "Comune": "Sommariva del Bosco",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12048
    },
    {
      "Comune": "Sommariva Perno",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Sommatino",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93019
    },
    {
      "Comune": "Sommo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27048
    },
    {
      "Comune": "Sona",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37060
    },
    {
      "Comune": "Soncino",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26029
    },
    {
      "Comune": "Sondalo",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23035
    },
    {
      "Comune": "Sondrio",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23100
    },
    {
      "Comune": "Songavazzo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Sonico",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25048
    },
    {
      "Comune": "Sonnino",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4010
    },
    {
      "Comune": "Soprana",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13834
    },
    {
      "Comune": "Sora",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3039
    },
    {
      "Comune": "Soraga",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Soragna",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43019
    },
    {
      "Comune": "Sorano",
      "Provincia": "GR",
      "Regione": "TOS",
      "CAP": 58010
    },
    {
      "Comune": "Sorbo San Basile",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Sorbo Serpico",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "Sorbolo",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43058
    },
    {
      "Comune": "Sordevolo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13817
    },
    {
      "Comune": "Sordio",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26858
    },
    {
      "Comune": "Soresina",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26015
    },
    {
      "Comune": "Sorgà",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37060
    },
    {
      "Comune": "Sorgono",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8038
    },
    {
      "Comune": "Sori",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16030
    },
    {
      "Comune": "Sorianello",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89831
    },
    {
      "Comune": "Soriano Calabro",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89831
    },
    {
      "Comune": "Soriano nel Cimino",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1038
    },
    {
      "Comune": "Sorico",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Soriso",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Sorisole",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Sormano",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22030
    },
    {
      "Comune": "Sorradile",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Sorrento",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80067
    },
    {
      "Comune": "Sorso",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7037
    },
    {
      "Comune": "Sortino",
      "Provincia": "SR",
      "Regione": "SIC",
      "CAP": 96010
    },
    {
      "Comune": "Sospiro",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26048
    },
    {
      "Comune": "Sospirolo",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32037
    },
    {
      "Comune": "Sossano",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Sostegno",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13868
    },
    {
      "Comune": "Sotto il Monte Giovanni XXIII",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24039
    },
    {
      "Comune": "Sover",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38048
    },
    {
      "Comune": "Soverato",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88068
    },
    {
      "Comune": "Sovere",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Soveria Mannelli",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88049
    },
    {
      "Comune": "Soveria Simeri",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Soverzene",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32010
    },
    {
      "Comune": "Sovicille",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53018
    },
    {
      "Comune": "Sovico",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20845
    },
    {
      "Comune": "Sovizzo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36050
    },
    {
      "Comune": "Sovramonte",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32030
    },
    {
      "Comune": "Sozzago",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Spadafora",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98048
    },
    {
      "Comune": "Spadola",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89822
    },
    {
      "Comune": "Sparanise",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81056
    },
    {
      "Comune": "Sparone",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Specchia",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73040
    },
    {
      "Comune": "Spello",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6038
    },
    {
      "Comune": "Spera",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38059
    },
    {
      "Comune": "Sperlinga",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94010
    },
    {
      "Comune": "Sperlonga",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4029
    },
    {
      "Comune": "Sperone",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Spessa",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Spezzano Albanese",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87019
    },
    {
      "Comune": "Spezzano della Sila",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87058
    },
    {
      "Comune": "Spezzano Piccolo",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Spiazzo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38088
    },
    {
      "Comune": "Spigno Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15018
    },
    {
      "Comune": "Spigno Saturnia",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4020
    },
    {
      "Comune": "Spilamberto",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41057
    },
    {
      "Comune": "Spilimbergo",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33097
    },
    {
      "Comune": "Spilinga",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89864
    },
    {
      "Comune": "Spinadesco",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Spinazzola",
      "Provincia": "BT",
      "Regione": "PUG",
      "CAP": 76014
    },
    {
      "Comune": "Spinea",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30038
    },
    {
      "Comune": "Spineda",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Spinete",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86020
    },
    {
      "Comune": "Spineto Scrivia",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Spinetoli",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63078
    },
    {
      "Comune": "Spino d'Adda",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26016
    },
    {
      "Comune": "Spinone al Lago",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Spinoso",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85039
    },
    {
      "Comune": "Spirano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Spoleto",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6049
    },
    {
      "Comune": "Spoltore",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Spongano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73038
    },
    {
      "Comune": "Spormaggiore",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Sporminore",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Spotorno",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17028
    },
    {
      "Comune": "Spresiano",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31027
    },
    {
      "Comune": "Spriana",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Squillace",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88069
    },
    {
      "Comune": "Squinzano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73018
    },
    {
      "Comune": "Staffolo",
      "Provincia": "AN",
      "Regione": "MAR",
      "CAP": 60039
    },
    {
      "Comune": "Stagno Lombardo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26049
    },
    {
      "Comune": "Staiti",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89030
    },
    {
      "Comune": "Stalettì",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88069
    },
    {
      "Comune": "Stanghella",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35048
    },
    {
      "Comune": "Staranzano",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34079
    },
    {
      "Comune": "Statte",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74010
    },
    {
      "Comune": "Stazzano",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Stazzema",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55040
    },
    {
      "Comune": "Stazzona",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Stefanaconi",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89843
    },
    {
      "Comune": "Stella",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17044
    },
    {
      "Comune": "Stella Cilento",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84070
    },
    {
      "Comune": "Stellanello",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17020
    },
    {
      "Comune": "Stelvio",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39029
    },
    {
      "Comune": "Stenico",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38070
    },
    {
      "Comune": "Sternatia",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "Stezzano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Stia",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52017
    },
    {
      "Comune": "Stienta",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45039
    },
    {
      "Comune": "Stigliano",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75018
    },
    {
      "Comune": "Stignano",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89040
    },
    {
      "Comune": "Stilo",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89049
    },
    {
      "Comune": "Stimigliano",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2048
    },
    {
      "Comune": "Stintino",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7040
    },
    {
      "Comune": "Stio",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84075
    },
    {
      "Comune": "Stornara",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71047
    },
    {
      "Comune": "Stornarella",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71048
    },
    {
      "Comune": "Storo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38089
    },
    {
      "Comune": "Stra",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30039
    },
    {
      "Comune": "Stradella",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27049
    },
    {
      "Comune": "Strambinello",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Strambino",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10019
    },
    {
      "Comune": "Strangolagalli",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3020
    },
    {
      "Comune": "Stregna",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Strembo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38080
    },
    {
      "Comune": "Stresa",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28838
    },
    {
      "Comune": "Strevi",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15019
    },
    {
      "Comune": "Striano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80040
    },
    {
      "Comune": "Strigno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38059
    },
    {
      "Comune": "Strona",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13823
    },
    {
      "Comune": "Stroncone",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5039
    },
    {
      "Comune": "Strongoli",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88816
    },
    {
      "Comune": "Stroppiana",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13010
    },
    {
      "Comune": "Stroppo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Strozza",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Sturno",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83055
    },
    {
      "Comune": "Suardi",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Subbiano",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52010
    },
    {
      "Comune": "Subiaco",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 28
    },
    {
      "Comune": "Succivo",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Sueglio",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23835
    },
    {
      "Comune": "Suelli",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Suello",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23867
    },
    {
      "Comune": "Suisio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Sulbiate",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20884
    },
    {
      "Comune": "Sulmona",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67039
    },
    {
      "Comune": "Sulzano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25058
    },
    {
      "Comune": "Sumirago",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Summonte",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83010
    },
    {
      "Comune": "Suni",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 8010
    },
    {
      "Comune": "Suno",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28019
    },
    {
      "Comune": "Supersano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73040
    },
    {
      "Comune": "Supino",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3019
    },
    {
      "Comune": "Surano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73030
    },
    {
      "Comune": "Surbo",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "Susa",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10059
    },
    {
      "Comune": "Susegana",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31058
    },
    {
      "Comune": "Sustinente",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46030
    },
    {
      "Comune": "Sutera",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93010
    },
    {
      "Comune": "Sutri",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1015
    },
    {
      "Comune": "Sutrio",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Suvereto",
      "Provincia": "LI",
      "Regione": "TOS",
      "CAP": 57028
    },
    {
      "Comune": "Suzzara",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46029
    },
    {
      "Comune": "Taceno",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23837
    },
    {
      "Comune": "Tadasuni",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Taggia",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18018
    },
    {
      "Comune": "Tagliacozzo",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67069
    },
    {
      "Comune": "Taglio di Po",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45019
    },
    {
      "Comune": "Tagliolo Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15070
    },
    {
      "Comune": "Taibon Agordino",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32027
    },
    {
      "Comune": "Taino",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Taio",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38012
    },
    {
      "Comune": "Taipana",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Talamello",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47867
    },
    {
      "Comune": "Talamona",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23018
    },
    {
      "Comune": "Talana",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Taleggio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Talla",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52010
    },
    {
      "Comune": "Talmassons",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Tambre",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32010
    },
    {
      "Comune": "Taormina",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98039
    },
    {
      "Comune": "Tarano",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Taranta Peligna",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66018
    },
    {
      "Comune": "Tarantasca",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Taranto",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": "7412x"
    },
    {
      "Comune": "Tarcento",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33017
    },
    {
      "Comune": "Tarquinia",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1016
    },
    {
      "Comune": "Tarsia",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Tartano",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Tarvisio",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33018
    },
    {
      "Comune": "Tarzo",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31020
    },
    {
      "Comune": "Tassarolo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Tassullo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Taurano",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83020
    },
    {
      "Comune": "Taurasi",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Taurianova",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89029
    },
    {
      "Comune": "Taurisano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73056
    },
    {
      "Comune": "Tavagnacco",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Tavagnasco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Tavarnelle Val di Pesa",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50028
    },
    {
      "Comune": "Tavazzano con Villavesco",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26838
    },
    {
      "Comune": "Tavenna",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86030
    },
    {
      "Comune": "Taverna",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88055
    },
    {
      "Comune": "Tavernerio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22038
    },
    {
      "Comune": "Tavernola Bergamasca",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Tavernole sul Mella",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25060
    },
    {
      "Comune": "Taviano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73057
    },
    {
      "Comune": "Tavigliano",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13811
    },
    {
      "Comune": "Tavoleto",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61020
    },
    {
      "Comune": "Tavullia",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61010
    },
    {
      "Comune": "Teana",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85032
    },
    {
      "Comune": "Teano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81057
    },
    {
      "Comune": "Teggiano",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84039
    },
    {
      "Comune": "Teglio",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23036
    },
    {
      "Comune": "Teglio Veneto",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30025
    },
    {
      "Comune": "Telese Terme",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82037
    },
    {
      "Comune": "Telgate",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Telti",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7020
    },
    {
      "Comune": "Telve",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Telve di Sopra",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Tempio Pausania",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7029
    },
    {
      "Comune": "Temù",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Tenna",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Tenno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Teolo",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35037
    },
    {
      "Comune": "Teor",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Teora",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83056
    },
    {
      "Comune": "Teramo",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64100
    },
    {
      "Comune": "Terdobbiate",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28070
    },
    {
      "Comune": "Terelle",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Terento",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Terenzo",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43040
    },
    {
      "Comune": "Tergu",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Terlago",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38070
    },
    {
      "Comune": "Terlano",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39018
    },
    {
      "Comune": "Terlizzi",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70038
    },
    {
      "Comune": "Terme Vigliatore",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98050
    },
    {
      "Comune": "Termeno sulla Strada del Vino",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Termini Imerese",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90018
    },
    {
      "Comune": "Termoli",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86039
    },
    {
      "Comune": "Ternate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Ternengo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13844
    },
    {
      "Comune": "Terni",
      "Provincia": "TR",
      "Regione": "UMB",
      "CAP": 5100
    },
    {
      "Comune": "Terno d'Isola",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Terracina",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4019
    },
    {
      "Comune": "Terragnolo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Terralba",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9098
    },
    {
      "Comune": "Terranova da Sibari",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Terranova dei Passerini",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26827
    },
    {
      "Comune": "Terranova di Pollino",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85030
    },
    {
      "Comune": "Terranova Sappo Minulio",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89010
    },
    {
      "Comune": "Terranuova Bracciolini",
      "Provincia": "AR",
      "Regione": "TOS",
      "CAP": 52028
    },
    {
      "Comune": "Terrasini",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90049
    },
    {
      "Comune": "Terrassa Padovana",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Terravecchia",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "Terrazzo",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37040
    },
    {
      "Comune": "Terres",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Terricciola",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56030
    },
    {
      "Comune": "Terruggia",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15030
    },
    {
      "Comune": "Tertenia",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8047
    },
    {
      "Comune": "Terzigno",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80040
    },
    {
      "Comune": "Terzo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Terzo d'Aquileia",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Terzolas",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38027
    },
    {
      "Comune": "Terzorio",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18010
    },
    {
      "Comune": "Tesero",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38038
    },
    {
      "Comune": "Tesimo",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "Tessennano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Testico",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17020
    },
    {
      "Comune": "Teti",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Teulada",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9019
    },
    {
      "Comune": "Teverola",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Tezze sul Brenta",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36056
    },
    {
      "Comune": "Thiene",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36016
    },
    {
      "Comune": "Thiesi",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7047
    },
    {
      "Comune": "Tiana",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Ticengo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26020
    },
    {
      "Comune": "Ticineto",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Tiggiano",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73030
    },
    {
      "Comune": "Tiglieto",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16010
    },
    {
      "Comune": "Tigliole",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14016
    },
    {
      "Comune": "Tignale",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Tinnura",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 8010
    },
    {
      "Comune": "Tione degli Abruzzi",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Tione di Trento",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38079
    },
    {
      "Comune": "Tirano",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23037
    },
    {
      "Comune": "Tires",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39050
    },
    {
      "Comune": "Tiriolo",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88056
    },
    {
      "Comune": "Tirolo",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39019
    },
    {
      "Comune": "Tissi",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7040
    },
    {
      "Comune": "Tito",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85050
    },
    {
      "Comune": "Tivoli",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 19
    },
    {
      "Comune": "Tizzano Val Parma",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43028
    },
    {
      "Comune": "Toano",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42010
    },
    {
      "Comune": "Tocco Caudio",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Tocco da Casauria",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65028
    },
    {
      "Comune": "Toceno",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28858
    },
    {
      "Comune": "Todi",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6059
    },
    {
      "Comune": "Toffia",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2039
    },
    {
      "Comune": "Toirano",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17055
    },
    {
      "Comune": "Tolentino",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62029
    },
    {
      "Comune": "Tolfa",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 59
    },
    {
      "Comune": "Tollegno",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13818
    },
    {
      "Comune": "Tollo",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Tolmezzo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33028
    },
    {
      "Comune": "Tolve",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85017
    },
    {
      "Comune": "Tombolo",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35019
    },
    {
      "Comune": "Ton",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Tonadico",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38054
    },
    {
      "Comune": "Tonara",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8039
    },
    {
      "Comune": "Tonco",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14039
    },
    {
      "Comune": "Tonengo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14023
    },
    {
      "Comune": "Tonezza del Cimone",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Tora e Piccilli",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81044
    },
    {
      "Comune": "Torano Castello",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87010
    },
    {
      "Comune": "Torano Nuovo",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64010
    },
    {
      "Comune": "Torbole Casaglia",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Torcegno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38050
    },
    {
      "Comune": "Torchiara",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84076
    },
    {
      "Comune": "Torchiarolo",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72020
    },
    {
      "Comune": "Torella dei Lombardi",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83057
    },
    {
      "Comune": "Torella del Sannio",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86028
    },
    {
      "Comune": "Torgiano",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6089
    },
    {
      "Comune": "Torgnon",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Torino",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": "101xx"
    },
    {
      "Comune": "Torino di Sangro",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66020
    },
    {
      "Comune": "Toritto",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70020
    },
    {
      "Comune": "Torlino Vimercati",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26017
    },
    {
      "Comune": "Tornaco",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28070
    },
    {
      "Comune": "Tornareccio",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66046
    },
    {
      "Comune": "Tornata",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Tornimparte",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67049
    },
    {
      "Comune": "Torno",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Tornolo",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43059
    },
    {
      "Comune": "Toro",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86018
    },
    {
      "Comune": "Torpè",
      "Provincia": "NU",
      "Regione": "SAR",
      "CAP": 8020
    },
    {
      "Comune": "Torraca",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "Torralba",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7048
    },
    {
      "Comune": "Torrazza Coste",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Torrazza Piemonte",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10037
    },
    {
      "Comune": "Torrazzo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13884
    },
    {
      "Comune": "Torre Annunziata",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80058
    },
    {
      "Comune": "Torre Beretti e Castellaro",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Torre Boldone",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Torre Bormida",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Torre Cajetani",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3010
    },
    {
      "Comune": "Torre Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10010
    },
    {
      "Comune": "Torre d'Arese",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Torre de' Busi",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23806
    },
    {
      "Comune": "Torre de' Negri",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27011
    },
    {
      "Comune": "Torre De' Passeri",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65029
    },
    {
      "Comune": "Torre de' Picenardi",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26038
    },
    {
      "Comune": "Torre de' Roveri",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Torre del Greco",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80059
    },
    {
      "Comune": "Torre di Mosto",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30020
    },
    {
      "Comune": "Torre di Ruggiero",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88060
    },
    {
      "Comune": "Torre di Santa Maria",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Torre d'Isola",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Torre Le Nocelle",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Torre Mondovì",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12080
    },
    {
      "Comune": "Torre Orsaia",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84077
    },
    {
      "Comune": "Torre Pallavicina",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Torre Pellice",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10066
    },
    {
      "Comune": "Torre San Giorgio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Torre San Patrizio",
      "Provincia": "FM",
      "Regione": "MAR",
      "CAP": 63814
    },
    {
      "Comune": "Torre Santa Susanna",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72028
    },
    {
      "Comune": "Torreano",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Torrebelvicino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36036
    },
    {
      "Comune": "Torrebruna",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Torrecuso",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82030
    },
    {
      "Comune": "Torreglia",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35038
    },
    {
      "Comune": "Torregrotta",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98040
    },
    {
      "Comune": "Torremaggiore",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71017
    },
    {
      "Comune": "Torrenova",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98070
    },
    {
      "Comune": "Torresina",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Torretta",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90040
    },
    {
      "Comune": "Torrevecchia Pia",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Torrevecchia Teatina",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Torri del Benaco",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37010
    },
    {
      "Comune": "Torri di Quartesolo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Torri in Sabina",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2049
    },
    {
      "Comune": "Torriana",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47825
    },
    {
      "Comune": "Torrice",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3020
    },
    {
      "Comune": "Torricella",
      "Provincia": "TA",
      "Regione": "PUG",
      "CAP": 74020
    },
    {
      "Comune": "Torricella del Pizzo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26040
    },
    {
      "Comune": "Torricella in Sabina",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2030
    },
    {
      "Comune": "Torricella Peligna",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66019
    },
    {
      "Comune": "Torricella Sicura",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64010
    },
    {
      "Comune": "Torricella Verzate",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Torriglia",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16029
    },
    {
      "Comune": "Torrile",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43056
    },
    {
      "Comune": "Torrioni",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83010
    },
    {
      "Comune": "Torrita di Siena",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53049
    },
    {
      "Comune": "Torrita Tiberina",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 60
    },
    {
      "Comune": "Tortolì",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8048
    },
    {
      "Comune": "Tortona",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15057
    },
    {
      "Comune": "Tortora",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Tortorella",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84030
    },
    {
      "Comune": "Tortoreto",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64018
    },
    {
      "Comune": "Tortorici",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98078
    },
    {
      "Comune": "Torviscosa",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Toscolano-Maderno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25088
    },
    {
      "Comune": "Tossicia",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64049
    },
    {
      "Comune": "Tovo di Sant'Agata",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23030
    },
    {
      "Comune": "Tovo San Giacomo",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17020
    },
    {
      "Comune": "Trabia",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90019
    },
    {
      "Comune": "Tradate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21049
    },
    {
      "Comune": "Tramatza",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Trambileno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38068
    },
    {
      "Comune": "Tramonti",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84010
    },
    {
      "Comune": "Tramonti di Sopra",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33090
    },
    {
      "Comune": "Tramonti di Sotto",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33090
    },
    {
      "Comune": "Tramutola",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85057
    },
    {
      "Comune": "Trana",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Trani",
      "Provincia": "BT",
      "Regione": "PUG",
      "CAP": 76125
    },
    {
      "Comune": "Transacqua",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38054
    },
    {
      "Comune": "Traona",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23019
    },
    {
      "Comune": "Trapani",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91100
    },
    {
      "Comune": "Trappeto",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90040
    },
    {
      "Comune": "Trarego Viggiona",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28826
    },
    {
      "Comune": "Trasacco",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67059
    },
    {
      "Comune": "Trasaghis",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Trasquera",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28868
    },
    {
      "Comune": "Tratalias",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Trausella",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Travacò Siccomario",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Travagliato",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25039
    },
    {
      "Comune": "Travedona-Monate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21028
    },
    {
      "Comune": "Traversella",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Traversetolo",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43029
    },
    {
      "Comune": "Traves",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Travesio",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33090
    },
    {
      "Comune": "Travo",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29020
    },
    {
      "Comune": "Trebaseleghe",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Trebisacce",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87075
    },
    {
      "Comune": "Trecasali",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43010
    },
    {
      "Comune": "Trecase",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80040
    },
    {
      "Comune": "Trecastagni",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95039
    },
    {
      "Comune": "Trecate",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28069
    },
    {
      "Comune": "Trecchina",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85049
    },
    {
      "Comune": "Trecenta",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45027
    },
    {
      "Comune": "Tredozio",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47019
    },
    {
      "Comune": "Treglio",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66030
    },
    {
      "Comune": "Tregnago",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37039
    },
    {
      "Comune": "Treia",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62010
    },
    {
      "Comune": "Treiso",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Tremenico",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23836
    },
    {
      "Comune": "Tremestieri Etneo",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95030
    },
    {
      "Comune": "Tremezzo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22019
    },
    {
      "Comune": "Tremosine",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25010
    },
    {
      "Comune": "Trenta",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87050
    },
    {
      "Comune": "Trentinara",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84070
    },
    {
      "Comune": "Trento",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": "3812x"
    },
    {
      "Comune": "Trentola-Ducenta",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81038
    },
    {
      "Comune": "Trenzano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Treppo Carnico",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Treppo Grande",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Trepuzzi",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73019
    },
    {
      "Comune": "Trequanda",
      "Provincia": "SI",
      "Regione": "TOS",
      "CAP": 53020
    },
    {
      "Comune": "Tres",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Tresana",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54012
    },
    {
      "Comune": "Trescore Balneario",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24069
    },
    {
      "Comune": "Trescore Cremasco",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26017
    },
    {
      "Comune": "Tresigallo",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44039
    },
    {
      "Comune": "Tresivio",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Tresnuraghes",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9079
    },
    {
      "Comune": "Trevenzuolo",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37060
    },
    {
      "Comune": "Trevi",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6039
    },
    {
      "Comune": "Trevi nel Lazio",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3010
    },
    {
      "Comune": "Trevico",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83058
    },
    {
      "Comune": "Treviglio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24047
    },
    {
      "Comune": "Trevignano",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Trevignano Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 69
    },
    {
      "Comune": "Treville",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15030
    },
    {
      "Comune": "Treviolo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24048
    },
    {
      "Comune": "Treviso",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31100
    },
    {
      "Comune": "Treviso Bresciano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25070
    },
    {
      "Comune": "Trezzano Rosa",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Trezzano sul Naviglio",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20090
    },
    {
      "Comune": "Trezzo sull'Adda",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20056
    },
    {
      "Comune": "Trezzo Tinella",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12050
    },
    {
      "Comune": "Trezzone",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Tribano",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35020
    },
    {
      "Comune": "Tribiano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20067
    },
    {
      "Comune": "Tribogna",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16030
    },
    {
      "Comune": "Tricarico",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75019
    },
    {
      "Comune": "Tricase",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73039
    },
    {
      "Comune": "Tricerro",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13038
    },
    {
      "Comune": "Tricesimo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33019
    },
    {
      "Comune": "Trichiana",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32028
    },
    {
      "Comune": "Triei",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Trieste",
      "Provincia": "TS",
      "Regione": "FVG",
      "CAP": "341xx"
    },
    {
      "Comune": "Triggiano",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70019
    },
    {
      "Comune": "Trigolo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26018
    },
    {
      "Comune": "Trinità",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12049
    },
    {
      "Comune": "Trinità d'Agultu e Vignola",
      "Provincia": "OT",
      "Regione": "SAR",
      "CAP": 7038
    },
    {
      "Comune": "Trinitapoli",
      "Provincia": "BT",
      "Regione": "PUG",
      "CAP": 76015
    },
    {
      "Comune": "Trino",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13039
    },
    {
      "Comune": "Triora",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18010
    },
    {
      "Comune": "Tripi",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98060
    },
    {
      "Comune": "Trisobbio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15070
    },
    {
      "Comune": "Trissino",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36070
    },
    {
      "Comune": "Triuggio",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20844
    },
    {
      "Comune": "Trivento",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86029
    },
    {
      "Comune": "Trivero",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13835
    },
    {
      "Comune": "Trivigliano",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3010
    },
    {
      "Comune": "Trivignano Udinese",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33050
    },
    {
      "Comune": "Trivigno",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85018
    },
    {
      "Comune": "Trivolzio",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Trodena nel parco naturale",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Trofarello",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10028
    },
    {
      "Comune": "Troia",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71029
    },
    {
      "Comune": "Troina",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94018
    },
    {
      "Comune": "Tromello",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Trontano",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28859
    },
    {
      "Comune": "Tronzano Lago Maggiore",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Tronzano Vercellese",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13049
    },
    {
      "Comune": "Tropea",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89861
    },
    {
      "Comune": "Trovo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Truccazzano",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Tubre",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39020
    },
    {
      "Comune": "Tuenno",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38019
    },
    {
      "Comune": "Tufara",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86010
    },
    {
      "Comune": "Tufillo",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66050
    },
    {
      "Comune": "Tufino",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "Tufo",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83010
    },
    {
      "Comune": "Tuglie",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73058
    },
    {
      "Comune": "Tuili",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9029
    },
    {
      "Comune": "Tula",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7010
    },
    {
      "Comune": "Tuoro sul Trasimeno",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6069
    },
    {
      "Comune": "Turania",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2020
    },
    {
      "Comune": "Turano Lodigiano",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26828
    },
    {
      "Comune": "Turate",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22078
    },
    {
      "Comune": "Turbigo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20029
    },
    {
      "Comune": "Turi",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70010
    },
    {
      "Comune": "Turri",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Turriaco",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "Turrivalignani",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65020
    },
    {
      "Comune": "Tursi",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75028
    },
    {
      "Comune": "Tusa",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98079
    },
    {
      "Comune": "Tuscania",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1017
    },
    {
      "Comune": "Ubiale Clanezzo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Uboldo",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Ucria",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98060
    },
    {
      "Comune": "Udine",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33100
    },
    {
      "Comune": "Ugento",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73059
    },
    {
      "Comune": "Uggiano La Chiesa",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73020
    },
    {
      "Comune": "Uggiate-Trevano",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22029
    },
    {
      "Comune": "Ulà Tirso",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Ulassai",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Ultimo",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39016
    },
    {
      "Comune": "Umbertide",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6019
    },
    {
      "Comune": "Umbriatico",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88823
    },
    {
      "Comune": "Urago d'Oglio",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Uras",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9099
    },
    {
      "Comune": "Urbana",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Urbania",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61049
    },
    {
      "Comune": "Urbe",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17048
    },
    {
      "Comune": "Urbino",
      "Provincia": "PU",
      "Regione": "MAR",
      "CAP": 61029
    },
    {
      "Comune": "Urbisaglia",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62010
    },
    {
      "Comune": "Urgnano",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24059
    },
    {
      "Comune": "Uri",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7040
    },
    {
      "Comune": "Ururi",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86049
    },
    {
      "Comune": "Urzulei",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Uscio",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16030
    },
    {
      "Comune": "Usellus",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Usini",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7049
    },
    {
      "Comune": "Usmate Velate",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20865
    },
    {
      "Comune": "Ussana",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Ussaramanna",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Ussassai",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8040
    },
    {
      "Comune": "Usseaux",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Usseglio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Ussita",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62039
    },
    {
      "Comune": "Ustica",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90010
    },
    {
      "Comune": "Uta",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Uzzano",
      "Provincia": "PT",
      "Regione": "TOS",
      "CAP": 51010
    },
    {
      "Comune": "Vaccarizzo Albanese",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87060
    },
    {
      "Comune": "Vacone",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2040
    },
    {
      "Comune": "Vacri",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Vadena",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39051
    },
    {
      "Comune": "Vado Ligure",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17047
    },
    {
      "Comune": "Vagli Sotto",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55030
    },
    {
      "Comune": "Vaglia",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50036
    },
    {
      "Comune": "Vaglio Basilicata",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85010
    },
    {
      "Comune": "Vaglio Serra",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14049
    },
    {
      "Comune": "Vaiano",
      "Provincia": "PO",
      "Regione": "TOS",
      "CAP": 59021
    },
    {
      "Comune": "Vaiano Cremasco",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26010
    },
    {
      "Comune": "Vaie",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Vailate",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26019
    },
    {
      "Comune": "Vairano Patenora",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81058
    },
    {
      "Comune": "Vajont",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "Val della Torre",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Val di Nizza",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Val di Vizze",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39049
    },
    {
      "Comune": "Val Masino",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23010
    },
    {
      "Comune": "Val Rezzo",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Valbondione",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Valbrembo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Valbrevenna",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16010
    },
    {
      "Comune": "Valbrona",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22039
    },
    {
      "Comune": "Valda",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Valdagno",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36078
    },
    {
      "Comune": "Valdaora",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Valdastico",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36040
    },
    {
      "Comune": "Valdengo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13855
    },
    {
      "Comune": "Valderice",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91019
    },
    {
      "Comune": "Valdidentro",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23038
    },
    {
      "Comune": "Valdieri",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Valdina",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98040
    },
    {
      "Comune": "Valdisotto",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23030
    },
    {
      "Comune": "Valdobbiadene",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31049
    },
    {
      "Comune": "Valduggia",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13018
    },
    {
      "Comune": "Valeggio",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Valeggio sul Mincio",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37067
    },
    {
      "Comune": "Valentano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1018
    },
    {
      "Comune": "Valenza",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15048
    },
    {
      "Comune": "Valenzano",
      "Provincia": "BA",
      "Regione": "PUG",
      "CAP": 70010
    },
    {
      "Comune": "Valera Fratta",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26859
    },
    {
      "Comune": "Valfabbrica",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6029
    },
    {
      "Comune": "Valfenera",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14017
    },
    {
      "Comune": "Valfloriana",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38040
    },
    {
      "Comune": "Valfurva",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23030
    },
    {
      "Comune": "Valganna",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21039
    },
    {
      "Comune": "Valgioie",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10094
    },
    {
      "Comune": "Valgoglio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Valgrana",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Valgreghentino",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23857
    },
    {
      "Comune": "Valgrisenche",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Valguarnera Caropepe",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94019
    },
    {
      "Comune": "Vallada Agordina",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Vallanzengo",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13847
    },
    {
      "Comune": "Vallarsa",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Vallata",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83059
    },
    {
      "Comune": "Valle Agricola",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81010
    },
    {
      "Comune": "Valle Aurina",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Valle Castellana",
      "Provincia": "TE",
      "Regione": "ABR",
      "CAP": 64010
    },
    {
      "Comune": "Valle dell'Angelo",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84070
    },
    {
      "Comune": "Valle di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32040
    },
    {
      "Comune": "Valle di Casies",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Valle di Maddaloni",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81020
    },
    {
      "Comune": "Valle Lomellina",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Valle Mosso",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13825
    },
    {
      "Comune": "Valle Salimbene",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Valle San Nicolao",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13847
    },
    {
      "Comune": "Vallebona",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18012
    },
    {
      "Comune": "Vallecorsa",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3020
    },
    {
      "Comune": "Vallecrosia",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18019
    },
    {
      "Comune": "Valledolmo",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90029
    },
    {
      "Comune": "Valledoria",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7039
    },
    {
      "Comune": "Vallefiorita",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Vallelonga",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89821
    },
    {
      "Comune": "Vallelunga Pratameno",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93010
    },
    {
      "Comune": "Vallemaio",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Vallepietra",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Vallerano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1030
    },
    {
      "Comune": "Vallermosa",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Vallerotonda",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Vallesaccarda",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "Valleve",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Valli del Pasubio",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "Vallinfreda",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Vallio Terme",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Vallo della Lucania",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84078
    },
    {
      "Comune": "Vallo di Nera",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6040
    },
    {
      "Comune": "Vallo Torinese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Valloriate",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Valmacca",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15040
    },
    {
      "Comune": "Valmadrera",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23868
    },
    {
      "Comune": "Valmala",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Valmontone",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 38
    },
    {
      "Comune": "Valmorea",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Valmozzola",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43050
    },
    {
      "Comune": "Valnegra",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Valpelline",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Valperga",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10087
    },
    {
      "Comune": "Valprato Soana",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Valsavarenche",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11010
    },
    {
      "Comune": "Valsecca",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Valsinni",
      "Provincia": "MT",
      "Regione": "BAS",
      "CAP": 75029
    },
    {
      "Comune": "Valsolda",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22010
    },
    {
      "Comune": "Valstagna",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36020
    },
    {
      "Comune": "Valstrona",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28897
    },
    {
      "Comune": "Valtopina",
      "Provincia": "PG",
      "Regione": "UMB",
      "CAP": 6030
    },
    {
      "Comune": "Valtorta",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Valtournenche",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11028
    },
    {
      "Comune": "Valva",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84020
    },
    {
      "Comune": "Valvasone",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33098
    },
    {
      "Comune": "Valverde",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27050
    },
    {
      "Comune": "Valverde",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95028
    },
    {
      "Comune": "Valvestino",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25080
    },
    {
      "Comune": "Vandoies",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39030
    },
    {
      "Comune": "Vanzaghello",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20020
    },
    {
      "Comune": "Vanzago",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Vanzone con San Carlo",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28879
    },
    {
      "Comune": "Vaprio d'Adda",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20069
    },
    {
      "Comune": "Vaprio d'Agogna",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Varallo",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13019
    },
    {
      "Comune": "Varallo Pombia",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28040
    },
    {
      "Comune": "Varano Borghi",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21020
    },
    {
      "Comune": "Varano de' Melegari",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43040
    },
    {
      "Comune": "Varapodio",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89010
    },
    {
      "Comune": "Varazze",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17019
    },
    {
      "Comune": "Varco Sabino",
      "Provincia": "RI",
      "Regione": "LAZ",
      "CAP": 2020
    },
    {
      "Comune": "Varedo",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20814
    },
    {
      "Comune": "Varena",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Varenna",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23829
    },
    {
      "Comune": "Varese",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21100
    },
    {
      "Comune": "Varese Ligure",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19028
    },
    {
      "Comune": "Varisella",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Varmo",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33030
    },
    {
      "Comune": "Varna",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Varsi",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43049
    },
    {
      "Comune": "Varzi",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27057
    },
    {
      "Comune": "Varzo",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28868
    },
    {
      "Comune": "Vas",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32030
    },
    {
      "Comune": "Vasanello",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1030
    },
    {
      "Comune": "Vasia",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18020
    },
    {
      "Comune": "Vasto",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66054
    },
    {
      "Comune": "Vastogirardi",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86089
    },
    {
      "Comune": "Vattaro",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38049
    },
    {
      "Comune": "Vauda Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Vazzano",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89834
    },
    {
      "Comune": "Vazzola",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31028
    },
    {
      "Comune": "Vecchiano",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56019
    },
    {
      "Comune": "Vedano al Lambro",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20854
    },
    {
      "Comune": "Vedano Olona",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Veddasca",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Vedelago",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31050
    },
    {
      "Comune": "Vedeseta",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24010
    },
    {
      "Comune": "Veduggio con Colzano",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20837
    },
    {
      "Comune": "Veggiano",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35030
    },
    {
      "Comune": "Veglie",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "Veglio",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13824
    },
    {
      "Comune": "Vejano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Veleso",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Velezzo Lomellina",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Velletri",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 49
    },
    {
      "Comune": "Vellezzo Bellini",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Velo d'Astico",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36010
    },
    {
      "Comune": "Velo Veronese",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37030
    },
    {
      "Comune": "Velturno",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Venafro",
      "Provincia": "IS",
      "Regione": "MOL",
      "CAP": 86079
    },
    {
      "Comune": "Venaria Reale",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10078
    },
    {
      "Comune": "Venarotta",
      "Provincia": "AP",
      "Regione": "MAR",
      "CAP": 63091
    },
    {
      "Comune": "Venasca",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Venaus",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Vendone",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17032
    },
    {
      "Comune": "Vendrogno",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23838
    },
    {
      "Comune": "Venegono Inferiore",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Venegono Superiore",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21040
    },
    {
      "Comune": "Venetico",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98040
    },
    {
      "Comune": "Venezia",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": "301xx"
    },
    {
      "Comune": "Veniano",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Venosa",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85029
    },
    {
      "Comune": "Venticano",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Ventimiglia",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18039
    },
    {
      "Comune": "Ventimiglia di Sicilia",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Ventotene",
      "Provincia": "LT",
      "Regione": "LAZ",
      "CAP": 4020
    },
    {
      "Comune": "Venzone",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33010
    },
    {
      "Comune": "Verano",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39010
    },
    {
      "Comune": "Verano Brianza",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20843
    },
    {
      "Comune": "Verbania",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": "2892x"
    },
    {
      "Comune": "Verbicaro",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87020
    },
    {
      "Comune": "Vercana",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22013
    },
    {
      "Comune": "Verceia",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23020
    },
    {
      "Comune": "Vercelli",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13100
    },
    {
      "Comune": "Vercurago",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23808
    },
    {
      "Comune": "Verdellino",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24040
    },
    {
      "Comune": "Verdello",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24049
    },
    {
      "Comune": "Verderio Inferiore",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23879
    },
    {
      "Comune": "Verderio Superiore",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23878
    },
    {
      "Comune": "Verduno",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12060
    },
    {
      "Comune": "Vergato",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40038
    },
    {
      "Comune": "Vergemoli",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55020
    },
    {
      "Comune": "Verghereto",
      "Provincia": "FC",
      "Regione": "EMR",
      "CAP": 47028
    },
    {
      "Comune": "Vergiate",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21029
    },
    {
      "Comune": "Vermezzo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Vermiglio",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38029
    },
    {
      "Comune": "Vernante",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12019
    },
    {
      "Comune": "Vernasca",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Vernate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Vernazza",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19018
    },
    {
      "Comune": "Vernio",
      "Provincia": "PO",
      "Regione": "TOS",
      "CAP": 59024
    },
    {
      "Comune": "Vernole",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73029
    },
    {
      "Comune": "Verolanuova",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25028
    },
    {
      "Comune": "Verolavecchia",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25029
    },
    {
      "Comune": "Verolengo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10038
    },
    {
      "Comune": "Veroli",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3029
    },
    {
      "Comune": "Verona",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": "371xx"
    },
    {
      "Comune": "Veronella",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37040
    },
    {
      "Comune": "Verrayes",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11020
    },
    {
      "Comune": "Verrès",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11029
    },
    {
      "Comune": "Verretto",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27053
    },
    {
      "Comune": "Verrone",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13871
    },
    {
      "Comune": "Verrua Po",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27040
    },
    {
      "Comune": "Verrua Savoia",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10020
    },
    {
      "Comune": "Vertemate con Minoprio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22070
    },
    {
      "Comune": "Vertova",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24029
    },
    {
      "Comune": "Verucchio",
      "Provincia": "RN",
      "Regione": "EMR",
      "CAP": 47826
    },
    {
      "Comune": "Veruno",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28010
    },
    {
      "Comune": "Vervio",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23030
    },
    {
      "Comune": "Vervò",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Verzegnis",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Verzino",
      "Provincia": "KR",
      "Regione": "CAL",
      "CAP": 88819
    },
    {
      "Comune": "Verzuolo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12039
    },
    {
      "Comune": "Vescovana",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Vescovato",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26039
    },
    {
      "Comune": "Vesime",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14059
    },
    {
      "Comune": "Vespolate",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28079
    },
    {
      "Comune": "Vessalico",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18026
    },
    {
      "Comune": "Vestenanova",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37030
    },
    {
      "Comune": "Vestignè",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10030
    },
    {
      "Comune": "Vestone",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25078
    },
    {
      "Comune": "Vestreno",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23822
    },
    {
      "Comune": "Vetralla",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1019
    },
    {
      "Comune": "Vetto",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42020
    },
    {
      "Comune": "Vezza d'Alba",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12040
    },
    {
      "Comune": "Vezza d'Oglio",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25059
    },
    {
      "Comune": "Vezzano",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38070
    },
    {
      "Comune": "Vezzano Ligure",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Vezzano sul Crostolo",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42030
    },
    {
      "Comune": "Vezzi Portio",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17028
    },
    {
      "Comune": "Viadana",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46019
    },
    {
      "Comune": "Viadanica",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Viagrande",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95029
    },
    {
      "Comune": "Viale",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14010
    },
    {
      "Comune": "Vialfrè",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Viano",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42030
    },
    {
      "Comune": "Viareggio",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55049
    },
    {
      "Comune": "Viarigi",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14030
    },
    {
      "Comune": "Vibo Valentia",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89900
    },
    {
      "Comune": "Vibonati",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84079
    },
    {
      "Comune": "Vicalvi",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Vicari",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90020
    },
    {
      "Comune": "Vicchio",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50039
    },
    {
      "Comune": "Vicenza",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36100
    },
    {
      "Comune": "Vico Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Vico del Gargano",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71018
    },
    {
      "Comune": "Vico Equense",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80069
    },
    {
      "Comune": "Vico nel Lazio",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3010
    },
    {
      "Comune": "Vicoforte",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12080
    },
    {
      "Comune": "Vicoli",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Vicolungo",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Vicopisano",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56010
    },
    {
      "Comune": "Vicovaro",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 29
    },
    {
      "Comune": "Viddalba",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7030
    },
    {
      "Comune": "Vidigulfo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27018
    },
    {
      "Comune": "Vidor",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31020
    },
    {
      "Comune": "Vidracco",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Vieste",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71019
    },
    {
      "Comune": "Vietri di Potenza",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85058
    },
    {
      "Comune": "Vietri sul Mare",
      "Provincia": "SA",
      "Regione": "CAM",
      "CAP": 84019
    },
    {
      "Comune": "Viganella",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28841
    },
    {
      "Comune": "Viganò",
      "Provincia": "LC",
      "Regione": "LOM",
      "CAP": 23897
    },
    {
      "Comune": "Vigano San Martino",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Vigarano Mainarda",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44049
    },
    {
      "Comune": "Vigasio",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37068
    },
    {
      "Comune": "Vigevano",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27029
    },
    {
      "Comune": "Viggianello",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85040
    },
    {
      "Comune": "Viggiano",
      "Provincia": "PZ",
      "Regione": "BAS",
      "CAP": 85059
    },
    {
      "Comune": "Viggiù",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21059
    },
    {
      "Comune": "Vighizzolo d'Este",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Vigliano Biellese",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13856
    },
    {
      "Comune": "Vigliano d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14040
    },
    {
      "Comune": "Vignale Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15049
    },
    {
      "Comune": "Vignanello",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1039
    },
    {
      "Comune": "Vignate",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20060
    },
    {
      "Comune": "Vignola",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41058
    },
    {
      "Comune": "Vignola-Falesina",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38057
    },
    {
      "Comune": "Vignole Borbera",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Vignolo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Vignone",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28819
    },
    {
      "Comune": "Vigo di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32040
    },
    {
      "Comune": "Vigo di Fassa",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38039
    },
    {
      "Comune": "Vigo Rendena",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38080
    },
    {
      "Comune": "Vigodarzere",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Vigolo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Vigolo Vattaro",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38049
    },
    {
      "Comune": "Vigolzone",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29020
    },
    {
      "Comune": "Vigone",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10067
    },
    {
      "Comune": "Vigonovo",
      "Provincia": "VE",
      "Regione": "VEN",
      "CAP": 30030
    },
    {
      "Comune": "Vigonza",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Viguzzolo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15058
    },
    {
      "Comune": "Villa Agnedo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38059
    },
    {
      "Comune": "Villa Bartolomea",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37049
    },
    {
      "Comune": "Villa Basilica",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55019
    },
    {
      "Comune": "Villa Biscossi",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27035
    },
    {
      "Comune": "Villa Carcina",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25069
    },
    {
      "Comune": "Villa Castelli",
      "Provincia": "BR",
      "Regione": "PUG",
      "CAP": 72029
    },
    {
      "Comune": "Villa Celiera",
      "Provincia": "PE",
      "Regione": "ABR",
      "CAP": 65010
    },
    {
      "Comune": "Villa Collemandina",
      "Provincia": "LU",
      "Regione": "TOS",
      "CAP": 55030
    },
    {
      "Comune": "Villa Cortese",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20020
    },
    {
      "Comune": "Villa d'Adda",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24030
    },
    {
      "Comune": "Villa d'Almè",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24018
    },
    {
      "Comune": "Villa del Bosco",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13868
    },
    {
      "Comune": "Villa del Conte",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Villa di Briano",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81030
    },
    {
      "Comune": "Villa di Chiavenna",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23029
    },
    {
      "Comune": "Villa di Serio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Villa di Tirano",
      "Provincia": "SO",
      "Regione": "LOM",
      "CAP": 23030
    },
    {
      "Comune": "Villa d'Ogna",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Villa Estense",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35040
    },
    {
      "Comune": "Villa Faraldi",
      "Provincia": "IM",
      "Regione": "LIG",
      "CAP": 18010
    },
    {
      "Comune": "Villa Guardia",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22079
    },
    {
      "Comune": "Villa Lagarina",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Villa Latina",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Villa Literno",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81039
    },
    {
      "Comune": "Villa Minozzo",
      "Provincia": "RE",
      "Regione": "EMR",
      "CAP": 42030
    },
    {
      "Comune": "Villa Poma",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46020
    },
    {
      "Comune": "Villa Rendena",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38080
    },
    {
      "Comune": "Villa San Giovanni",
      "Provincia": "RC",
      "Regione": "CAL",
      "CAP": 89018
    },
    {
      "Comune": "Villa San Giovanni in Tuscia",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1010
    },
    {
      "Comune": "Villa San Pietro",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Villa San Secondo",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14020
    },
    {
      "Comune": "Villa Santa Lucia",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3030
    },
    {
      "Comune": "Villa Santa Lucia degli Abruzzi",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Villa Santa Maria",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66047
    },
    {
      "Comune": "Villa Sant'Angelo",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67020
    },
    {
      "Comune": "Villa Sant'Antonio",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Villa Santina",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33029
    },
    {
      "Comune": "Villa Santo Stefano",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3020
    },
    {
      "Comune": "Villa Verde",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9090
    },
    {
      "Comune": "Villa Vicentina",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33059
    },
    {
      "Comune": "Villabassa",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39039
    },
    {
      "Comune": "Villabate",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90039
    },
    {
      "Comune": "Villachiara",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25030
    },
    {
      "Comune": "Villacidro",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9039
    },
    {
      "Comune": "Villadeati",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Villadose",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45010
    },
    {
      "Comune": "Villadossola",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28844
    },
    {
      "Comune": "Villafalletto",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Villafranca d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14018
    },
    {
      "Comune": "Villafranca di Verona",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37069
    },
    {
      "Comune": "Villafranca in Lunigiana",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54028
    },
    {
      "Comune": "Villafranca Padovana",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Villafranca Piemonte",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10068
    },
    {
      "Comune": "Villafranca Sicula",
      "Provincia": "AG",
      "Regione": "SIC",
      "CAP": 92020
    },
    {
      "Comune": "Villafranca Tirrena",
      "Provincia": "ME",
      "Regione": "SIC",
      "CAP": 98049
    },
    {
      "Comune": "Villafrati",
      "Provincia": "PA",
      "Regione": "SIC",
      "CAP": 90030
    },
    {
      "Comune": "Villaga",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36021
    },
    {
      "Comune": "Villagrande Strisaili",
      "Provincia": "OG",
      "Regione": "SAR",
      "CAP": 8049
    },
    {
      "Comune": "Villalago",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Villalba",
      "Provincia": "CL",
      "Regione": "SIC",
      "CAP": 93010
    },
    {
      "Comune": "Villalfonsina",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66020
    },
    {
      "Comune": "Villalvernia",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Villamagna",
      "Provincia": "CH",
      "Regione": "ABR",
      "CAP": 66010
    },
    {
      "Comune": "Villamaina",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "Villamar",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Villamarzana",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "Villamassargia",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Villamiroglio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15020
    },
    {
      "Comune": "Villandro",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39040
    },
    {
      "Comune": "Villanova Biellese",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13877
    },
    {
      "Comune": "Villanova Canavese",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Villanova d'Albenga",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17038
    },
    {
      "Comune": "Villanova d'Ardenghi",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Villanova d'Asti",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14019
    },
    {
      "Comune": "Villanova del Battista",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Villanova del Ghebbo",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45020
    },
    {
      "Comune": "Villanova del Sillaro",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26818
    },
    {
      "Comune": "Villanova di Camposampiero",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35010
    },
    {
      "Comune": "Villanova Marchesana",
      "Provincia": "RO",
      "Regione": "VEN",
      "CAP": 45030
    },
    {
      "Comune": "Villanova Mondovì",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12089
    },
    {
      "Comune": "Villanova Monferrato",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15030
    },
    {
      "Comune": "Villanova Monteleone",
      "Provincia": "SS",
      "Regione": "SAR",
      "CAP": 7019
    },
    {
      "Comune": "Villanova Solaro",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12030
    },
    {
      "Comune": "Villanova sull'Arda",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Villanova Truschedu",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9084
    },
    {
      "Comune": "Villanova Tulo",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 8030
    },
    {
      "Comune": "Villanovaforru",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Villanovafranca",
      "Provincia": "VS",
      "Regione": "SAR",
      "CAP": 9020
    },
    {
      "Comune": "Villanterio",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27019
    },
    {
      "Comune": "Villanuova sul Clisi",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25089
    },
    {
      "Comune": "Villaperuccio",
      "Provincia": "CI",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Villapiana",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87076
    },
    {
      "Comune": "Villaputzu",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Villar Dora",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Villar Focchiardo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10050
    },
    {
      "Comune": "Villar Pellice",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Villar Perosa",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10069
    },
    {
      "Comune": "Villar San Costanzo",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Villarbasse",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10090
    },
    {
      "Comune": "Villarboit",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13030
    },
    {
      "Comune": "Villareggia",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10030
    },
    {
      "Comune": "Villaricca",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80010
    },
    {
      "Comune": "Villaromagnano",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Villarosa",
      "Provincia": "EN",
      "Regione": "SIC",
      "CAP": 94010
    },
    {
      "Comune": "Villasalto",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9040
    },
    {
      "Comune": "Villasanta",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20852
    },
    {
      "Comune": "Villasimius",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9049
    },
    {
      "Comune": "Villasor",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9034
    },
    {
      "Comune": "Villaspeciosa",
      "Provincia": "CA",
      "Regione": "SAR",
      "CAP": 9010
    },
    {
      "Comune": "Villastellone",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10029
    },
    {
      "Comune": "Villata",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13010
    },
    {
      "Comune": "Villaurbana",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9080
    },
    {
      "Comune": "Villavallelonga",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67050
    },
    {
      "Comune": "Villaverla",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "Villeneuve",
      "Provincia": "AO",
      "Regione": "VDA",
      "CAP": 11018
    },
    {
      "Comune": "Villesse",
      "Provincia": "GO",
      "Regione": "FVG",
      "CAP": 34070
    },
    {
      "Comune": "Villetta Barrea",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Villette",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28856
    },
    {
      "Comune": "Villimpenta",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46039
    },
    {
      "Comune": "Villongo",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Villorba",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31020
    },
    {
      "Comune": "Vilminore di Scalve",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24020
    },
    {
      "Comune": "Vimercate",
      "Provincia": "MB",
      "Regione": "LOM",
      "CAP": 20871
    },
    {
      "Comune": "Vimodrone",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20090
    },
    {
      "Comune": "Vinadio",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12010
    },
    {
      "Comune": "Vinchiaturo",
      "Provincia": "CB",
      "Regione": "MOL",
      "CAP": 86019
    },
    {
      "Comune": "Vinchio",
      "Provincia": "AT",
      "Regione": "PIE",
      "CAP": 14040
    },
    {
      "Comune": "Vinci",
      "Provincia": "FI",
      "Regione": "TOS",
      "CAP": 50059
    },
    {
      "Comune": "Vinovo",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10048
    },
    {
      "Comune": "Vinzaglio",
      "Provincia": "NO",
      "Regione": "PIE",
      "CAP": 28060
    },
    {
      "Comune": "Viola",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12070
    },
    {
      "Comune": "Vione",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Vipiteno",
      "Provincia": "BZ",
      "Regione": "TAA",
      "CAP": 39049
    },
    {
      "Comune": "Virgilio",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46030
    },
    {
      "Comune": "Virle Piemonte",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10060
    },
    {
      "Comune": "Visano",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25010
    },
    {
      "Comune": "Vische",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10030
    },
    {
      "Comune": "Visciano",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80030
    },
    {
      "Comune": "Visco",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33040
    },
    {
      "Comune": "Visone",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15010
    },
    {
      "Comune": "Visso",
      "Provincia": "MC",
      "Regione": "MAR",
      "CAP": 62039
    },
    {
      "Comune": "Vistarino",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Vistrorio",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10080
    },
    {
      "Comune": "Vita",
      "Provincia": "TP",
      "Regione": "SIC",
      "CAP": 91010
    },
    {
      "Comune": "Viterbo",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1100
    },
    {
      "Comune": "Viticuso",
      "Provincia": "FR",
      "Regione": "LAZ",
      "CAP": 3040
    },
    {
      "Comune": "Vito d'Asio",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33090
    },
    {
      "Comune": "Vitorchiano",
      "Provincia": "VT",
      "Regione": "LAZ",
      "CAP": 1030
    },
    {
      "Comune": "Vittoria",
      "Provincia": "RG",
      "Regione": "SIC",
      "CAP": 97019
    },
    {
      "Comune": "Vittorio Veneto",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31029
    },
    {
      "Comune": "Vittorito",
      "Provincia": "AQ",
      "Regione": "ABR",
      "CAP": 67030
    },
    {
      "Comune": "Vittuone",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20010
    },
    {
      "Comune": "Vitulano",
      "Provincia": "BN",
      "Regione": "CAM",
      "CAP": 82038
    },
    {
      "Comune": "Vitulazio",
      "Provincia": "CE",
      "Regione": "CAM",
      "CAP": 81041
    },
    {
      "Comune": "Viù",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10070
    },
    {
      "Comune": "Vivaro",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33099
    },
    {
      "Comune": "Vivaro Romano",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 20
    },
    {
      "Comune": "Viverone",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13886
    },
    {
      "Comune": "Vizzini",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95049
    },
    {
      "Comune": "Vizzola Ticino",
      "Provincia": "VA",
      "Regione": "LOM",
      "CAP": 21010
    },
    {
      "Comune": "Vizzolo Predabissi",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20070
    },
    {
      "Comune": "Vo'",
      "Provincia": "PD",
      "Regione": "VEN",
      "CAP": 35030
    },
    {
      "Comune": "Vobarno",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25079
    },
    {
      "Comune": "Vobbia",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16010
    },
    {
      "Comune": "Vocca",
      "Provincia": "VC",
      "Regione": "PIE",
      "CAP": 13020
    },
    {
      "Comune": "Vodo Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32040
    },
    {
      "Comune": "Voghera",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27058
    },
    {
      "Comune": "Voghiera",
      "Provincia": "FE",
      "Regione": "EMR",
      "CAP": 44019
    },
    {
      "Comune": "Vogogna",
      "Provincia": "VB",
      "Regione": "PIE",
      "CAP": 28805
    },
    {
      "Comune": "Volano",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38060
    },
    {
      "Comune": "Volla",
      "Provincia": "NA",
      "Regione": "CAM",
      "CAP": 80040
    },
    {
      "Comune": "Volongo",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Volpago del Montello",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31040
    },
    {
      "Comune": "Volpara",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27047
    },
    {
      "Comune": "Volpedo",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15059
    },
    {
      "Comune": "Volpeglino",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15050
    },
    {
      "Comune": "Volpiano",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10088
    },
    {
      "Comune": "Volta Mantovana",
      "Provincia": "MN",
      "Regione": "LOM",
      "CAP": 46049
    },
    {
      "Comune": "Voltaggio",
      "Provincia": "AL",
      "Regione": "PIE",
      "CAP": 15060
    },
    {
      "Comune": "Voltago Agordino",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32020
    },
    {
      "Comune": "Volterra",
      "Provincia": "PI",
      "Regione": "TOS",
      "CAP": 56048
    },
    {
      "Comune": "Voltido",
      "Provincia": "CR",
      "Regione": "LOM",
      "CAP": 26030
    },
    {
      "Comune": "Volturara Appula",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71030
    },
    {
      "Comune": "Volturara Irpina",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83050
    },
    {
      "Comune": "Volturino",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71030
    },
    {
      "Comune": "Volvera",
      "Provincia": "TO",
      "Regione": "PIE",
      "CAP": 10040
    },
    {
      "Comune": "Vottignasco",
      "Provincia": "CN",
      "Regione": "PIE",
      "CAP": 12020
    },
    {
      "Comune": "Zaccanopoli",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89867
    },
    {
      "Comune": "Zafferana Etnea",
      "Provincia": "CT",
      "Regione": "SIC",
      "CAP": 95019
    },
    {
      "Comune": "Zagarise",
      "Provincia": "CZ",
      "Regione": "CAL",
      "CAP": 88050
    },
    {
      "Comune": "Zagarolo",
      "Provincia": "RM",
      "Regione": "LAZ",
      "CAP": 39
    },
    {
      "Comune": "Zambana",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38010
    },
    {
      "Comune": "Zambrone",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89868
    },
    {
      "Comune": "Zandobbio",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24060
    },
    {
      "Comune": "Zanè",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36010
    },
    {
      "Comune": "Zanica",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24050
    },
    {
      "Comune": "Zapponeta",
      "Provincia": "FG",
      "Regione": "PUG",
      "CAP": 71030
    },
    {
      "Comune": "Zavattarello",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27059
    },
    {
      "Comune": "Zeccone",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27010
    },
    {
      "Comune": "Zeddiani",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Zelbio",
      "Provincia": "CO",
      "Regione": "LOM",
      "CAP": 22020
    },
    {
      "Comune": "Zelo Buon Persico",
      "Provincia": "LO",
      "Regione": "LOM",
      "CAP": 26839
    },
    {
      "Comune": "Zelo Surrigone",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Zeme",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Zenevredo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27049
    },
    {
      "Comune": "Zenson di Piave",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31050
    },
    {
      "Comune": "Zerba",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29020
    },
    {
      "Comune": "Zerbo",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27017
    },
    {
      "Comune": "Zerbolò",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27020
    },
    {
      "Comune": "Zerfaliu",
      "Provincia": "OR",
      "Regione": "SAR",
      "CAP": 9070
    },
    {
      "Comune": "Zeri",
      "Provincia": "MS",
      "Regione": "TOS",
      "CAP": 54029
    },
    {
      "Comune": "Zermeghedo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36050
    },
    {
      "Comune": "Zero Branco",
      "Provincia": "TV",
      "Regione": "VEN",
      "CAP": 31059
    },
    {
      "Comune": "Zevio",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37059
    },
    {
      "Comune": "Ziano di Fiemme",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38030
    },
    {
      "Comune": "Ziano Piacentino",
      "Provincia": "PC",
      "Regione": "EMR",
      "CAP": 29010
    },
    {
      "Comune": "Zibello",
      "Provincia": "PR",
      "Regione": "EMR",
      "CAP": 43010
    },
    {
      "Comune": "Zibido San Giacomo",
      "Provincia": "MI",
      "Regione": "LOM",
      "CAP": 20080
    },
    {
      "Comune": "Zignago",
      "Provincia": "SP",
      "Regione": "LIG",
      "CAP": 19020
    },
    {
      "Comune": "Zimella",
      "Provincia": "VR",
      "Regione": "VEN",
      "CAP": 37040
    },
    {
      "Comune": "Zimone",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13887
    },
    {
      "Comune": "Zinasco",
      "Provincia": "PV",
      "Regione": "LOM",
      "CAP": 27030
    },
    {
      "Comune": "Zoagli",
      "Provincia": "GE",
      "Regione": "LIG",
      "CAP": 16030
    },
    {
      "Comune": "Zocca",
      "Provincia": "MO",
      "Regione": "EMR",
      "CAP": 41059
    },
    {
      "Comune": "Zogno",
      "Provincia": "BG",
      "Regione": "LOM",
      "CAP": 24019
    },
    {
      "Comune": "Zola Predosa",
      "Provincia": "BO",
      "Regione": "EMR",
      "CAP": 40069
    },
    {
      "Comune": "Zoldo Alto",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32010
    },
    {
      "Comune": "Zollino",
      "Provincia": "LE",
      "Regione": "PUG",
      "CAP": 73010
    },
    {
      "Comune": "Zone",
      "Provincia": "BS",
      "Regione": "LOM",
      "CAP": 25050
    },
    {
      "Comune": "Zoppè di Cadore",
      "Provincia": "BL",
      "Regione": "VEN",
      "CAP": 32010
    },
    {
      "Comune": "Zoppola",
      "Provincia": "PN",
      "Regione": "FVG",
      "CAP": 33080
    },
    {
      "Comune": "Zovencedo",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36020
    },
    {
      "Comune": "Zubiena",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13888
    },
    {
      "Comune": "Zuccarello",
      "Provincia": "SV",
      "Regione": "LIG",
      "CAP": 17039
    },
    {
      "Comune": "Zuclo",
      "Provincia": "TN",
      "Regione": "TAA",
      "CAP": 38079
    },
    {
      "Comune": "Zugliano",
      "Provincia": "VI",
      "Regione": "VEN",
      "CAP": 36030
    },
    {
      "Comune": "Zuglio",
      "Provincia": "UD",
      "Regione": "FVG",
      "CAP": 33020
    },
    {
      "Comune": "Zumaglia",
      "Provincia": "BI",
      "Regione": "PIE",
      "CAP": 13848
    },
    {
      "Comune": "Zumpano",
      "Provincia": "CS",
      "Regione": "CAL",
      "CAP": 87040
    },
    {
      "Comune": "Zungoli",
      "Provincia": "AV",
      "Regione": "CAM",
      "CAP": 83030
    },
    {
      "Comune": "Zungri",
      "Provincia": "VV",
      "Regione": "CAL",
      "CAP": 89867
    }
  ]

  constructor() { }

  private helper (select: string, where?: string, value?: string) {
    if (where && value) {
      return [...new Set(this.locations.filter(location => location[where] === value).map(location => location[select]))]
    }
    return [...new Set(this.locations.map(location => location[select]))]
  }

  public regioni (): string[] {
    return this.helper('Regione')
  }

  public comuni (provincia?: string): string[] {
    return this.helper('Comune', 'Provincia', provincia)
  }

  public province (regione?: string): string[] {
    return this.helper('Provincia', 'Regione', regione)
  }

  public cap (comune: string): string | number {
    return this.locations.find(location => location.Comune === comune).CAP
  }

}
