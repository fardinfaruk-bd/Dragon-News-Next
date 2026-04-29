import { redirect } from "next/navigation";

export default async function Home() {
  const defaultCategory = "01";
  return redirect(`/category/${defaultCategory}`);
}
