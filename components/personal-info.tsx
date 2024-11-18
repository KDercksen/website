import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import React from "react";

const PersonalInfoCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn("px-4 py-2 shadow-lg rounded-xl", className)}
    {...props}
  />
));
PersonalInfoCard.displayName = "PersonalInfoCard";

const PersonalInfoHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardHeader
    ref={ref}
    className={cn("flex flex-col items-center gap-4", className)}
    {...props}
  />
));
PersonalInfoHeader.displayName = "PersonalInfoHeader";

const PersonalInfoAvatar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Avatar> & {
    imagePath: string | StaticImageData;
    name: string;
    avatarFallback: string;
  }
>(({ className, imagePath, name, avatarFallback, ...props }, ref) => (
  <Avatar ref={ref} className={cn("h-32 w-32 shadow-lg", className)} {...props}>
    <Image
      className="aspect-square h-full w-full"
      src={imagePath}
      alt={name}
      width={128}
      height={128}
    />
    <AvatarFallback>{avatarFallback}</AvatarFallback>
  </Avatar>
));
PersonalInfoAvatar.displayName = "PersonalInfoAvatar";

const PersonalInfoTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    name: string;
    title: string;
  }
>(({ className, name, title, ...props }, ref) => (
  <div ref={ref} className={cn("text-center space-y-2", className)} {...props}>
    <h2 className="text-3xl font-bold tracking-wide">{name}</h2>
    <p className="text-balance text-muted-foreground font-light">{title}</p>
  </div>
));
PersonalInfoTitle.displayName = "PersonalInfoTitle";

const PersonalInfoContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardContent ref={ref} className={cn("space-y-6", className)} {...props} />
));
PersonalInfoContent.displayName = "PersonalInfoContent";

const PersonalInfoDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-center text-balance text-muted-foreground", className)}
    {...props}
  />
));
PersonalInfoDescription.displayName = "PersonalInfoDescription";

export {
  PersonalInfoCard,
  PersonalInfoHeader,
  PersonalInfoAvatar,
  PersonalInfoTitle,
  PersonalInfoContent,
  PersonalInfoDescription,
};
