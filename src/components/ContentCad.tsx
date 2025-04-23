import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleCardProps } from "@/types";

const ContentCard: React.FC<ArticleCardProps> = ({ imageUrl, title, source, description }) => {
  return (
    <Card className="w-full shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <CardContent className="flex space-x-4 p-4">
        <img src={imageUrl} alt={title} className="w-28 h-28 object-cover rounded-lg" />
        <div>
          <h3 className="text-orange-500 font-semibold text-lg">
            {title} <span className="text-gray-500"> - {source}</span>
          </h3>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
