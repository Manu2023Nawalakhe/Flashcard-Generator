import { toast } from "react-toastify";

// default toast with messaage - takes input message

export function toastify(message) {
  toast(`${message}`, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
//success toast with message takes input message and locationof toast on screen

export function successToast(message, loc) {
  toast.success(`${message} !`, {
    position: loc,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
//error toast with message takes input message and location of toast on screen
export function errorToast(message, loc) {
  toast.error(`${message} !`, {
    position: loc,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
