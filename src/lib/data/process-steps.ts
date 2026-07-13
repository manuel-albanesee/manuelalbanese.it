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
      "Se il caso lo richiede, una verifica di fattibilità o un prototipo a costo fisso prima di qualsiasi impegno più ampio — così si valida l'approccio con dati veri.",
    deliverable: "Report di fattibilità o prototipo funzionante, con esito onesto",
  },
  {
    number: "03",
    title: "Costruzione",
    description:
      "Sviluppo per passi con punti di verifica frequenti. Ogni scelta importante è documentata e motivata, non improvvisata in corsa.",
    deliverable: "Incrementi verificabili, non un'unica consegna a sorpresa",
  },
  {
    number: "04",
    title: "Consegna",
    description:
      "Codice, documentazione e — dove serve — le prove che mostrano come il sistema è stato controllato. Il progetto resta comprensibile anche senza di me.",
    deliverable: "Software completo + documentazione + prove di verifica",
  },
];
