// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

let token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IkYyRDQ2NTgyMUY1QjE2QTU3QkZENDQ3NUVBNzgwRTk1MzlGMTFEOThSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6Ijh0UmxnaDliRnFWN19VUjE2bmdPbFRueEhaZyJ9.eyJuYmYiOjE2ODY4NDMxNjUsImV4cCI6MTY4NjkyOTU2NSwiaXNzIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwIiwiYXVkIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IlNpaWdvV2ViIiwic3ViIjoiMTA2NjA1NiIsImF1dGhfdGltZSI6MTY4Njg0MzE2NSwiaWRwIjoibG9jYWwiLCJuYW1lIjoiUUFBcnF1aXRlY3R1cmFOdWV2b1NpaWdvTnViZV9QYW8wMDFAeW90bWFpbC5jb20iLCJtYWlsX3NpaWdvIjoiUUFBcnF1aXRlY3R1cmFOdWV2b1NpaWdvTnViZV9QYW8wMDFAeW90bWFpbC5jb20iLCJjbG91ZF90ZW5hbnRfY29tcGFueV9rZXkiOiJRQUFycXVpdGVjdHVyYU51ZXZvU2lpZ29OdWJlX1BhbzAwMSIsInVzZXJzX2lkIjoiMzUyMjYiLCJ0ZW5hbnRfaWQiOiIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTg4NjY1IiwidXNlcl9saWNlbnNlX3R5cGUiOiIwIiwicGxhbl90eXBlIjoiNSIsInRlbmFudF9zdGF0ZSI6IjEiLCJtdWx0aXRlbmFudF9pZCI6IjEwNCIsImNvbXBhbmllcyI6IjIiLCJhcGlfc3Vic2NyaXB0aW9uX2tleSI6IiIsImFjY291bnRhbnQiOiJmYWxzZSIsImp0aSI6IkZCNDI2OUQzOTFERjgyMTBERUM3N0VFRTlCOEM5RTE5IiwiaWF0IjoxNjg2ODQzMTY1LCJzY29wZSI6WyJXZWJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsiY3VzdG9tIl19.jN3Oh5g_7hY7fWK1SElsZoqZ8REL8lozJ3L6ptIDWuJvGkDCh5dwIS1_u66et2KnSsIexHyqLxpM_wPk7TUiXBY6_U6dzj1Day0T6RGe43myK_SDv227K4Tl5eEsK94Qesjp2SPVKDYKCtrG8871q85iBpJ0mU43fHNMi9gkWwh9jt63leUHa6UgvXiYz6eyLZ7ORPkiuJKGy3fOGwxgs1Ox2OwSicvI0YH052HSf5p16uzDU0nFx3A1s1maUrRPm7N2x84-Xn9LDY_t1MOb5heMJraeEdlG8w_SoY2dDx3A3jpDHwp51r9TbPoudooWRNy4-MdttvEJBxeDcXQa4Q";

export let options = { 
  maxRedirects: 4,
  discardResponseBodies: true,
  scenarios: {
    Escenario_4_200u_180s: {
      executor: 'constant-vus',
      vus: 200,
      duration: '180s'
    }
  },
};

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  // postman[Request]({
  //   name: "Health",
  //   id: "05c0f6b2-8757-41a4-9d15-a6adadb156cf",
  //   method: "GET",
  //   address: "http://localhost:5000/health"
  // });

  //Este servicio es usado internamente por GetRateAsync para obtener la tasa desde el servicio externo, cuando no está almacenada en mongo. 
  //Si se le envía un valor de tasa de cambio, este servicio lo ignorará y siempre guardará el que venga desde el servicio externo (OpenExchange).
  // postman[Request]({
  //   name: "Save Global Rate",
  //   id: "d66b7825-8a80-4cb5-b663-dc68ffebdc59",
  //   method: "POST",
  //   address: "https://servicesqa.siigo.com/cross/currency/api/saveglobalrate",
  //   data:
  //     '{\n"exchangeRate":{\n"localMoneyCode": "COP",\n"foreignMoneyCode": "EUR",\n"rate": 0.00026,\n"date": 1686265381\n}\n}',
  //   headers: {
  //     Authorization: token
  //   }
  // });

  //Este servicio permite obtener la tasa de cambio entre dos monedas específicas y en una fecha específica en formato unix.
  //Esta tasa primero la busca en mongo y sino la encuentra allí la buscará en el servicio externo de Open ExChange. 
  postman[Request]({
    name: "Get Rate Value",
    id: "6c2507c2-88a8-45cd-92fc-9e1154aeef5e",
    method: "POST",
    address: "https://servicesqa.siigo.com/cross/currency/api/getratevalue",
    data:
      '{\n"exchangeRate":{\n"localMoneyCode": "COP",\n"foreignMoneyCode": "MXN",\n"date": 1686265381\n}\n}',
    headers: {
      Authorization: token
    }
  });

}
//Aqui exportamos el reporte generado al finalizar las pruebas, el cual se guarda en la carperta Reports
export function handleSummary(data) {
  return {
    //Nombre que llevará el reporte
    "Reports/prueba.html": htmlReport(data),
  };
}