import { Card, CardContent } from "@/components/ui/card";
import { WartaProps } from "@/types";

const WartaCard: React.FC<WartaProps> = ({tanggal, onClick}) => {
  return (
    <Card className="w-full shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={onClick}>
      <CardContent className="flex space-x-4 p-4">
        <div>
          <h3 className="text-orange-500 font-semibold text-lg">
            Warta Jemaat
          </h3>
          <p className="text-black-700 text-sm mt-2">{tanggal}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WartaCard;