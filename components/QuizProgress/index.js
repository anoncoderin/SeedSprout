import { useRouter } from "next/router";
import Image from "next/image";

export default function QuizProgress() {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/quizPageOne" ? (
        <Image src={"/graphics/quizProgress1.svg"} width={200} height={100} />
      ) : router.pathname === "/quizPageTwo" ? (
        <Image src={"/graphics/quizProgress-2.svg"} width={200} height={100} />
      ) : router.pathname === "/quizPageThree" ? (
        <Image src={"/graphics/quizProgress-3.svg"} width={200} height={100} />
      ) : (
        (router.pathname = "/quizPageFour" ? (
          <Image
            src={"/graphics/quizProgress-4.svg"}
            width={200}
            height={100}
          />
        ) : (
          ""
        ))
      )}
    </>
  );
}
