
import React from 'react';
import { useNode, UserComponent } from '@craftjs/core';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Text Component
export const TextComponent: UserComponent = ({ text = 'Edit this text', fontSize = '16px', color = '#000000', ...props }) => {
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
    toolbar: () => import('./Toolbar').then(mod => mod.TextToolbar)
  }
};

// Container Component
export const ContainerComponent: UserComponent = ({ children, backgroundColor = 'transparent', padding = '16px', ...props }) => {
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
    toolbar: () => import('./Toolbar').then(mod => mod.ContainerToolbar)
  }
};

// Image Component
export const ImageComponent: UserComponent = ({ src = '/placeholder.svg', alt = 'Image', width = '100%', ...props }) => {
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
    toolbar: () => import('./Toolbar').then(mod => mod.ImageToolbar)
  }
};

// Link Component
export const LinkComponent: UserComponent = ({ text = 'Click here', url = '#', color = '#007bff', ...props }) => {
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
    toolbar: () => import('./Toolbar').then(mod => mod.LinkToolbar)
  }
};

// Button Component
export const ButtonComponent: UserComponent = ({ text = 'Button', backgroundColor = '#007bff', textColor = '#ffffff', ...props }) => {
  const { connectors: { connect, drag } } = useNode();
  
  return (
    <Button
      ref={(ref) => connect(drag(ref))}
      style={{ backgroundColor, color: textColor }}
      className="cursor-move"
      {...props}
    >
      {text}
    </Button>
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
    toolbar: () => import('./Toolbar').then(mod => mod.ButtonToolbar)
  }
};
