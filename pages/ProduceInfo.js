import ResultsInfo from "@/components/ResultsInfo";
import { useRouter } from 'next/router';
import Apricots from "@/components/Fruits/Apricots"
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
import Broccoli from "@/components/Veggies/Broccoli";
import Turnip from "@/components/Veggies/Turnip";
import Beet from "@/components/Veggies/Beet";
import SweetPotato from "@/components/Veggies/SweetPotato";
import Eggplant from "@/components/Veggies/Eggplant";
import Peas from "@/components/Veggies/Peas";
import Chard from "@/components/Veggies/Chard";
import Squash from "@/components/Veggies/Squash";
import Cherries from "@/components/Fruits/Cherries";
import Cranberries from "@/components/Fruits/Cranberries";
import Cucumbers from "@/components/Fruits/Cucumbers";
import Figs from "@/components/Fruits/Figs";
import Gooseberries from "@/components/Fruits/Gooseberries";
import Grapes from "@/components/Fruits/Grapes";
import Honeydew from "@/components/Fruits/Honeydew";
import Kiwi from "@/components/Fruits/Kiwi";
import Lime from "@/components/Fruits/Lime";
import Nectarine from "@/components/Fruits/Nectarines";
import Olives from "@/components/Fruits/Olives";
import Pears from "@/components/Fruits/Pears";
import Persimmons from "@/components/Fruits/Persimmons";
import Plums from "@/components/Fruits/Plum";
import Pomegranate from "@/components/Fruits/Pome";
import Raspberries from "@/components/Fruits/Raspberries";
import Strawberries from "@/components/Fruits/Strawberries";
import Blackberries from "@/components/Fruits/Blackberries";
import Tomatoes from "@/components/Fruits/Tomatoes";
import Watermelon from "@/components/Fruits/Watermelon";
import Garlic from "@/components/Veggies/Garlic";
import Apples from "@/components/Fruits/Apples";
import Beans from "@/components/Veggies/Beans";
import BellPepper from "@/components/Veggies/BellPepper";

export default function ProduceInfo() {
  const router = useRouter();
  const { text } = router.query;

  if (text == "Blueberries") {
    return <Blueberries />;
  } else if (text == "Kale") {
    return <Kale />
  } else if (text == "Okra") {
    return <Okra />
  } else if (text == "Corn") {
    return <Corn />
  } else if (text == "Carrot") {
    return <Carrot />
  } else if (text == "Cilantro") {
    return <Cilantro />
  } else if (text == "Carrot") {
    return <Carrot />
  } else if (text == "Bell Pepper") {
    return <BellPepper />
  } else if (text == "Potato") {
    return <Potato />
  } else if (text == "Zucchini") {
    return <Zucchini />
  } else if (text == "Cauliflower") {
    return <Cauliflower />
  } else if (text == "Lettuce") {
    return <Lettuce />
  } else if (text == "Brussel Sprout") {
    return <BrusselSprout />
  } else if (text == "Cabbage") {
    return <Cabbage />
  } else if (text == "Radish") {
    return <Radish />
  } else if (text == "Broccoli") {
    return <Broccoli />
  } else if (text == "Turnip") {
    return <Turnip />
  } else if (text == "Beets") {
    return <Beet />
  } else if (text == "Sweet Potato") {
    return <SweetPotato />
  } else if (text == "Pea") {
    return <Peas />
  }else if (text == "Eggplant") {
    return <Eggplant />
  }else if (text == "Chard") {
    return <Chard />
  }else if (text == "Squash") {
    return <Squash />
  }else if (text == "Garlic") {
    return <Garlic />
  }
   else if (text == "Apples") {
    return <Apples/>
  } else if (text == "Apricots") {
    return <Apricots />
  } else if (text == "Blackberries") {
    return <Blackberries />
  } else if (text == "Cantaloupe") {
    return <Cantaloupe />
  }else if (text == "Cherries") {
    return <Cherries />
  }else if (text == "Cranberries") {
    return <Cranberries />
  }else if (text == "Cucumbers") {
    return <Cucumbers />
  } else if (text == "Figs") {
    return <Figs />
  } else if (text == "Gooseberries"){
    return <Gooseberries/>
  } else if (text == "Grapes"){
    return <Grapes/>
  } else if (text == "Honeydew"){
    return <Honeydew/>
  } else if (text == "Kiwi"){
    return <Kiwi/>
  } else if (text == "Lime"){
    return <Lime/>
  } else if (text == "Nectarine"){
    return <Nectarine/>
  } else if (text == "Olives"){
    return <Olives/>
  } else if (text == "Pears"){
    return <Pears/>
  } else if (text == "Persimmons"){
    return <Persimmons/>
  } else if (text == "Plums"){
    return <Plums/>
  } else if (text == "Pomegranate"){
    return <Pomegranate/>
  } else if (text == "Raspberries"){
    return <Raspberries/>
  } else if (text == "Strawberries"){
    return <Strawberries/>
  } else if (text == "Tomatoes"){
    return <Tomatoes/>
  } else if (text == "Watermelon"){
    return <Watermelon/>
  } else if (text == "Beans"){
    return <Beans/>
  }



  // ...
}