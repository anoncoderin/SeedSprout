import Head from "next/head";
import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import QuizProgress from "@/components/QuizProgress";
import styles from "@/styles/Quiz.module.css";
import { useState, useEffect } from "react";
import QuizContents from "@/components/QuizContents";
import Title from "@/components/Title";
import { useRouter } from "next/router";
import Image from "next/image";
import ResultsNew from "@/components/ResultsNew";

export default function QuizPage() {
  const [num, setNum] = useState(5);
  
  const [data, setData] = useState("");
  const [number, setNumber] = useState(1);
  const [resultImageList, setResultImageList] = useState([]);
  const nextButton = number <= 5 && data.length > number - 1;
  console.log(nextButton);
  const router = useRouter();

  const changeQuestion = (binary, resultImage) => {
    if (number == -1) {
      router.push("/");
    } else if (number == 1) {
      if (data.length == 0) {
        setData(data + binary);

        setResultImageList([...resultImageList, resultImage]);
      } else if (data.length == 1) {
        setData(data.slice(-1, 0));
        setData(binary);

        setResultImageList(resultImageList.slice(0, -1));

        setResultImageList([...resultImageList, resultImage]);

        console.log({ data });
        console.log({ resultImageList });
      }
    } else if (number == 2) {
      if (data.length == 1) {
        setData(data + binary);
        setResultImageList([...resultImageList, resultImage]);
      } else if (data.length == 2) {
        setData(data.replace(/\d$/, `${binary}`));
        setResultImageList(resultImageList.slice(0, -1));
        setResultImageList([...resultImageList, resultImage]);
        console.log({ data });
        console.log({ resultImageList });
      }
    } else if (number == 3) {
      if (data.length == 2) {
        setData(data + binary);
        setResultImageList([...resultImageList, resultImage]);
      } else if (data.length == 3) {
        setData(data.replace(/\d$/, `${binary}`));
        setResultImageList(resultImageList.slice(0, -1));
        setResultImageList([...resultImageList, resultImage]);
        console.log({ data });
        console.log({ resultImageList });
      }
    } else if (number == 4) {
      if (data.length == 3) {
        setData(data + binary);
        setResultImageList([...resultImageList, resultImage]);
      } else if (data.length == 4) {
        setData(data.replace(/\d$/, `${binary}`));
        setResultImageList(resultImageList.slice(0, -1));
        setResultImageList([...resultImageList, resultImage]);
        console.log({ data });
        console.log({ resultImageList });
      }
    }
  };

  const backHandler = () => {
    setNumber(number - 1);
    setData(data.slice(0, -1));
    setResultImageList(resultImageList.slice(0, -1));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Head>
        <title>Seed Sprout</title>
        <meta
          name="description"
          content="Learn how to grow your own fruits and veggies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <NavBar />
        <div className={styles.bodyContent}>
          <QuizProgress question={number} />
          {number == 1 ? (
            <div className={styles.quizContainer}>
              <Title title="Which one do you want to grow?" />
              <span onClick={() => changeQuestion("0", "fruitBundle")}>
                <QuizContents
                  option={["Fruits", "/graphics/fruitBundle.svg", 90, 150]}
                />
              </span>
              <span onClick={() => changeQuestion("1", "vegetableBundle")}>
                <QuizContents
                  option={[
                    "Veggies",
                    "/graphics/vegetableBundle.svg",
                    100,
                    150,
                  ]}
                />
              </span>
            </div>
          ) : (
            <></>
          )}
          image list: {resultImageList}, data: {data}, string length:{" "}
          {data.length}
          {number == 2 ? (
            <div className={styles.quizContainer}>
              <Title title="How large is your garden bed?" />
              <span onClick={() => changeQuestion("0", "smallGarden")}>
                <QuizContents
                  option={["Small", "/graphics/smallGarden.svg", 60, 150]}
                />
              </span>
              <span onClick={() => changeQuestion("1", "largeGarden")}>
                <QuizContents
                  option={["Large", "/graphics/largeGarden.svg", 80, 150]}
                />
              </span>
            </div>
          ) : (
            <></>
          )}
          {number == 3 ? (
            <div className={styles.quizContainer}>
              <Title title="How much maintenance can you handle?" />
              <span onClick={() => changeQuestion("0", "wateringCanLow")}>
                <QuizContents
                  option={["Low", "/graphics/wateringCanLow.svg", 100, 150]}
                />
              </span>
              <span onClick={() => changeQuestion("1", "wateringCanHigh")}>
                <QuizContents
                  option={["High", "/graphics/wateringCanHigh.svg", 100, 150]}
                />
              </span>
            </div>
          ) : (
            <></>
          )}
          {number == 4 ? (
            <div className={styles.quizContainer}>
              <Title title="What season are you planting for?" />
              <span onClick={() => changeQuestion("0", "springSeason")}>
                <QuizContents
                  option={["Spring", "/graphics/springSeason.svg", 75, 150]}
                />
              </span>
              <span onClick={() => changeQuestion("1", "summerSeason")}>
                <QuizContents
                  option={["Summer", "/graphics/summerSeason.svg", 80, 150]}
                />
              </span>
              <span onClick={() => changeQuestion("2", "fallSeason")}>
                <QuizContents
                  option={["Autumn", "/graphics/fallSeason.svg", 70, 150]}
                />
              </span>
            </div>
          ) : (
            <></>
          )}
          {number == 5 ? (
            <div className={styles.top_summary_container}>
              <h2 className={styles.h_text}>Summary</h2>
              <div className={styles.img_set_four}>
                <div className={styles.img_set_two} onClick={() => handleClick(6, 'newData')}>
                  <Image
                    src={"/graphics/" + resultImageList[1] + ".svg"}
                    width={180}
                    height={100}
                  ></Image>
                  <Image
                    src={"/graphics/" + resultImageList[3] + ".svg"}
                    width={180}
                    height={100}
                  ></Image>
                </div>
                <div className={styles.img_set_two}>
                  <Image
                    src={"/graphics/" + resultImageList[2] + ".svg"}
                    width={180}
                    height={100}
                  ></Image>
                  <Image
                    src={"/graphics/" + resultImageList[0] + ".svg"}
                    width={180}
                    height={100}
                  ></Image>
                </div>
              </div>
              <div>
                <ResultsNew userinput={data} />
              </div>
            </div>
          ) : (
            <></>
          )}


      

          <div className={styles.backNextContainer}>
            {data.length >= 0 && number == 1 ? (
              <span onClick={() => backHandler()}>
                <Button
                  size={["9.188rem", "2.905rem"]}
                  link="/"
                  text="Back"
                  binary={data}
                />
              </span>
            ) : (
              <></>
            )}

            {data.length > 0 && number > 1 ? (
              <span onClick={() => backHandler()}>
                <Button
                  size={["9.188rem", "2.905rem"]}
                  link=""
                  text="Back"
                  binary={data}
                />
              </span>
            ) : (
              <></>
            )}

            {nextButton && (
              <div className={styles.backNextContainer}>
                <span onClick={() => setNumber(number + 1)}>
                  <Button
                    size={["9.188rem", "2.905rem"]}
                    link=""
                    text="Next"
                    binary={data}
                  />
                </span>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
