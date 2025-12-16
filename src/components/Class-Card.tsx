import React from 'react';

interface ClassCardProps {
  title: string;
  description?: string;
  sessions: string;
  sessionType?: string;
  maxStudents: string;
  days: string;
  price: string;
  period: string;
  buttonText: string;
  variant: 'primary' | 'premium';
}

const ClassCard: React.FC<ClassCardProps> = ({
  title,
  description,
  sessions,
  sessionType,
  maxStudents,
  days,
  price,
  period,
  buttonText,
  variant
}) => {
  const isPremium = variant === 'premium';
  
  const cardStyles = isPremium 
    ? 'border-2 border-primary-pink bg-white shadow-lg transform hover:scale-105'
    : 'border border-primary-blue bg-white shadow-md transform hover:scale-105';
  
  const titleStyles = isPremium
    ? 'text-primary-pink'
    : 'text-primary-blue';
  
  const buttonStyles = isPremium
    ? 'bg-primary-pink hover:bg-pink-600 text-white'
    : 'bg-primary-blue hover:bg-blue-600 text-white';

  return (
    <div className={`rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:shadow-xl ${cardStyles}`}>
      <div className="text-center mb-4">
        <div className="flex items-center gap-2">
          <h3 className={`text-xl font-bold ${titleStyles}`}>
            {title}
          </h3>
          {isPremium && (
            <span className="inline-block bg-primary-pink text-white text-xs font-medium px-3 py-1 rounded-full">
              Premium
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      <div className="space-y-3 mb-6 flex-grow">
        <div className="flex items-start">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
          <span className="text-gray-700 text-sm">{sessions}</span>
        </div>
        
        {sessionType && (
          <div className="flex items-start">
            <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
            <span className="text-gray-700 text-sm">{sessionType}</span>
          </div>
        )}
        
        <div className="flex items-start">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
          <span className="text-gray-700 text-sm">{maxStudents}</span>
        </div>
        <div className="flex items-start">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
          <span className="text-gray-700 text-sm">{days}</span>
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center">
          <span className="text-3xl font-bold text-gray-800">{price}</span>
          {period && <span className="text-gray-600 ml-1">{period}</span>}
        </div>
      </div>

      <button 
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${buttonStyles}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ClassCard;