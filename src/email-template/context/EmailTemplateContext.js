
'use client';

import React, { createContext, useContext, useState } from 'react';

const EmailTemplateContext = createContext();

export const EmailTemplateProvider = ({ children, onSave }) => {
  const [templateData, setTemplateData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const saveTemplate = async (data) => {
    setIsLoading(true);
    try {
      setTemplateData(data);
      if (onSave) {
        await onSave(data);
      }
      console.log('Template saved:', data);
    } catch (error) {
      console.error('Error saving template:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadTemplate = (data) => {
    setTemplateData(data);
  };

  const clearTemplate = () => {
    setTemplateData(null);
  };

  const value = {
    templateData,
    isLoading,
    saveTemplate,
    loadTemplate,
    clearTemplate
  };

  return (
    <EmailTemplateContext.Provider value={value}>
      {children}
    </EmailTemplateContext.Provider>
  );
};

export const useEmailTemplateContext = () => {
  const context = useContext(EmailTemplateContext);
  if (!context) {
    throw new Error('useEmailTemplateContext must be used within EmailTemplateProvider');
  }
  return context;
};
