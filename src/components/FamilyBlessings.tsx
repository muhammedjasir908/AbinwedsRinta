import { Reveal } from "@/components/Reveal";

type FamilyGroup = {
  label: string;
  people: string[];
};

type FamilyCardData = {
  name: string;
  role: string;
  place: string;
  photo: string;
  groups: FamilyGroup[];
};

function GoldRule() {
  return (
    <div className="my-1 flex items-center gap-2.5 opacity-50">
      <span className="h-px flex-1 bg-primary" />
      <span className="text-xs text-primary">✦</span>
      <span className="h-px flex-1 bg-primary" />
    </div>
  );
}

function FamilyCard({ family }: { family: FamilyCardData }) {
  return (
    <article className="card-paper h-full overflow-hidden p-6 text-left sm:p-8">
      <div className="mb-5 flex items-center gap-4 border-b border-dashed border-foreground/20 pb-5">
        <div className="rounded-full bg-gradient-to-br from-[#d4b46a] via-primary to-[#8a6a28] p-[3px] shadow-md">
          <img
            src={family.photo}
            alt={family.name}
            className="h-[72px] w-[72px] rounded-full object-cover ring-[3px] ring-[#fff8f2] sm:h-20 sm:w-20"
          />
        </div>
        <div>
          <h3 className="font-script text-[2.75rem] leading-[0.9] text-foreground">{family.name}</h3>
          <p className="font-caps mt-2 text-[0.72rem] font-semibold tracking-[0.2em] text-primary uppercase">
            {family.role}
          </p>
          <p className="font-caps mt-1 text-[0.68rem] tracking-[0.18em] text-primary/85 uppercase">
            {family.place}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {family.groups.map((group, i) => (
          <div key={group.label}>
            {i === family.groups.length - 1 && i > 0 ? <GoldRule /> : null}
            <span className="font-caps mb-1.5 block text-[0.68rem] font-semibold tracking-[0.2em] text-primary uppercase">
              {group.label}
            </span>
            <div className="space-y-1">
              {group.people.map((person) => (
                <p key={person} className="font-body text-lg leading-snug text-foreground italic sm:text-xl">
                  {person}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function FamilyBlessings({ families }: { families: FamilyCardData[] }) {
  return (
    <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
      {families.map((family, i) => (
        <Reveal key={family.name} delay={i * 150}>
          <FamilyCard family={family} />
        </Reveal>
      ))}
    </div>
  );
}
