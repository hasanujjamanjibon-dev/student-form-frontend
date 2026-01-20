import { createBrowserRouter } from 'react-router-dom';
import StudentFullInformationForm from '../pages/StudentFullInformationForm';
import PrintPreview from '../pages/PrintPreview';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StudentFullInformationForm />,
  },
  {
    path: 'print-preview',
    element: <PrintPreview />,
  },
]);
export default router;
