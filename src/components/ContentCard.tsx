import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleCardProps } from "@/types";
import { formatFullDate } from "@/lib/date";

const ContentCard: React.FC<ArticleCardProps> = ({ imageUrl, title, article_category, description, createdAt, onClick }) => {

  return (
    
    <Card className="w-full shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={onClick}>
      <CardContent className="flex space-x-4 p-4">
        <img src={imageUrl} alt={title} className="w-28 h-28 object-cover rounded-lg" />
        <div>
          <h3 className="text-orange-500 font-semibold text-lg">
            {title} <span className="text-gray-500"> - {String(article_category?.nama_kategori || '')}</span>
          </h3>
          <p className="text-black-700 text-sm mt-2">{formatFullDate(createdAt)}</p>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentCard;