
'use client';

import React from 'react';
import { Element, useEditor } from '@craftjs/core';
import { Type, Image, MousePointer, Container, Link } from 'lucide-react';
import { TextComponent, ContainerComponent, ImageComponent, LinkComponent, ButtonComponent } from './UserComponents';

const components = [
  { name: 'Text', icon: Type, component: TextComponent },
  { name: 'Container', icon: Container, component: ContainerComponent },
  { name: 'Image', icon: Image, component: ImageComponent },
  { name: 'Link', icon: Link, component: LinkComponent },
  { name: 'Button', icon: MousePointer, component: ButtonComponent },
];

export const ComponentsPalette = () => {
  const { connectors } = useEditor();

  return (
    <div className="h-full border-0 rounded-none bg-white">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Components</h2>
      </div>
      <div className="p-4 space-y-3">
        {components.map((comp) => {
          const IconComponent = comp.icon;
          return (
            <button
              key={comp.name}
              ref={(ref) => connectors.create(ref, <Element is={comp.component} canvas={comp.name === 'Container'} />)}
              className="w-full justify-start gap-3 h-auto p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center text-left bg-white"
            >
              <IconComponent className="h-5 w-5 text-gray-600" />
              <span className="text-gray-900">{comp.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
