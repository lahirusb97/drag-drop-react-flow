
import React from 'react';
import { useNode } from '@craftjs/core';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const TextToolbar = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="text">Text</Label>
        <Input
          id="text"
          value={props.text}
          onChange={(e) => setProp((props: any) => props.text = e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="fontSize">Font Size</Label>
        <Input
          id="fontSize"
          value={props.fontSize}
          onChange={(e) => setProp((props: any) => props.fontSize = e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="color">Color</Label>
        <Input
          id="color"
          type="color"
          value={props.color}
          onChange={(e) => setProp((props: any) => props.color = e.target.value)}
        />
      </div>
    </div>
  );
};

export const ContainerToolbar = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="backgroundColor">Background Color</Label>
        <Input
          id="backgroundColor"
          type="color"
          value={props.backgroundColor === 'transparent' ? '#ffffff' : props.backgroundColor}
          onChange={(e) => setProp((props: any) => props.backgroundColor = e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="padding">Padding</Label>
        <Input
          id="padding"
          value={props.padding}
          onChange={(e) => setProp((props: any) => props.padding = e.target.value)}
        />
      </div>
    </div>
  );
};

export const ImageToolbar = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="src">Image URL</Label>
        <Input
          id="src"
          value={props.src}
          onChange={(e) => setProp((props: any) => props.src = e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="alt">Alt Text</Label>
        <Input
          id="alt"
          value={props.alt}
          onChange={(e) => setProp((props: any) => props.alt = e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="width">Width</Label>
        <Input
          id="width"
          value={props.width}
          onChange={(e) => setProp((props: any) => props.width = e.target.value)}
        />
      </div>
    </div>
  );
};

export const LinkToolbar = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="text">Link Text</Label>
        <Input
          id="text"
          value={props.text}
          onChange={(e) => setProp((props: any) => props.text = e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          value={props.url}
          onChange={(e) => setProp((props: any) => props.url = e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="color">Color</Label>
        <Input
          id="color"
          type="color"
          value={props.color}
          onChange={(e) => setProp((props: any) => props.color = e.target.value)}
        />
      </div>
    </div>
  );
};

export const ButtonToolbar = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="text">Button Text</Label>
        <Input
          id="text"
          value={props.text}
          onChange={(e) => setProp((props: any) => props.text = e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="backgroundColor">Background Color</Label>
        <Input
          id="backgroundColor"
          type="color"
          value={props.backgroundColor}
          onChange={(e) => setProp((props: any) => props.backgroundColor = e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="textColor">Text Color</Label>
        <Input
          id="textColor"
          type="color"
          value={props.textColor}
          onChange={(e) => setProp((props: any) => props.textColor = e.target.value)}
        />
      </div>
    </div>
  );
};
