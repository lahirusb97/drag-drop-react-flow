
import React, { useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { ComponentPalette } from './ComponentPalette';
import { EmailCanvas } from './EmailCanvas';
import { PropertiesPanel } from './PropertiesPanel';
import { EmailComponent } from '../types/emailTypes';

export const EmailTemplateBuilder = () => {
  const [components, setComponents] = useState<EmailComponent[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<EmailComponent | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over) {
      setActiveId(null);
      return;
    }

    // Handle dropping from palette to canvas
    if (over.id === 'email-canvas' && active.data.current?.type === 'palette-item') {
      const newComponent: EmailComponent = {
        id: `component-${Date.now()}`,
        type: active.data.current.componentType,
        props: getDefaultProps(active.data.current.componentType),
      };
      setComponents(prev => [...prev, newComponent]);
    }

    setActiveId(null);
  };

  const getDefaultProps = (type: string) => {
    switch (type) {
      case 'text':
        return { content: 'Your text here', fontSize: '16px', color: '#000000' };
      case 'button':
        return { text: 'Click Here', backgroundColor: '#007bff', textColor: '#ffffff', url: '#' };
      case 'image':
        return { src: '/placeholder.svg', alt: 'Image', width: '100%' };
      case 'divider':
        return { color: '#cccccc', thickness: '1px' };
      default:
        return {};
    }
  };

  const updateComponent = (id: string, newProps: any) => {
    setComponents(prev => 
      prev.map(comp => 
        comp.id === id ? { ...comp, props: { ...comp.props, ...newProps } } : comp
      )
    );
  };

  const deleteComponent = (id: string) => {
    setComponents(prev => prev.filter(comp => comp.id !== id));
    setSelectedComponent(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="min-h-screen bg-background flex w-full">
        {/* Component Palette */}
        <div className="w-64 border-r border-border bg-card">
          <ComponentPalette />
        </div>
        
        {/* Main Canvas Area */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground">Email Template Builder</h1>
              <p className="text-muted-foreground mt-2">Drag components from the left panel to build your email template</p>
            </div>
            <EmailCanvas 
              components={components}
              selectedComponent={selectedComponent}
              onSelectComponent={setSelectedComponent}
              onUpdateComponent={updateComponent}
              onDeleteComponent={deleteComponent}
            />
          </div>
        </div>
        
        {/* Properties Panel */}
        <div className="w-80 border-l border-border bg-card">
          <PropertiesPanel 
            selectedComponent={selectedComponent}
            onUpdateComponent={updateComponent}
          />
        </div>
      </div>
      
      <DragOverlay>
        {activeId ? (
          <div className="p-2 bg-primary/10 border-2 border-primary border-dashed rounded">
            Dragging...
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
