
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { EmailComponent } from '../types/emailTypes';

interface PropertiesPanelProps {
  selectedComponent: EmailComponent | null;
  onUpdateComponent: (id: string, props: any) => void;
}

export const PropertiesPanel = ({ selectedComponent, onUpdateComponent }: PropertiesPanelProps) => {
  if (!selectedComponent) {
    return (
      <Card className="h-full border-0 rounded-none">
        <CardHeader>
          <CardTitle className="text-lg">Properties</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">Select a component to edit its properties</p>
        </CardContent>
      </Card>
    );
  }

  const updateProp = (key: string, value: any) => {
    onUpdateComponent(selectedComponent.id, { [key]: value });
  };

  const renderProperties = () => {
    switch (selectedComponent.type) {
      case 'text':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={selectedComponent.props.content || ''}
                onChange={(e) => updateProp('content', e.target.value)}
                placeholder="Enter text content"
              />
            </div>
            <div>
              <Label htmlFor="fontSize">Font Size</Label>
              <Input
                id="fontSize"
                value={selectedComponent.props.fontSize || '16px'}
                onChange={(e) => updateProp('fontSize', e.target.value)}
                placeholder="16px"
              />
            </div>
            <div>
              <Label htmlFor="color">Text Color</Label>
              <Input
                id="color"
                type="color"
                value={selectedComponent.props.color || '#000000'}
                onChange={(e) => updateProp('color', e.target.value)}
              />
            </div>
          </div>
        );
      case 'button':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="text">Button Text</Label>
              <Input
                id="text"
                value={selectedComponent.props.text || ''}
                onChange={(e) => updateProp('text', e.target.value)}
                placeholder="Click Here"
              />
            </div>
            <div>
              <Label htmlFor="url">Link URL</Label>
              <Input
                id="url"
                value={selectedComponent.props.url || ''}
                onChange={(e) => updateProp('url', e.target.value)}
                placeholder="https://example.com"
              />
            </div>
            <div>
              <Label htmlFor="backgroundColor">Background Color</Label>
              <Input
                id="backgroundColor"
                type="color"
                value={selectedComponent.props.backgroundColor || '#007bff'}
                onChange={(e) => updateProp('backgroundColor', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="textColor">Text Color</Label>
              <Input
                id="textColor"
                type="color"
                value={selectedComponent.props.textColor || '#ffffff'}
                onChange={(e) => updateProp('textColor', e.target.value)}
              />
            </div>
          </div>
        );
      case 'image':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="src">Image URL</Label>
              <Input
                id="src"
                value={selectedComponent.props.src || ''}
                onChange={(e) => updateProp('src', e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <Label htmlFor="alt">Alt Text</Label>
              <Input
                id="alt"
                value={selectedComponent.props.alt || ''}
                onChange={(e) => updateProp('alt', e.target.value)}
                placeholder="Image description"
              />
            </div>
            <div>
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                value={selectedComponent.props.width || '100%'}
                onChange={(e) => updateProp('width', e.target.value)}
                placeholder="100% or 300px"
              />
            </div>
          </div>
        );
      case 'divider':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="color">Color</Label>
              <Input
                id="color"
                type="color"
                value={selectedComponent.props.color || '#cccccc'}
                onChange={(e) => updateProp('color', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="thickness">Thickness</Label>
              <Input
                id="thickness"
                value={selectedComponent.props.thickness || '1px'}
                onChange={(e) => updateProp('thickness', e.target.value)}
                placeholder="1px"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="h-full border-0 rounded-none">
      <CardHeader>
        <CardTitle className="text-lg">Properties</CardTitle>
        <p className="text-sm text-muted-foreground capitalize">
          {selectedComponent.type} Component
        </p>
      </CardHeader>
      <CardContent>
        {renderProperties()}
      </CardContent>
    </Card>
  );
};
