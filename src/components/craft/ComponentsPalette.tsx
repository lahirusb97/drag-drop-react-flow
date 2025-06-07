
import React from 'react';
import { Element, useEditor } from '@craftjs/core';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Type, Image, MousePointer, Minus, Container, Link } from 'lucide-react';
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
    <Card className="h-full border-0 rounded-none">
      <CardHeader>
        <CardTitle className="text-lg">Components</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {components.map((comp) => {
          const IconComponent = comp.icon;
          return (
            <Button
              key={comp.name}
              ref={(ref) => connectors.create(ref, <Element is={comp.component} canvas={comp.name === 'Container'} />)}
              variant="outline"
              className="w-full justify-start gap-3 h-auto p-3"
            >
              <IconComponent className="h-5 w-5" />
              {comp.name}
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
};
