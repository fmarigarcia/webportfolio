import React, { useContext, useState } from 'react';
import { orderBy } from 'lodash/fp';
import { LocaleContext } from '@providers/LocaleProvider';
import useTranslations from '@hooks/useTranslations';
import { AllJobsTransT, JobObjectT } from '@mytypes/translations';
import Menu from './Menu';

const query = `
allJobs(locale: $locale){
  empresa
  responsabilidades
  fechaFin
}
`;

const Jobs: React.FC = () => {
  const { locale } = useContext(LocaleContext);
  const translations = useTranslations<AllJobsTransT>({
    query,
    locale
  });
  const [activeIndex, setActiveIndex] = useState(0);
  if (translations === undefined) return <div />;
  const allJobs = orderBy('fechaFin', ['desc'], translations.allJobs) as JobObjectT[];
  return (
    <div className="md:absolute md:bottom-0 md:right-0">
      <Menu currentIndex={activeIndex} setCurrentIndex={setActiveIndex} entries={allJobs.map((job) => job.empresa)} />
    </div>
  );
};

export default Jobs;
