
'use client';

import React from 'react';
import { useNode } from '@craftjs/core';
import { TextToolbar, ContainerToolbar, ImageToolbar, LinkToolbar, ButtonToolbar } from './Toolbar';

// Text Component
export const TextComponent = ({ text = 'Edit this text', fontSize = '16px', color = '#000000', ...props }) => {
  const { connectors: { connect, drag } } = useNode();
  
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{ fontSize, color }}
      className="p-2 cursor-move"
      {...props}
    >
      {text}
    </div>
  );
};

TextComponent.craft = {
  displayName: 'Text',
  props: {
    text: 'Edit this text',
    fontSize: '16px',
    color: '#000000'
  },
  related: {
    toolbar: TextToolbar
  }
};

// Container Component
export const ContainerComponent = ({ children, backgroundColor = 'transparent', padding = '16px', ...props }) => {
  const { connectors: { connect, drag } } = useNode();
  
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{ backgroundColor, padding }}
      className="min-h-[100px] border-2 border-dashed border-gray-300 cursor-move"
      {...props}
    >
      {children}
    </div>
  );
};

ContainerComponent.craft = {
  displayName: 'Container',
  props: {
    backgroundColor: 'transparent',
    padding: '16px'
  },
  related: {
    toolbar: ContainerToolbar
  }
};

// Image Component
export const ImageComponent = ({ src = '/placeholder.svg', alt = 'Image', width = '100%', ...props }) => {
  const { connectors: { connect, drag } } = useNode();
  
  return (
    <img
      ref={(ref) => connect(drag(ref))}
      src={src}
      alt={alt}
      style={{ width }}
      className="max-w-full h-auto cursor-move"
      {...props}
    />
  );
};

ImageComponent.craft = {
  displayName: 'Image',
  props: {
    src: '/placeholder.svg',
    alt: 'Image',
    width: '100%'
  },
  related: {
    toolbar: ImageToolbar
  }
};

// Link Component
export const LinkComponent = ({ text = 'Click here', url = '#', color = '#007bff', ...props }) => {
  const { connectors: { connect, drag } } = useNode();
  
  return (
    <a
      ref={(ref) => connect(drag(ref))}
      href={url}
      style={{ color }}
      className="underline cursor-move inline-block p-2"
      {...props}
    >
      {text}
    </a>
  );
};

LinkComponent.craft = {
  displayName: 'Link',
  props: {
    text: 'Click here',
    url: '#',
    color: '#007bff'
  },
  related: {
    toolbar: LinkToolbar
  }
};

// Button Component
export const ButtonComponent = ({ text = 'Button', backgroundColor = '#007bff', textColor = '#ffffff', ...props }) => {
  const { connectors: { connect, drag } } = useNode();
  
  return (
    <button
      ref={(ref) => connect(drag(ref))}
      style={{ backgroundColor, color: textColor }}
      className="px-4 py-2 rounded cursor-move border-0 font-medium"
      {...props}
    >
      {text}
    </button>
  );
};

ButtonComponent.craft = {
  displayName: 'Button',
  props: {
    text: 'Button',
    backgroundColor: '#007bff',
    textColor: '#ffffff'
  },
  related: {
    toolbar: ButtonToolbar
  }
};
