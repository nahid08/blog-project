import { ToastProvider, useToasts } from "react-toast-notifications";

export default function Notification(props) {

    const { addToast } = useToasts();

    return addToast(props.message, { appearance: props.appearance});

}