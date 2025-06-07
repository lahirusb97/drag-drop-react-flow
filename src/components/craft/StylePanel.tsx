
import React from 'react';
import { useEditor } from '@craftjs/core';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

  return (
    <Card className="h-full border-0 rounded-none">
      <CardHeader>
        <CardTitle className="text-lg">Style Panel</CardTitle>
        {selected && (
          <p className="text-sm text-muted-foreground">
            {selected.name} Component
          </p>
        )}
      </CardHeader>
      <CardContent>
        {selected ? (
          <div className="space-y-4">
            {selected.settings && React.createElement(selected.settings)}
            {selected.isDeletable && (
              <Button
                variant="destructive"
                className="w-full mt-4"
                onClick={() => actions.delete(selected.id)}
              >
                Delete Component
              </Button>
            )}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">
            Select a component to edit its properties
          </p>
        )}
      </CardContent>
    </Card>
  );
};
