import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({children, className, ...rest}) => {
  return (
    <button className={`bg-primary py-2 px-4 text-white rounded ${className}`} {...rest}>{children}</button>
  )
}
