import ResultsInfo from "@/components/resultsInfo";
import { useRouter } from 'next/router';
import Blueberries from "@/components/fruits/blueberries"

export default function Test() {
  const router = useRouter();
  const { text } = router.query;

  if (text == "Blueberries") {
    return <Blueberries/>;
  }

 

  // ...
}