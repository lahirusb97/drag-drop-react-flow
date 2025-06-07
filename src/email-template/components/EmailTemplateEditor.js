
'use client';

import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { ComponentsPalette } from './ComponentsPalette';
import { StylePanel } from './StylePanel';
import { ContainerComponent, TextComponent, ImageComponent, LinkComponent, ButtonComponent } from './UserComponents';
import { EmailTemplateProvider } from '../context/EmailTemplateContext';

const EmailTemplateEditor = ({ 
  initialData = null, 
  onSave = null, 
  className = "",
  style = {},
  showPalette = true,
  showStylePanel = true 
}) => {
  return (
    <EmailTemplateProvider onSave={onSave}>
      <Editor
        resolver={{
          ContainerComponent,
          TextComponent,
          ImageComponent,
          LinkComponent,
          ButtonComponent
        }}
        onRender={({ render }) => {
          if (initialData) {
            // Load initial data if provided
            setTimeout(() => {
              render.deserialize(initialData);
            }, 100);
          }
        }}
      >
        <div 
          className={`min-h-screen bg-gray-50 flex w-full ${className}`}
          style={style}
        >
          {/* Components Palette */}
          {showPalette && (
            <div className="w-64 border-r border-gray-200 bg-white">
              <ComponentsPalette />
            </div>
          )}
          
          {/* Main Canvas Area */}
          <div className="flex-1 p-6 overflow-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Email Template Builder</h1>
                <p className="text-gray-600 mt-2">Drag components from the left panel to build your email template</p>
              </div>
              <div className="min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <Frame>
                  <Element
                    is={ContainerComponent}
                    canvas
                    backgroundColor="transparent"
                    padding="24px"
                    className="min-h-80"
                  />
                </Frame>
              </div>
            </div>
          </div>
          
          {/* Style Panel */}
          {showStylePanel && (
            <div className="w-80 border-l border-gray-200 bg-white">
              <StylePanel />
            </div>
          )}
        </div>
      </Editor>
    </EmailTemplateProvider>
  );
};

export { EmailTemplateEditor };
