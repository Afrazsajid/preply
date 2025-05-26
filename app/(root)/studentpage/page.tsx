// page.tsx
import StudentPage from "@/components/StudnetPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading student page...</div>}>
      <StudentPage />
    </Suspense>
  );
}
