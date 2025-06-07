
import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Type, Image, MousePointer, Minus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const paletteItems = [
  { id: 'text', type: 'text', label: 'Text Block', icon: Type },
  { id: 'button', type: 'button', label: 'Button', icon: MousePointer },
  { id: 'image', type: 'image', label: 'Image', icon: Image },
  { id: 'divider', type: 'divider', label: 'Divider', icon: Minus },
];

const DraggableItem = ({ item }: { item: typeof paletteItems[0] }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: item.id,
    data: {
      type: 'palette-item',
      componentType: item.type,
    },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        opacity: isDragging ? 0.5 : 1,
      }
    : undefined;

  const IconComponent = item.icon;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-3 border border-border rounded-lg cursor-grab hover:bg-accent transition-colors flex items-center gap-3 bg-background"
    >
      <IconComponent className="h-5 w-5 text-primary" />
      <span className="text-sm font-medium">{item.label}</span>
    </div>
  );
};

export const ComponentPalette = () => {
  return (
    <Card className="h-full border-0 rounded-none">
      <CardHeader>
        <CardTitle className="text-lg">Components</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {paletteItems.map((item) => (
          <DraggableItem key={item.id} item={item} />
        ))}
      </CardContent>
    </Card>
  );
};
