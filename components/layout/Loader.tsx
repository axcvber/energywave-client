import React from 'react'

interface ILoader {
  children: React.ReactNode
  quantity: number
}

const Loader: React.FC<ILoader> = ({ children, quantity }) => {
  return (
    <>
      {Array(quantity)
        .fill(0)
        .map((_, inx: number) => (
          <React.Fragment key={inx}>{children}</React.Fragment>
        ))}
    </>
  )
}

export default Loader
