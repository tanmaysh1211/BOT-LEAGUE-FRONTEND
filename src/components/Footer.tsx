import { InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon} from "./icons";

const SOCIALS = [
  { icon: YoutubeIcon, label: "YouTube" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: TwitterIcon, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-12">
        <div className="relative -top-8">
          <p className="font-tech text-[14px] font-bold uppercase tracking-[0.25em] text-steel">
            QUICK LINKS
          </p>
        </div>

        <div className="flex flex-col items-start">
          <p className="font-tech text-[11px] font-bold uppercase tracking-[0.25em] text-steel">
            SOCIAL MEDIA
          </p>

          <div className="mt-4 flex gap-4">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-steel transition-colors duration-300 hover:text-white"
              >
                <Icon width={17} height={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
