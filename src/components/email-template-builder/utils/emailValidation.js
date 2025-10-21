
/**
 * Validate email template structure and content
 */
export const validateEmailStructure = (templateJson) => {
  const warnings = [];
  const errors = [];

  if (!templateJson || !templateJson.ROOT) {
    errors.push('Template is empty or invalid');
    return { isValid: false, warnings, errors };
  }

  const validateNode = (nodeId, nodes, depth = 0) => {
    const node = nodes[nodeId];
    if (!node) return;

    const { type, props, linkedNodes, nodes: childNodes } = node;

    // Check for common email compatibility issues
    switch (type.resolvedName) {
      case 'ImageComponent':
        if (!props.alt || props.alt.trim() === '') {
          warnings.push('Image missing alt text for accessibility');
        }
        if (props.src && props.src.startsWith('/')) {
          warnings.push('Image uses relative URL - use absolute URLs for emails');
        }
        break;

      case 'LinkComponent':
        if (!props.url || props.url === '#') {
          warnings.push('Link has no URL or placeholder URL');
        }
        if (props.url && !props.url.startsWith('http') && !props.url.startsWith('mailto:')) {
          warnings.push('Link should use absolute URL or mailto: protocol');
        }
        break;

      case 'TextComponent':
        if (!props.text || props.text.trim() === '') {
          warnings.push('Text component is empty');
        }
        break;

      case 'ButtonComponent':
        if (!props.text || props.text.trim() === '') {
          warnings.push('Button has no text');
        }
        break;
    }

    // Check nesting depth (email clients have limitations)
    if (depth > 6) {
      warnings.push('Deep nesting detected - may cause issues in some email clients');
    }

    // Recursively validate children
    if (linkedNodes && linkedNodes.ROOT) {
      validateNode(linkedNodes.ROOT, nodes, depth + 1);
    }
    if (childNodes && childNodes.length > 0) {
      childNodes.forEach(childId => validateNode(childId, nodes, depth + 1));
    }
  };

  validateNode('ROOT', templateJson);

  return {
    isValid: errors.length === 0,
    warnings,
    errors
  };
};

/**
 * Check if template has required elements for email
 */
export const validateEmailRequirements = (templateJson) => {
  const requirements = {
    hasContent: false,
    hasUnsubscribeLink: false,
    hasContactInfo: false,
    hasCTA: false
  };

  const checkNode = (nodeId, nodes) => {
    const node = nodes[nodeId];
    if (!node) return;

    const { type, props, linkedNodes, nodes: childNodes } = node;

    switch (type.resolvedName) {
      case 'TextComponent':
        if (props.text && props.text.trim().length > 0) {
          requirements.hasContent = true;
        }
        if (props.text && props.text.toLowerCase().includes('unsubscribe')) {
          requirements.hasUnsubscribeLink = true;
        }
        break;

      case 'LinkComponent':
        if (props.text && props.text.toLowerCase().includes('unsubscribe')) {
          requirements.hasUnsubscribeLink = true;
        }
        break;

      case 'ButtonComponent':
        requirements.hasCTA = true;
        break;
    }

    // Recursively check children
    if (linkedNodes && linkedNodes.ROOT) {
      checkNode(linkedNodes.ROOT, nodes);
    }
    if (childNodes && childNodes.length > 0) {
      childNodes.forEach(childId => checkNode(childId, nodes));
    }
  };

  if (templateJson && templateJson.ROOT) {
    checkNode('ROOT', templateJson);
  }

  return requirements;
};
