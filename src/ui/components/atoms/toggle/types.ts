import { Colors } from "@/ui/styles/tokens/types";

export interface ToggleProps {
  id: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (status: boolean) => void;
  $colorCircle?: keyof Colors;
  $colorChecked?: keyof Colors;
  $colorUnchecked?: keyof Colors;
  dataTestId?: string;
}

export interface LabelProps {
  checked: boolean;
  disabled: boolean;
  $colorCircle: keyof Colors;
  $colorChecked: keyof Colors;
  $colorUnchecked: keyof Colors;
}
