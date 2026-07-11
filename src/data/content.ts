import type {
  UpcomingEvent,
  PastResult,
  JourneyStep,
  FeaturePoint,
  Category,
  Discipline,
  Advantage,
  LeaderboardEntry,
  Sponsor,
} from "../types";

import roboRace from "../assets/disciplines/robo-race.png";
import lineFollower from "../assets/disciplines/line-follower.png";
import rcRacing from "../assets/disciplines/rc-racing.png";
import fpvDrone from "../assets/disciplines/fpv-drone.png";
import roboHockey from "../assets/disciplines/robo-hockey.png";
import roboWar from "../assets/disciplines/robo-war.png";

import nitDelhi from "../assets/sponsors/nit-delhi.png";
import bit from "../assets/sponsors/bit.png";
import nitSilchar from "../assets/sponsors/nit-silchar.png";
import roboWerx from "../assets/sponsors/robowerx.png";
import iitBombay from "../assets/sponsors/iit-bombay.png";
import generalRobotics from "../assets/sponsors/general-robotics.png";

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "mumbai-open",
    city: "Mumbai Open",
    date: "15 Nov 2025",
    location: "MMRDA Grounds, BKC",
    category: "Robo War · Robo Race",
  },
  {
    id: "delhi-invitational",
    city: "Delhi Invitational",
    date: "29 Nov 2025",
    location: "Thyagaraj Stadium",
    category: "Line Follower · RC Racing",
  },
];

export const pastResults: PastResult[] = [
  { id: "r1", name: "Bengaluru Regionals", summary: "Team Ironclad took the podium in a 3-round decision." },
  { id: "r2", name: "Chennai Qualifiers", summary: "Voltbenders clinched the finals with a last-round KO." },
  { id: "r3", name: "Pune Championship", summary: "Kinetic Foxes swept Robo Hockey and Robo Race." },
];

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: "Build Your Team",
    description: "Register your crew, pick a discipline and lock in your bot's category.",
    icon: "team",
  },
  {
    step: 2,
    title: "Compete Across India",
    description: "Enter regional arenas from Bengaluru to Delhi and climb the bracket.",
    icon: "compete",
  },
  {
    step: 3,
    title: "Earn National Ranking",
    description: "Every match feeds your verified BotLeague rating and public profile.",
    icon: "rank",
  },
  {
    step: 4,
    title: "Join the League",
    description: "Top-ranked builders get scouted for national squads and industry roles.",
    icon: "join",
  },
];

export const featurePoints: FeaturePoint[] = [
  {
    number: "1",
    title: "Structured Events",
    description: "From one-off meets to a year-round competitive season, run to a single rulebook.",
  },
  {
    number: "2",
    title: "Digital Identity",
    description: "Your professional robotics legacy, tracked, verified and built match by match.",
  },
  {
    number: "3",
    title: "National Ranking",
    description: "Benchmark your skills against the best engineers and operators in India.",
  },
  {
    number: "4",
    title: "Career Pathway",
    description: "Turning arena victories into real-world industry and internship opportunities.",
  },
];

export const categories: Category[] = [
  { id: "mini-makers", name: "Mini Makers", tagline: "Where creativity meets logic.", icon: "gear", featured: true },
  { id: "junior-innovators", name: "Junior Innovators", tagline: "Engineering strategy fundamentals.", icon: "bulb" },
  { id: "young-engineers", name: "Young Engineers", tagline: "Advanced wireless & autonomous control.", icon: "shield" },
  { id: "robo-minds", name: "Robo Minds", tagline: "Elite professional-grade robotics.", icon: "brain" },
];

export const disciplines: Discipline[] = [
  {
    id: "robo-race",
    name: "Robo Race",
    image: roboRace,
  },
  {
    id: "line-follower",
    name: "Line Follower",
    image: lineFollower,
  },
  {
    id: "rc-racing",
    name: "RC Racing",
    image: rcRacing,
  },
  {
    id: "fpv-drone",
    name: "FPV Drone Racing & Aeromodelling",
    image: fpvDrone,
  },
  {
    id: "robo-hockey",
    name: "Robo Hockey",
    image: roboHockey,
  },
  {
    id: "robo-war",
    name: "Robo War",
    image: roboWar,
  },
];

export const advantages: Advantage[] = [
  { title: "National Recognition", description: "", icon: "medal" },
  { title: "Fair Judging", description: "", icon: "gavel" },
  { title: "Career Ops", description: "Bridging the gap between arena victories and top-tier tech placements.", icon: "briefcase" },
  { title: "High-Energy Ecosystem", description: "Join a nationwide community of elite innovators and robotics athletes.", icon: "bolt" },
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Team Ironclad", points: 22140 },
  { rank: 2, name: "Voltbenders", points: 20835 },
  { rank: 3, name: "Kinetic Foxes", points: 19410 },
  { rank: 4, name: "Circuit Breakers", points: 18220 },
  { rank: 5, name: "Ferrofluid", points: 17045 },
];

export const sponsors: Sponsor[] = [
{
    name: "NIT DELHI",
    logo: nitDelhi,
  },
  {
    name: "INDIAN BIT",
    logo: bit,
  },
  {
    name: "NIT SILCHAR",
    logo: nitSilchar,
  },
  {
    name: "ROBOWERX",
    logo: roboWerx,
  },
  {
    name: "IIT BOMBAY",
    logo: iitBombay,
  },
  {
    name: "GENERAL ROBOTICS CO.",
    logo: generalRobotics,
  },
];
