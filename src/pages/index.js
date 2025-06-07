
'use client';

import React from 'react';
import { EmailTemplateEditor } from '../components/email-template-builder';

const EmailBuilder = () => {
  const handleSave = (templateData) => {
    console.log('Template saved:', templateData);
    // Here you can save to your backend, localStorage, etc.
    localStorage.setItem('emailTemplate', JSON.stringify(templateData));
  };

  const loadSavedTemplate = () => {
    const saved = localStorage.getItem('emailTemplate');
    return saved ? JSON.parse(saved) : null;
  };

  return (
    <EmailTemplateEditor 
      initialData={loadSavedTemplate()}
      onSave={handleSave}
      showPalette={true}
      showStylePanel={true}
    />
  );
};

export default EmailBuilder;
