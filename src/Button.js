import React from 'react'
import { Button as Base } from 'rebass'

const sizes = {
  small: { px: 3, py: 2 },
  medium: { px: 4, py: 3 },
  large: { px: 5, py: 4 }
}

const variants = {
  primary: { bg: 'blue' },
  secondary: { bg: 'green' },
  error: { bg: 'red' }
}

const Button = ({
  size = 'small',
  variant = 'primary',
  primary,
  secondary,
  error,
  ...props
}) =>
  <Base
    {...sizes[size]}
    {...variants[variant]}
    {...(primary && variants.primary)}
    {...(secondary && variants.secondary)}
    {...(error && variants.error)}
    m={2}
    {...props}
  />

Button.displayName = 'Button'

export default Button
