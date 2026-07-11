export interface UpcomingEvent {
  id: string;
  city: string;
  date: string;
  location: string;
  category: string;
}

export interface PastResult {
  id: string;
  name: string;
  summary: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  icon: "team" | "compete" | "rank" | "join";
}

export interface FeaturePoint {
  number: string;
  title: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  tagline: string;
  icon: "gear" | "bulb" | "shield" | "brain";
  featured?: boolean;
}

export interface Discipline {
  id: string;
  name: string;
  image: string;
}

export interface Advantage {
  title: string;
  description: string;
  icon: "medal" | "gavel" | "briefcase" | "bolt";
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
}

export interface Sponsor {
  name: string;
  logo: string;
}

export type SignupRole = "judge" | "volunteer" | "member";

export interface SignupFormState {
  name: string;
  location: string;
  email: string;
}
