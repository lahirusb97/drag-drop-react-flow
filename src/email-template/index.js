
// Main export file for the email template workflow
export { EmailTemplateEditor } from './components/EmailTemplateEditor';
export { EmailTemplateProvider } from './context/EmailTemplateContext';
export { useEmailTemplate } from './hooks/useEmailTemplate';

// Export all components for custom usage
export { TextComponent } from './components/UserComponents';
export { ContainerComponent } from './components/UserComponents';
export { ImageComponent } from './components/UserComponents';
export { LinkComponent } from './components/UserComponents';
export { ButtonComponent } from './components/UserComponents';

// Export utilities
export { generateEmailHTML } from './utils/emailExport';
export { validateEmailStructure } from './utils/emailValidation';
