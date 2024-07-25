import Link from "next/link";
import { MapPin, Briefcase, CalendarDays, RadioTower } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import JobInfo from "./job-info";
import DeleteJobButton from "./delete-job-button";

import { JobType } from "@/utils/types";

export default function JobCard({ job }: { job: JobType }) {
  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{job.position}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent></CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild size="sm">
          <Link href={`/jobs/${job.id}`}>edit</Link>
        </Button>
        <DeleteJobButton />
      </CardFooter>
    </Card>
  );
}
