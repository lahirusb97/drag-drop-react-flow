
# Email Template Editor

A complete drag-and-drop email template builder built with React and CraftJS. This folder contains all components, utilities, and hooks needed for the email template workflow.

## Features

- 🎨 Drag-and-drop email component builder
- 📝 Text, Container, Image, Link, and Button components
- 🎯 Real-time style editing panel
- 📧 Email-compatible HTML export
- ✅ Template validation and structure checking
- 💾 Save/load template functionality
- 📱 Responsive design support

## Installation

1. Copy this entire `email-template-builder` folder to your project
2. Install required dependencies:

```bash
npm install @craftjs/core @craftjs/utils lucide-react
```

## Basic Usage

```jsx
import { EmailTemplateEditor } from './email-template-builder';

function App() {
  const handleSave = (templateData) => {
    console.log('Template saved:', templateData);
    // Save to your backend/storage
  };

  return (
    <EmailTemplateEditor 
      onSave={handleSave}
      showPalette={true}
      showStylePanel={true}
    />
  );
}
```

## Advanced Usage

### Custom Integration

```jsx
import { 
  EmailTemplateProvider, 
  useEmailTemplate,
  EmailTemplateEditor 
} from './email-template-builder';

function CustomEmailBuilder() {
  const { saveTemplate, exportEmailHTML, loadTemplate } = useEmailTemplate();

  const handleExport = () => {
    const result = exportEmailHTML();
    if (result.success) {
      console.log('HTML exported successfully');
    }
  };

  return (
    <div>
      <button onClick={handleExport}>Export HTML</button>
      <EmailTemplateEditor 
        showPalette={true}
        showStylePanel={true}
        className="custom-editor"
      />
    </div>
  );
}

function App() {
  return (
    <EmailTemplateProvider>
      <CustomEmailBuilder />
    </EmailTemplateProvider>
  );
}
```

### Loading Existing Templates

```jsx
import { EmailTemplateEditor } from './email-template-builder';

function App() {
  const existingTemplate = {
    // Your saved template JSON
  };

  return (
    <EmailTemplateEditor 
      initialData={existingTemplate}
      onSave={(data) => console.log('Updated template:', data)}
    />
  );
}
```

## API Reference

### EmailTemplateEditor Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialData` | Object | null | Pre-existing template data to load |
| `onSave` | Function | null | Callback when template is saved |
| `className` | String | "" | Additional CSS classes |
| `style` | Object | {} | Inline styles |
| `showPalette` | Boolean | true | Show/hide components palette |
| `showStylePanel` | Boolean | true | Show/hide style editing panel |

### useEmailTemplate Hook

```jsx
const {
  saveTemplate,      // Save current template
  loadTemplate,      // Load template from JSON
  exportEmailHTML,   // Export as HTML file
  getTemplatePreview, // Get HTML preview
  clearTemplate,     // Clear current template
  templateData,      // Current template data
  isLoading         // Loading state
} = useEmailTemplate();
```

### Utility Functions

```jsx
import { 
  generateEmailHTML,
  generatePlainText,
  validateEmailStructure,
  validateEmailRequirements 
} from './email-template-builder/utils/emailExport';

// Generate HTML from template JSON
const html = generateEmailHTML(templateData);

// Validate template structure
const validation = validateEmailStructure(templateData);
console.log(validation.warnings);
```

## Folder Structure

```
email-template-builder/
├── components/          # React components
│   ├── EmailTemplateEditor.js
│   ├── UserComponents.js
│   ├── ComponentsPalette.js
│   ├── StylePanel.js
│   └── Toolbar.js
├── context/            # React context
│   └── EmailTemplateContext.js
├── hooks/              # Custom hooks
│   └── useEmailTemplate.js
├── utils/              # Utility functions
│   ├── emailExport.js
│   └── emailValidation.js
├── index.js           # Main exports
└── README.md          # This file
```

## Email Client Compatibility

The generated HTML is optimized for:
- ✅ Gmail
- ✅ Outlook (2016+)
- ✅ Apple Mail
- ✅ Yahoo Mail
- ✅ Thunderbird
- ✅ Mobile clients (iOS/Android)

## Customization

### Adding New Components

1. Create component in `components/UserComponents.js`
2. Add toolbar in `components/Toolbar.js`
3. Update palette in `components/ComponentsPalette.js`
4. Export from `index.js`

### Styling

All components use standard CSS classes that can be customized. The editor uses Tailwind CSS classes by default but can be easily adapted to any CSS framework.

## Migration from TypeScript

This package is written in JavaScript for maximum compatibility. If you need TypeScript support, you can:

1. Rename `.js` files to `.tsx`
2. Add type annotations
3. Install `@types/react` and other type packages

## License

This email template editor is designed to be easily portable between projects. Feel free to customize and extend as needed.
