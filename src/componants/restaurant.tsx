import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

type paramProps = {
  id: string;
};

interface IData {
  id: string;
  foodList: IFoodList;
}
interface IFoodList {
  [key: string]: number;
}

// interface IFood  {
//  [:string , value:number]
// }

const Restaurant: React.FC = () => {
  const { id } = useParams<paramProps>();
  const [foodItems, setFoodItems] = useState<any>([]);

  function getList() {
    const obj = data.find((e) => e.id === id);
    // console.log(obj);
    // const { foodList } = obj;
    // const entries: any = Object.entries(foodList);
    // console.log(entries)
    const d = obj?.foodList || {};
    setFoodItems(d);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className="text-2xl p-3 border-slate-600">List of Items</div>

      <table className="min-w-full text-center text-sm font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Price (in Rs.)
            </th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((e: any, index: number) => {
            // return <div className="m-2 border-black " key={index} >{ e.name} : {e.price}</div>
            return (
              <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                <td className="whitespace-nowrap px-6 py-4">{e.name}</td>
                <td className="whitespace-nowrap px-6 py-4">{e.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Restaurant;
