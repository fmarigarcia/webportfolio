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

export type AboutTransT = {
  about: {
    parrafo: string;
  };
};

export type JobObjectT = {
  empresa: string;
  responsabilidades: string;
  fechaFin: string;
};

export type AllJobsTransT = {
  allJobs: JobObjectT[];
};

export type SkillAreaT = {
  skillArea: Record<string, string>;
};

export type TranslationsReturnT =
  | ColorModeChangerTransT
  | HeaderTransT
  | NavTransT
  | AboutTransT
  | AllJobsTransT
  | SkillAreaT;
