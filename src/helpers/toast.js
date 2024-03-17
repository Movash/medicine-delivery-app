import toast from 'react-hot-toast';

export const showToast = (type, message) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        duration: 3000,
        position: 'top-center',
      });
      break;
    case 'error':
      toast.error(message, {
        duration: 3000,
        position: 'top-center',
      });
      break;
    default:
      toast(message, {
        duration: 3000,
        position: 'top-center',
      });
  }
};
