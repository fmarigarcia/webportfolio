'use client';
import React from 'react';
import Link from 'next/link.js';

const LocaleChanger: React.FC = () => {
  return (
    <div className="flex gap-2">
      <Link href="/?lang=es" locale="es">
        es
      </Link>
      <Link href="/?lang=en" locale="en">
        en
      </Link>
    </div>
  );
};

export default LocaleChanger;
