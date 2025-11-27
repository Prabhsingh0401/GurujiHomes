import { Star } from 'lucide-react';

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-stone-700 hover:shadow-lg transition duration-300 transform hover:scale-102 animate-slide-up">
      <div className="flex items-start gap-4">
        {/* User Avatar */}
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full border-2 border-stone-300 transform transition duration-300 hover:scale-110"
        />

        {/* Review Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="font-bold text-stone-900 transition duration-300">Review</p>
              <p className="text-sm text-stone-600 transition duration-300">{review.date}</p>
            </div>

            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < review.rating
                      ? 'fill-stone-400 text-stone-400'
                      : 'text-stone-300'
                  }
                />
              ))}
            </div>
          </div>

          {/* Review Text */}
          <p className="text-stone-700 leading-relaxed transition duration-300">{review.text}</p>
        </div>
      </div>
    </div>
  );
}
