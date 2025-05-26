import { redirect } from "next/navigation";

async function Home() {
  redirect("/call");
}

export default Home;
