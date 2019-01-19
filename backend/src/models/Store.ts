export type Store = {
  firma: string;
  plz: string;
  ort: string;
  lagerKlassen: LagerKlasse[];
  menge: number;
  preisProPalette: number;
  temperatur: number;
  konfektionierung: boolean;
  containerHandling: boolean;
  labeling: boolean;
  zollAbfertigung: boolean;
  oeffnungszeiten: {
    from: Date;
    to: Date;
  };
};

export enum LagerKlasse {
  LGK_1 = 'LGK_1',
  LGK_3 = 'LGK_3',
  LGK_4_1_A = 'LGK_4_1_A',
  LGK_6_1_A = 'LGK_6_1_A',
  LGK_7 = 'LGK_7',
  LGK_8_A = 'LGK_8_A',
}
