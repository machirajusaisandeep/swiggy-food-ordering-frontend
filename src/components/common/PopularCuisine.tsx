type Props = {
  title: string;
  cusines: string[];
};

const PopularCuisine = ({ title, cusines }: Props) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex space-x-2 overflow-x-auto no-scrollbar">
        {cusines.map((cuisine, index) => {
          return <img key={index} src={cuisine} className="w-24 h-auto" />;
        })}
      </div>
    </div>
  );
};

export default PopularCuisine;
