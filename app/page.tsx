import Link from "next/link";
import { CheckCircle, Leaf, Package } from "lucide-react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import ProductReel from '@/components/ProductReel'
import { Button, buttonVariants } from "@/components/ui/button";

const perks = [
  {
    name: "Fast Doorstep Delivery",
    Icon: Package,
    description:
      "Receive your assets delivered straight to your doorstep quickly and efficiently, just like with Amazon.",
    category: "Delivery",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "All assets are thoroughly vetted for top quality. If you're not satisfied, we offer a 30-day refund guarantee.",
    category: "Quality",
  },
  {
    name: "Eco-Friendly Commitment",
    Icon: Leaf,
    description:
      "We dedicate 1% of our sales to the preservation and restoration of the environment.",
    category: "Sustainability",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Explore a world of top-quality{" "}
            <span className="text-blue-600">products and services</span> at
            Enesca.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Enesca, your premier destination for exceptional products
            and services. Our dedicated team ensures that every listing meets
            our rigorous quality standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost" className="bg-neutral-100">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='Brand new'
        /> */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
