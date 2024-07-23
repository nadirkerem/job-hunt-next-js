"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { JobStatus } from "@/utils/types";

export default function SearchForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const jobStatus = formData.get("jobStatus") as JobStatus;
  };
  return (
    <form
      className="mb-16 grid gap-4 rounded-lg bg-muted p-8 sm:grid-cols-2 md:grid-cols-3"
      onSubmit={handleSubmit}
    >
      <Input type="text" placeholder="Search Jobs" name="search" />
      <Select name="jobStatus">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {["all", ...Object.values(JobStatus)].map((jobStatus) => (
            <SelectItem key={jobStatus} value={jobStatus}>
              {jobStatus}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit">Search</Button>
    </form>
  );
}
