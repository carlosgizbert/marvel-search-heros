import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
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
}

export const SearchField = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      startElement,
      wrapperProps,
      $backgroundColor = "primary20",
      $textColor = "primary10",
      $placeholderColor = "primary10",
      ...props
    },
    ref
  ) {
    return (
      <S.Wrapper
        $backgroundColor={$backgroundColor}
        $placeholderColor={$placeholderColor}
        {...wrapperProps}
      >
        {startElement}
        <S.Input ref={ref} $textColor={$textColor} {...props} />
      </S.Wrapper>
    );
  }
);
