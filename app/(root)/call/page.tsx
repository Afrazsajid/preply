import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <div className="bg-black">
      <h3>call agent</h3>

      <Agent userName="me" userId={"hh"} type="generate" />
    </div>
  );
};

export default Page;
