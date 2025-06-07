'use client';
import React from 'react';
import { EmailTemplateEditor } from '@/components/email-template-builder';

export default function EmailBuilderPage() {
  const handleSave = (templateData) => {
    console.log('Template saved:', templateData);
    if (typeof window !== 'undefined') {
      localStorage.setItem('emailTemplate', JSON.stringify(templateData));
    }
  };

  const loadSavedTemplate = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('emailTemplate');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  };

  return (
    <EmailTemplateEditor
      initialData={loadSavedTemplate()}
      onSave={handleSave}
      showPalette
      showStylePanel
    />
  );
}
