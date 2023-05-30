import { SkillsTreeT } from '@mytypes/skills';

const skillTree: SkillsTreeT = [
  {
    titleKey: 'frontend',
    skills: [
      { name: 'HTML', rating: 1 },
      { name: 'CSS', rating: 0.9 },
      { name: 'Typescript', rating: 0.9 },
      { name: 'React', rating: 0.8 },
      { name: 'TailwindCSS', rating: 0.7 },
      { name: 'Bootstrap', rating: 0.9 },
      { name: 'MaterialUI', rating: 0.8 }
    ]
  },
  {
    titleKey: 'backend',
    skills: [
      { name: 'NodeJS', rating: 0.9 },
      { name: 'PHP', rating: 0.8 },
      { name: 'Symfony', rating: 0.8 },
      { name: 'Elixir', rating: 0.6 }
    ]
  },
  {
    titleKey: 'database',
    skills: [
      { name: 'MySQL', rating: 0.8 },
      { name: 'PostgreSQL', rating: 0.7 },
      { name: 'SQL Server', rating: 0.7 }
    ]
  },
  {
    titleKey: 'other',
    skills: [
      { name: 'Scrum', rating: 0.9 },
      { name: 'Agile', rating: 0.9 },
      { name: 'Git', rating: 0.8 },
      { name: 'Docker', rating: 0.6 },
      { name: 'AWS', rating: 0.5 },
      { name: 'Cypress', rating: 0.7 }
    ]
  },
  {
    titleKey: 'languages',
    skills: [
      { name: 'Español', rating: 1 },
      { name: 'English', rating: 0.9 },
      { name: 'Catalan', rating: 0.7 }
    ]
  }
];

export default skillTree;
