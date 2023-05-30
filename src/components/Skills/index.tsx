import React, { useContext } from 'react';
import StarRating from './StarRating';
import skillTree from './constants';
import useTranslations from '@hooks/useTranslations';
import { LocaleContext } from '@providers/LocaleProvider';
import { SkillAreaT } from '@mytypes/translations';

const query = `
skillArea(locale: $locale){
  frontend
  backend
  database
  other
  languages
}
`;

const Skills: React.FC = () => {
  const starSize = 25;
  const { locale } = useContext(LocaleContext);
  const translations = useTranslations<SkillAreaT>({
    query,
    locale
  });
  if (translations === undefined) return <div />;
  const { skillArea } = translations;
  return (
    <div className="absolute bottom-0 flex gap-8 p-8">
      {skillTree.map((area) => (
        <div className="flex max-w-125 flex-col gap-2" key={area.titleKey}>
          <h3
            className={`overflow-hidden text-ellipsis whitespace-nowrap text-xl 
          font-bold uppercase text-accent-dark dark:text-accent-light`}
          >
            {skillArea[area.titleKey] ?? area.titleKey}
          </h3>
          {area.skills.map((skill) => (
            <div key={skill.name}>
              <h4 className="text-md">{skill.name}</h4>
              <StarRating value={skill.rating} size={starSize} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
