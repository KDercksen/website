import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { Mail, Linkedin, Github, GraduationCap } from "lucide-react";

interface PersonalInfoProps {
  imagePath: string | StaticImageData;
  name: string;
  avatarFallback: string;
  title: string;
  description: string;
  className?: string;
  email?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  scholarUrl?: string;
}

export default function PersonalInfo({
  imagePath,
  name,
  avatarFallback,
  title,
  description,
  className,
  email,
  linkedinUrl,
  githubUrl,
  scholarUrl,
}: PersonalInfoProps) {
  return (
    <Card className={cn("px-4 py-2 shadow-lg rounded-xl", className)}>
      <CardHeader className="flex flex-col items-center gap-4">
        <Avatar className="h-32 w-32">
          <Image
            className="aspect-square h-full w-full"
            src={imagePath}
            alt={name}
            width={128}
            height={128}
          />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-wide">{name}</h2>
          <p className="text-balance text-muted-foreground font-light">
            {title}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-center text-balance text-muted-foreground">
          {description}
        </p>

        <div className="flex justify-center gap-2">
          {email && (
            <Link
              href={`mailto:${email}`}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="size-6" />
            </Link>
          )}
          {linkedinUrl && (
            <Link
              href={linkedinUrl}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-6" />
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="size-6" />
            </Link>
          )}
          {scholarUrl && (
            <Link
              href={scholarUrl}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
            >
              <GraduationCap className="size-6" />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
