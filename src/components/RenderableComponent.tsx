
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Trash2, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EmailComponent } from '../types/emailTypes';

interface RenderableComponentProps {
  component: EmailComponent;
  isSelected: boolean;
  onSelect: () => void;
  onUpdate: (props: any) => void;
  onDelete: () => void;
}

export const RenderableComponent = ({
  component,
  isSelected,
  onSelect,
  onUpdate,
  onDelete,
}: RenderableComponentProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: component.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const renderComponent = () => {
    switch (component.type) {
      case 'text':
        return (
          <div
            style={{
              fontSize: component.props.fontSize,
              color: component.props.color,
            }}
            className="p-2"
          >
            {component.props.content}
          </div>
        );
      case 'button':
        return (
          <Button
            style={{
              backgroundColor: component.props.backgroundColor,
              color: component.props.textColor,
            }}
            className="mx-auto block"
          >
            {component.props.text}
          </Button>
        );
      case 'image':
        return (
          <img
            src={component.props.src}
            alt={component.props.alt}
            style={{ width: component.props.width }}
            className="max-w-full h-auto mx-auto block"
          />
        );
      case 'divider':
        return (
          <hr
            style={{
              borderColor: component.props.color,
              borderWidth: component.props.thickness,
            }}
            className="my-4"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group border-2 rounded-lg transition-colors ${
        isSelected ? 'border-primary bg-primary/5' : 'border-transparent hover:border-border'
      }`}
      onClick={onSelect}
    >
      {/* Component Content */}
      <div className="p-2">{renderComponent()}</div>
      
      {/* Controls (shown on hover or when selected) */}
      <div className={`absolute top-2 right-2 flex gap-1 ${isSelected || 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
        <Button
          size="sm"
          variant="outline"
          className="h-6 w-6 p-0"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-3 w-3" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-6 w-6 p-0"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <Trash2 className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};
