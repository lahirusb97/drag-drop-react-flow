
import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { ComponentsPalette } from './ComponentsPalette';
import { StylePanel } from './StylePanel';
import { ContainerComponent, TextComponent, ImageComponent, LinkComponent, ButtonComponent } from './UserComponents';
import { Card } from '@/components/ui/card';

export const CraftEmailBuilder = () => {
  return (
    <Editor
      resolver={{
        ContainerComponent,
        TextComponent,
        ImageComponent,
        LinkComponent,
        ButtonComponent
      }}
    >
      <div className="min-h-screen bg-background flex w-full">
        {/* Components Palette */}
        <div className="w-64 border-r border-border bg-card">
          <ComponentsPalette />
        </div>
        
        {/* Main Canvas Area */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground">Email Template Builder</h1>
              <p className="text-muted-foreground mt-2">Drag components from the left panel to build your email template</p>
            </div>
            <Card className="min-h-96 p-6">
              <Frame>
                <Element
                  is={ContainerComponent}
                  canvas
                  backgroundColor="transparent"
                  padding="24px"
                  className="min-h-80"
                />
              </Frame>
            </Card>
          </div>
        </div>
        
        {/* Style Panel */}
        <div className="w-80 border-l border-border bg-card">
          <StylePanel />
        </div>
      </div>
    </Editor>
  );
};
