import ResultsInfo from "@/components/ResultsInfo";
import { useRouter } from 'next/router';
import Blueberries from "@/components/fruits/blueberries"

export default function ProduceInfo() {
  const router = useRouter();
  const { text } = router.query;

  if (text == "Blueberries") {
    return <Blueberries/>;
  }

 

  // ...
}