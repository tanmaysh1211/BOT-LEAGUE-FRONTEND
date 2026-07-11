import SignupForm from "./SignupForm";

export default function JoinEcosystem() {
  return (
    <section id="join" className="border-t border-line bg-panel py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="font-display text-3xl tracking-widest text-white sm:text-4xl">JOIN THE ECOSYSTEM</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <SignupForm title="Become a Judge" role="judge" />
          <SignupForm title="Volunteer" role="volunteer" />
          <SignupForm title="Community Member" role="member" />
        </div>
      </div>
    </section>
  );
}
