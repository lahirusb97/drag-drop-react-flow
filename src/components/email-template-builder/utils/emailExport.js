
/**
 * Generate email-compatible HTML from CraftJS template data
 */
export const generateEmailHTML = (templateJson) => {
  if (!templateJson || !templateJson.ROOT) {
    return '<html><body><p>Empty template</p></body></html>';
  }

  const generateNodeHTML = (nodeId, nodes) => {
    const node = nodes[nodeId];
    if (!node) return '';

    const { type, props, linkedNodes, nodes: childNodes } = node;

    let html = '';
    let style = '';
    let attributes = '';

    switch (type.resolvedName) {
      case 'TextComponent':
        style = `font-size: ${props.fontSize}; color: ${props.color}; padding: 8px;`;
        html = `<div style="${style}">${props.text}</div>`;
        break;

      case 'ContainerComponent':
        style = `background-color: ${props.backgroundColor}; padding: ${props.padding}; min-height: 100px;`;
        const containerChildren = childNodes ? childNodes.map(childId => generateNodeHTML(childId, nodes)).join('') : '';
        html = `<div style="${style}">${containerChildren}</div>`;
        break;

      case 'ImageComponent':
        style = `width: ${props.width}; max-width: 100%; height: auto;`;
        html = `<img src="${props.src}" alt="${props.alt}" style="${style}" />`;
        break;

      case 'LinkComponent':
        style = `color: ${props.color}; text-decoration: underline; padding: 8px; display: inline-block;`;
        html = `<a href="${props.url}" style="${style}">${props.text}</a>`;
        break;

      case 'ButtonComponent':
        style = `background-color: ${props.backgroundColor}; color: ${props.textColor}; padding: 12px 16px; border: none; border-radius: 4px; font-weight: 500; text-decoration: none; display: inline-block;`;
        html = `<a href="#" style="${style}">${props.text}</a>`;
        break;

      default:
        // Handle linked nodes (for Canvas components)
        if (linkedNodes && linkedNodes.ROOT) {
          html = generateNodeHTML(linkedNodes.ROOT, nodes);
        } else if (childNodes && childNodes.length > 0) {
          html = childNodes.map(childId => generateNodeHTML(childId, nodes)).join('');
        }
        break;
    }

    return html;
  };

  const bodyContent = generateNodeHTML('ROOT', templateJson);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        img {
            max-width: 100%;
            height: auto;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="email-container">
        ${bodyContent}
    </div>
</body>
</html>`;
};

/**
 * Generate plain text version of email
 */
export const generatePlainText = (templateJson) => {
  if (!templateJson || !templateJson.ROOT) {
    return 'Empty template';
  }

  const extractText = (nodeId, nodes) => {
    const node = nodes[nodeId];
    if (!node) return '';

    const { type, props, linkedNodes, nodes: childNodes } = node;
    let text = '';

    switch (type.resolvedName) {
      case 'TextComponent':
        text = props.text + '\n';
        break;
      case 'LinkComponent':
        text = `${props.text} (${props.url})\n`;
        break;
      case 'ButtonComponent':
        text = `[${props.text}]\n`;
        break;
      default:
        if (linkedNodes && linkedNodes.ROOT) {
          text = extractText(linkedNodes.ROOT, nodes);
        } else if (childNodes && childNodes.length > 0) {
          text = childNodes.map(childId => extractText(childId, nodes)).join('');
        }
        break;
    }

    return text;
  };

  return extractText('ROOT', templateJson).trim();
};
