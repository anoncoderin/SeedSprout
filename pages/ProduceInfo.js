import ResultsInfo from "@/components/ResultsInfo";
import { useRouter } from 'next/router';
import Blueberries from "@/components/Fruits/Blueberries";
import Kale from "@/components/Veggies/Kale";
import Corn from "@/components/Veggies/Corn";
import Okra from "@/components/Veggies/Okra";
import Carrot from "@/components/Veggies/Carrot";
import Cilantro from "@/components/Veggies/Cilantro";
import Carrot from "@/components/Veggies/Carrot";
import Potato from "@/components/Veggies/Potato";

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
  }

 

  // ...
}