import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';

interface NotificationToastProps {
    message: string
    type?: string
    onClose: () => void
}

export const NotificationToast = ({ message, type = "Error", onClose }: NotificationToastProps) => {
    const show = !!message

    return (
        <ToastContainer className='p-3' position='bottom-end'>
            <Toast show={show} onClose={onClose} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">{type}</strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
