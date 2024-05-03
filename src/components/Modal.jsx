
import { modalOpenAtom } from '../lib/store';
import { useAtom } from 'jotai';
import localFont from 'next/font/local';

const shasenem = localFont({src: '../pages/fonts/shasenem.ttf'})

const Modal = ({ title, children }) => {
  const [modalOpen, setModalOpen] = useAtom(modalOpenAtom);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <div dir="rtl" className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-lg mx-auto my-6">
            <div className="bg-white rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
                <h3 className={`${shasenem.className} text-lg font-semibold`}>{title}</h3>
                <button
                  className="p-1 bg-transparent border-0 text-black opacity-50 float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                </button>
              </div>
              <div className="relative p-6">{children}</div>
            </div>
          </div>
        </div>
      )}
      {modalOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      )}
    </>
  );
};

export default Modal;
