import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const TeamIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
    <path d="M16.5 5.5a3 3 0 0 1 0 5.8" />
    <path d="M18.5 14.2a6.5 6.5 0 0 1 3.9 5.8" />
  </svg>
);

export const CompeteIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 4h5v6a2.5 2.5 0 0 1-5 0V4Z" />
    <path d="M15 4h5v6a2.5 2.5 0 0 1-5 0V4Z" />
    <path d="M4 4H2v2a2 2 0 0 0 2 2" />
    <path d="M20 4h2v2a2 2 0 0 1-2 2" />
    <path d="M9.5 12.5v3a2.5 2.5 0 0 0 5 0v-3" />
    <path d="M12 15.5V20" />
    <path d="M8 20h8" />
  </svg>
);

export const RankIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 20V10" />
    <path d="M10 20V4" />
    <path d="M17 20v-7" />
  </svg>
);

export const JoinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="3" />
    <path d="M1.5 20a6.5 6.5 0 0 1 13 0" />
    <circle cx="17.5" cy="8.5" r="2.4" />
    <path d="M14.7 20a5 5 0 0 1 8.3-3.7" />
  </svg>
);

export const GearIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </svg>
);

export const BulbIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1.1 2h5c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3Z" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const BrainIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 4a2.5 2.5 0 0 0-2.5 2.5v.5A2.5 2.5 0 0 0 4 9.5a2.5 2.5 0 0 0 1 4.6A2.5 2.5 0 0 0 7 18a2.5 2.5 0 0 0 2 1" />
    <path d="M15 4a2.5 2.5 0 0 1 2.5 2.5v.5A2.5 2.5 0 0 1 20 9.5a2.5 2.5 0 0 1-1 4.6A2.5 2.5 0 0 1 17 18a2.5 2.5 0 0 1-2 1" />
    <path d="M9 4v15M15 4v15" />
  </svg>
);

export const MedalIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="15" r="5.5" />
    <path d="M9 4l3 6 3-6M6 4h4M14 4h4" />
    <path d="M12 12.5l1.1 2.2 2.4.3-1.75 1.7.4 2.4-2.15-1.15L9.85 18.6l.4-2.4L8.5 14.5l2.4-.3L12 12.5Z" />
  </svg>
);

export const GavelIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M13 4l7 7" />
    <path d="M8.5 8.5l7 7" />
    <path d="M2 22l7-7" />
    <path d="M14.5 2.5l7 7-2.5 2.5-7-7 2.5-2.5Z" />
    <path d="M4.5 15.5l4 4" />
  </svg>
);

export const BriefcaseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="7" width="19" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M2.5 12.5h19" />
  </svg>
);

export const BoltIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12.5 2 4 14h6l-1 8 8.5-12h-6l1-8Z" />
  </svg>
);

export const ChevronRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const YoutubeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
    <path d="M10.5 9.5l5 2.5-5 2.5v-5Z" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8.5v3H11v7h3Z" />
  </svg>
);

export const TwitterIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M21 5.5c-.7.3-1.4.6-2.2.7a3.8 3.8 0 0 0 1.7-2.1 7.6 7.6 0 0 1-2.4.95A3.8 3.8 0 0 0 11.7 8.4 10.8 10.8 0 0 1 3.9 4.4a3.8 3.8 0 0 0 1.2 5.1 3.8 3.8 0 0 1-1.7-.5v.05a3.8 3.8 0 0 0 3.05 3.7 3.9 3.9 0 0 1-1.7.06 3.8 3.8 0 0 0 3.55 2.6A7.6 7.6 0 0 1 2.5 17a10.8 10.8 0 0 0 5.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5A7.7 7.7 0 0 0 21 5.5Z" />
  </svg>
);
