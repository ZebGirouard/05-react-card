import { useState } from "react";

const profile = {
  name: "Your Name",
  role: "Frontend learner",
  bio: "Ship small projects, study how data moves, and keep the feedback loop tight.",
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "Portfolio", href: "https://example.com/" }
  ]
};

function ProfileCard({ person }) {
  return (
    <article className="card">
      <p className="eyebrow">{person.role}</p>
      <h1>{person.name}</h1>
      <p>{person.bio}</p>
      <div className="links">
        {person.links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default function App() {
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <main className="page">
      <ProfileCard person={profile} />
      <button className="status">
        {/* Toggle this label and state when the button is clicked. */}
        {isAvailable ? "Available for projects" : "Heads down learning"}
      </button>
    </main>
  );
}
