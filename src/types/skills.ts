export type SkillRatingT = {
  name: string;
  rating: number;
};

export type SkillsTreeT = {
  titleKey: string;
  skills: SkillRatingT[];
}[];
