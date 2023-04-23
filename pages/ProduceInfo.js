import ResultsInfo from "@/components/ResultsInfo";
import { useRouter } from 'next/router';
import Blueberries from "@/components/Fruits/Blueberries";
import Kale from "@/components/Veggies/Kale";
import Corn from "@/components/Veggies/Corn";
import Okra from "@/components/Veggies/Okra";
import Carrot from "@/components/Veggies/Carrot";
import Cilantro from "@/components/Veggies/Cilantro";
import Potato from "@/components/Veggies/Potato";
import Zucchini from "@/components/Veggies/Zucchini";
import Cauliflower from "@/components/Veggies/Cauliflower";
import Lettuce from "@/components/Veggies/Lettuce";
import BrusselSprout from "@/components/Veggies/BrusselSprout";
import Cabbage from "@/components/Veggies/Cabbage";
import Radish from "@/components/Veggies/Radish";

export default function ProduceInfo() {
  const router = useRouter();
  const { text } = router.query;

  if (text == "Blueberries") {
    return <Blueberries/>;
  } else if (text == "Kale"){
    return <Kale/>
  } else if (text== "Okra"){
    return <Okra/>
  } else if (text== "Corn"){
    return <Corn/>
  } else if (text == "Carrot"){
    return <Carrot/>
  } else if (text== "Cilantro"){
    return <Cilantro/>
  } else if (text == "Carrot"){
    return <Carrot/>
  } else if (text == "BellPepper"){
    return <BellPepper/>
  }else if (text == "Potato"){
    return <Potato/>
  }else if (text == "Zucchini"){
    return <Zucchini/>
  }else if (text == "Cauliflower"){
    return <Cauliflower/>
  }else if (text == "Lettuce"){
    return <Lettuce/>
  }else if (text == "Brussel Sprout"){
    return <BrusselSprout/>
  }else if (text == "Cabbage"){
    return <Cabbage/>
  }else if (text == "Radish"){
    return <Radish/>
  }
  else if (text == "Apples") {
    return <Apples />
  } else if (text == "Apricots") {
    return <Apricots />
  }else if (text == "Blackberries") {
    return <Blackberries />
  } else if (text == "Cantaloupe") {
    return <Cantaloupe />
  } 



 

  // ...
}