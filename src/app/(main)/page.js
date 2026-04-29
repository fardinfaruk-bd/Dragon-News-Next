async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories, "categories");
  return (
    <div className=" container mx-auto grid grid-cols-12 gap-4 my-15">
      <div className=" col-span-3">
        <h2 className="font-bold text-xl">All Categories</h2>
        <ul className="flex flex-col gap-2 mt-6">
          {categories.map((category) => (<li className="bg-slate-100 p-2 rounded-md font-bold text-center text-[#9F9F9F] text-xl" key={category.category_id}> {category.category_name}</li>))
          }
        </ul>
      </div>
      <div className="font-bold text-3xl bg-red-100 col-span-6">All News</div>
      <div className="font-bold text-3xl bg-yellow-100 col-span-3">
        All Socials Icons
      </div>
    </div>
  );
}
