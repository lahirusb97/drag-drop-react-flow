
'use client';

import React from 'react';
import { useNode } from '@craftjs/core';

export const TextToolbar = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">Text</label>
        <input
          id="text"
          type="text"
          value={props.text}
          onChange={(e) => setProp((props) => props.text = e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700 mb-1">Font Size</label>
        <input
          id="fontSize"
          type="text"
          value={props.fontSize}
          onChange={(e) => setProp((props) => props.fontSize = e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">Color</label>
        <input
          id="color"
          type="color"
          value={props.color}
          onChange={(e) => setProp((props) => props.color = e.target.value)}
          className="w-full h-10 border border-gray-300 rounded-md"
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
        <label htmlFor="backgroundColor" className="block text-sm font-medium text-gray-700 mb-1">Background Color</label>
        <input
          id="backgroundColor"
          type="color"
          value={props.backgroundColor === 'transparent' ? '#ffffff' : props.backgroundColor}
          onChange={(e) => setProp((props) => props.backgroundColor = e.target.value)}
          className="w-full h-10 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="padding" className="block text-sm font-medium text-gray-700 mb-1">Padding</label>
        <input
          id="padding"
          type="text"
          value={props.padding}
          onChange={(e) => setProp((props) => props.padding = e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <label htmlFor="src" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
        <input
          id="src"
          type="text"
          value={props.src}
          onChange={(e) => setProp((props) => props.src = e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="alt" className="block text-sm font-medium text-gray-700 mb-1">Alt Text</label>
        <input
          id="alt"
          type="text"
          value={props.alt}
          onChange={(e) => setProp((props) => props.alt = e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Width</label>
        <input
          id="width"
          type="text"
          value={props.width}
          onChange={(e) => setProp((props) => props.width = e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">Link Text</label>
        <input
          id="text"
          type="text"
          value={props.text}
          onChange={(e) => setProp((props) => props.text = e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">URL</label>
        <input
          id="url"
          type="text"
          value={props.url}
          onChange={(e) => setProp((props) => props.url = e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">Color</label>
        <input
          id="color"
          type="color"
          value={props.color}
          onChange={(e) => setProp((props) => props.color = e.target.value)}
          className="w-full h-10 border border-gray-300 rounded-md"
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
        <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
        <input
          id="text"
          type="text"
          value={props.text}
          onChange={(e) => setProp((props) => props.text = e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="backgroundColor" className="block text-sm font-medium text-gray-700 mb-1">Background Color</label>
        <input
          id="backgroundColor"
          type="color"
          value={props.backgroundColor}
          onChange={(e) => setProp((props) => props.backgroundColor = e.target.value)}
          className="w-full h-10 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="textColor" className="block text-sm font-medium text-gray-700 mb-1">Text Color</label>
        <input
          id="textColor"
          type="color"
          value={props.textColor}
          onChange={(e) => setProp((props) => props.textColor = e.target.value)}
          className="w-full h-10 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};
