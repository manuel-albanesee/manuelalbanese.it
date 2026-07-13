export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  deliverable: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Ascolto",
    description:
      "Una call di 30 minuti per capire il problema reale, non quello presunto: vincoli, dati disponibili, definizione di successo.",
    deliverable: "Sintesi scritta del problema e fattibilità a caldo",
  },
  {
    number: "02",
    title: "Fattibilità",
    description:
      "Se il caso lo richiede, un audit o un proof-of-concept a costo fisso prima di qualsiasi impegno più ampio — così si valida l'approccio con dati veri.",
    deliverable: "Report tecnico o PoC funzionante, con esito onesto",
  },
  {
    number: "03",
    title: "Costruzione",
    description:
      "Sviluppo iterativo con checkpoint frequenti. Ogni scelta architetturale è tracciata e motivata, non improvvisata in corsa.",
    deliverable: "Incrementi verificabili, non un'unica consegna a sorpresa",
  },
  {
    number: "04",
    title: "Consegna",
    description:
      "Codice, documentazione e — dove pertinente — il trace di audit che dimostra come il sistema è stato validato. Il progetto resta comprensibile anche senza di me.",
    deliverable: "Software completo + documentazione + audit trail",
  },
];
