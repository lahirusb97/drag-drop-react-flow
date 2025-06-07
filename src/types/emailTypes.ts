
export interface EmailComponent {
  id: string;
  type: 'text' | 'button' | 'image' | 'divider';
  props: Record<string, any>;
}

export interface PaletteItem {
  id: string;
  type: 'text' | 'button' | 'image' | 'divider';
  label: string;
  icon: string;
}
