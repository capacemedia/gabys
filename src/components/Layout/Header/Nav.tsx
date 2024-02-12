import { getAllCategories } from "@/lib/queries/getProductCategorys";
import Image from "next/image";
import logo from "../../../../public/svgs/dark-logo.svg";
import BurgerNav from "./BurgerNav";

const Nav = async () => {
  const data = await getAllCategories();
  console.log("data =====>", data);
  return (
    <nav className="flex items-center justify-between layout bg-white py-4">
      <div>
        <BurgerNav categories={data} />
      </div>
      <ul>
        <Image src={logo} alt="Gaby's secrets logotype" priority />
      </ul>
      <div>
        <p>Hello world</p>
      </div>
    </nav>
  );
};

export default Nav;
