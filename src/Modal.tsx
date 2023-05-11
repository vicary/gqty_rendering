import { Box, Layer, LayerExtendedProps } from "grommet"
import { FC } from "react"

interface ModalProps {
  onClose: () => void
  title: string
  children?: string | JSX.Element | JSX.Element[]
}

const Modal: FC<LayerExtendedProps & ModalProps> = ({ onClose, children, title, position = "right" }, props) => {

  return (
    <Layer {...props} position={position} onEsc={onClose} >
      <Box pad="medium" gap="medium" overflow="auto">
        <h2>{title}</h2>
        {children}
      </Box>
    </Layer >
  )
}

export default Modal