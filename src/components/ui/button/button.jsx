import React, { forwardRef } from "react";
import { StyledButton } from "./styles";

const Button = forwardRef(
  (
    { children, minWidth, backgroundColor, link, className, onClick, ...props },
    ref
  ) => {
    return (
      <StyledButton
        {...props}
        ref={ref}
        $minWidth={minWidth}
        $backgroundColor={backgroundColor}
        {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
        className={className}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
