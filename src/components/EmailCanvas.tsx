
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Card } from '@/components/ui/card';
import { EmailComponent } from '../types/emailTypes';
import { RenderableComponent } from './RenderableComponent';

interface EmailCanvasProps {
  components: EmailComponent[];
  selectedComponent: EmailComponent | null;
  onSelectComponent: (component: EmailComponent) => void;
  onUpdateComponent: (id: string, props: any) => void;
  onDeleteComponent: (id: string) => void;
}

export const EmailCanvas = ({
  components,
  selectedComponent,
  onSelectComponent,
  onUpdateComponent,
  onDeleteComponent,
}: EmailCanvasProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: 'email-canvas',
  });

  return (
    <Card className="min-h-96 p-6 relative">
      <div
        ref={setNodeRef}
        className={`min-h-80 transition-colors ${
          isOver ? 'bg-primary/5 border-primary border-dashed' : ''
        }`}
      >
        {components.length === 0 ? (
          <div className="flex items-center justify-center h-80 text-muted-foreground">
            <div className="text-center">
              <p className="text-lg mb-2">Drop components here</p>
              <p className="text-sm">Drag elements from the left panel to start building your email</p>
            </div>
          </div>
        ) : (
          <SortableContext items={components.map(c => c.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-4">
              {components.map((component) => (
                <RenderableComponent
                  key={component.id}
                  component={component}
                  isSelected={selectedComponent?.id === component.id}
                  onSelect={() => onSelectComponent(component)}
                  onUpdate={(props) => onUpdateComponent(component.id, props)}
                  onDelete={() => onDeleteComponent(component.id)}
                />
              ))}
            </div>
          </SortableContext>
        )}
      </div>
    </Card>
  );
};
