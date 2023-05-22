import React from 'react';
import About from '../components/About';
import Jobs from '../components/Jobs';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export type NavTabT = 'about' | 'jobs' | 'skills' | 'contact';
export interface NavTabDataT {
  name: NavTabT;
  component: React.FC;
}
export const navTabs: Record<NavTabT, NavTabDataT> = {
  about: { name: 'about', component: About },
  jobs: { name: 'jobs', component: Jobs },
  skills: { name: 'skills', component: Skills },
  contact: { name: 'contact', component: Contact }
};

export type LocaleT = 'es' | 'en';
export const locales: LocaleT[] = ['es', 'en'];
export const defaultLocale: LocaleT = 'es';
