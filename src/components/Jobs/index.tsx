import React, { useContext, useState } from 'react';
import { orderBy } from 'lodash/fp';
import { LocaleContext } from '@providers/LocaleProvider';
import useTranslations from '@hooks/useTranslations';
import { AllJobsTransT } from '@mytypes/translations';
import Menu from './Menu';
import JobText from './JobText';

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
  const allJobs = orderBy('fechaFin', ['desc'], translations.allJobs);
  return (
    <div
      className={`bottom-0 flex w-full flex-col items-end overflow-hidden p-2
      md:absolute md:right-0 md:flex-row-reverse md:justify-between md:p-8`}
    >
      <Menu currentIndex={activeIndex} setCurrentIndex={setActiveIndex} entries={allJobs.map((job) => job.empresa)} />
      <JobText text={allJobs[activeIndex].responsabilidades} />
    </div>
  );
};

export default Jobs;
