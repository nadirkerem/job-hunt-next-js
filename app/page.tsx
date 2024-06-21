import Image from "next/image";
import Link from "next/link";

import LandingImage from "@/assets/job_hunt.svg";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <main>
      <header className="mx-auto max-w-6xl px-4 pt-4 sm:px-8">
        <Logo />
      </header>
      <section className="mx-auto -mt-10 grid h-screen max-w-6xl items-center px-10 lg:grid-cols-[1fr,400px]">
        <div>
          <h1 className="text-5xl font-bold capitalize">
            find your <span className="text-primary">dream</span> job
          </h1>
          <p className="mt-4 max-w-md leading-loose">
            JobHunt is a platform that helps you find your dream job. It allows
            you to search for jobs, apply for them and track the application
            status.
          </p>
          <Button asChild className="mt-4">
            <Link href="/jobs">Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImage} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  );
}
