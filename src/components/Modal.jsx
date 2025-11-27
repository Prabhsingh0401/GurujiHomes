import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
      {/* Modal Card */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-auto relative border border-stone-200 animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-stone-100 transition duration-300 z-10 border border-stone-200 transform hover:scale-110 active:scale-95"
        >
          <X size={24} className="text-stone-700" />
        </button>

        {/* Content */}
        <div className="p-6 md:p-10">{children}</div>
      </div>
    </div>
  );
}
