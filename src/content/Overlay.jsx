import Alert from '@components/custom/overlay/Alert'
import Loader from '@components/custom/overlay/Loader'
import Modal from '@components/custom/overlay/Modal'
import Tooltip from '@components/custom/overlay/Tooltip'

export default function Overlay() {
  return (
    <>
        <Alert />
        <Loader />
        <Modal />
        <Tooltip />
    </>
  )
}
