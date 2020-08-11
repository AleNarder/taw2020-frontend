interface Location {
  Comune: string,
  Provincia: string,
  Regione: string,
  CAP: string | number,
  Indirizzo?: string,
}

export { Location }
