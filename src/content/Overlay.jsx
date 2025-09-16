import Alert from '../components/overlay/Alert'
import Loader from '../components/overlay/Loader'
import Modal from '../components/overlay/Modal'
import Tooltip from '../components/overlay/Tooltip'

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
