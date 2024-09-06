import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
} from "react";
import { Colors } from "@/ui/styles/tokens";

import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startElement?: ReactNode;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  $backgroundColor?: keyof Colors;
  $placeholderColor?: keyof Colors;
  $textColor?: keyof Colors;
  $onPressEnter: () => void;
}

export const SearchField = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      startElement,
      wrapperProps,
      $backgroundColor = "primary20",
      $textColor = "primary10",
      $placeholderColor = "primary10",
      $onPressEnter,
      ...props
    },
    ref
  ) {
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        $onPressEnter();
      }
    };

    return (
      <S.Wrapper
        $backgroundColor={$backgroundColor}
        $placeholderColor={$placeholderColor}
        onKeyDown={handleKeyDown}
        {...wrapperProps}
      >
        {startElement}
        <S.Input ref={ref} $textColor={$textColor} {...props} />
      </S.Wrapper>
    );
  }
);
