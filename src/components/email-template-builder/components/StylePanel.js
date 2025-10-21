
'use client';

import React from 'react';
import { useEditor } from '@craftjs/core';
import { useEmailTemplate } from '../hooks/useEmailTemplate';

export const StylePanel = () => {
  const { selected, actions, query } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related?.toolbar,
        isDeletable: query.node(currentNodeId).isDeletable()
      };
    }

    return { selected };
  });

  const { exportEmailHTML, saveTemplate } = useEmailTemplate();

  return (
    <div className="h-full border-0 rounded-none bg-white">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Style Panel</h2>
        {selected && (
          <p className="text-sm text-gray-600 mt-1">
            {selected.name} Component
          </p>
        )}
      </div>
      <div className="p-4">
        {selected ? (
          <div className="space-y-4">
            {selected.settings && React.createElement(selected.settings)}
            {selected.isDeletable && (
              <button
                className="w-full mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                onClick={() => actions.delete(selected.id)}
              >
                Delete Component
              </button>
            )}
          </div>
        ) : (
          <p className="text-gray-600 text-sm">
            Select a component to edit its properties
          </p>
        )}
        
        {/* Email Actions */}
        <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
          <button
            onClick={saveTemplate}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Save Template
          </button>
          <button
            onClick={exportEmailHTML}
            className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Export HTML
          </button>
        </div>
      </div>
    </div>
  );
};
