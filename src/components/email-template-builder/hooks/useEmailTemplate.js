
'use client';

import { useEditor } from '@craftjs/core';
import { useEmailTemplateContext } from '../context/EmailTemplateContext';
import { generateEmailHTML } from '../utils/emailExport';
import { validateEmailStructure } from '../utils/emailValidation';

export const useEmailTemplate = () => {
  const { query, actions } = useEditor();
  const { saveTemplate: saveToContext, templateData, isLoading } = useEmailTemplateContext();

  const saveTemplate = async () => {
    try {
      const json = query.serialize();
      const validation = validateEmailStructure(json);
      
      if (!validation.isValid) {
        console.warn('Template validation warnings:', validation.warnings);
      }

      await saveToContext(json);
      return { success: true, data: json };
    } catch (error) {
      console.error('Error saving template:', error);
      return { success: false, error };
    }
  };

  const loadTemplate = (templateJson) => {
    try {
      actions.deserialize(templateJson);
      return { success: true };
    } catch (error) {
      console.error('Error loading template:', error);
      return { success: false, error };
    }
  };

  const exportEmailHTML = () => {
    try {
      const json = query.serialize();
      const html = generateEmailHTML(json);
      
      // Create and trigger download
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'email-template.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      return { success: true, html };
    } catch (error) {
      console.error('Error exporting email HTML:', error);
      return { success: false, error };
    }
  };

  const getTemplatePreview = () => {
    try {
      const json = query.serialize();
      return generateEmailHTML(json);
    } catch (error) {
      console.error('Error generating preview:', error);
      return null;
    }
  };

  const clearTemplate = () => {
    actions.clearEvents();
    return { success: true };
  };

  return {
    saveTemplate,
    loadTemplate,
    exportEmailHTML,
    getTemplatePreview,
    clearTemplate,
    templateData,
    isLoading
  };
};
