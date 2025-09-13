import { useEffect } from 'react';
import Swal from 'sweetalert2';

const usePreventActions = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      // Ctrl+C, Ctrl+S, Ctrl+P
      if (e.ctrlKey && ['c', 'x', 's', 'p', 'i', 'u'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }

      // PrintScreen key
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Screenshots disabled!`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

export default usePreventActions;
