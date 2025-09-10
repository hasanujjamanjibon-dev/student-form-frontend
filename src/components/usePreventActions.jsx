import { useEffect } from 'react';

const usePreventActions = () => {
  useEffect(() => {
    // const handleContextMenu = (e) => {
    //   e.preventDefault();
    // };

    // const handleKeyDown = (e) => {
    //   // Ctrl+C, Ctrl+S, Ctrl+P
    //   if (e.ctrlKey && ['c', 's', 'p'].includes(e.key.toLowerCase())) {
    //     e.preventDefault();
    //   }

    //   // PrintScreen key
    //   if (e.key === 'PrintScreen') {
    //     e.preventDefault();
    //     alert('Screenshots disabled!');
    //   }
    // };

    // document.addEventListener('contextmenu', handleContextMenu);
    // document.addEventListener('keydown', handleKeyDown);

    // return () => {
    //   document.removeEventListener('contextmenu', handleContextMenu);
    //   document.removeEventListener('keydown', handleKeyDown);
    // };
  }, []);
};

export default usePreventActions;
