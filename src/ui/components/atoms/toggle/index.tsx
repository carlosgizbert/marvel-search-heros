import { useEffect, useState } from "react";
import { ToggleProps } from "./types";

import * as S from "./styles";

export function Toggle({
  id,
  checked = false,
  disabled = false,
  onChange,
  $colorCircle = "background10",
  $colorChecked = "primary10",
  $colorUnchecked = "background20",
  dataTestId,
}: Readonly<ToggleProps>) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <S.Label
      htmlFor={id}
      checked={isChecked}
      disabled={disabled}
      $colorCircle={$colorCircle}
      $colorChecked={$colorChecked}
      $colorUnchecked={$colorUnchecked}
    >
      <S.Input
        type="checkbox"
        id={id}
        name={id}
        disabled={disabled}
        data-testid={dataTestId}
        className="orange-toggle"
        defaultChecked={isChecked}
        onChange={(e) => {
          if (!disabled) {
            setIsChecked(!isChecked);
            if (onChange) onChange(e.target.checked);
          }
        }}
      />
    </S.Label>
  );
}
