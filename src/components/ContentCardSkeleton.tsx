import React from 'react';

const ContentCardSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-lg bg-gray-50 animate-pulse">
            <div className="w-full h-36 bg-gray-200 rounded-lg" />
            <div className="h-4 bg-gray-200 rounded w-3/5" />
            <div className="h-4 bg-gray-200 rounded w-2/5" />
            <div className="h-4 bg-gray-200 rounded w-4/5" />
        </div>
    );
};

export default ContentCardSkeleton;
