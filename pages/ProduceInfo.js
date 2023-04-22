import ResultsInfo from "@/components/ResultsInfo";
import { useRouter } from 'next/router';
import Blueberries from "@/components/Fruits/Blueberries";
import Kale from "@components/Veggies/Kale";
import Kale from "@components/Veggies/Okra"
import Okra from "@/components/Veggies/Okra";

export default function ProduceInfo() {
  const router = useRouter();
  const { text } = router.query;

  if (text == "Blueberries") {
    return <Blueberries/>;
  } else if (text == "Kale"){
    return <Kale/>
  } else if (text== "Okra"){
    return <Okra/>
  }

 

  // ...
}