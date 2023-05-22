export type ColorModeChangerTransT = {
  colorModeChanger: {
    claro: string;
    oscuro: string;
  };
};

export type HeaderTransT = {
  miscelaneo: {
    jobTitle: string;
  };
};

export type NavTransT = {
  nav: {
    contact: string;
    skills: string;
    about: string;
    jobs: string;
  };
};

export type TranslationsReturnT = ColorModeChangerTransT | HeaderTransT | NavTransT;
