import { useState } from "react"

const useVisible = (defaultVisibility = false) => {
  const [visibility, setVisibility] = useState(defaultVisibility)

  const handleVisibility = value => {
    if (value && typeof value === "boolean") {
      setVisibility(value)
    } else {
      setVisibility(state => !state)
    }
  }

  return [visibility, handleVisibility]
}

export default useVisible