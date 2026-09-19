import { useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

export interface PartyMemberData {
  name: string;
  role: string;
  isLead?: boolean;
  photo?: string | null;
  gradient: string;
}

interface WeddingPartyProps {
  groomsmen: PartyMemberData[];
  bridesmaids: PartyMemberData[];
  kidsTeam: { name: string; role: string; gradient: string }[];
}

function PartyCard({ member }: { member: PartyMemberData }) {
  const [imgError, setImgError] = useState(false);
  const hasPhoto = Boolean(member.photo && !imgError);

  return (
    <div
      key={member.name}
      className="group relative flex w-[152px] flex-shrink-0 flex-col items-center rounded-[16px] border border-primary/25 bg-[#fff5f7] px-3.5 pt-5 pb-4 text-center shadow-[0_1px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-foreground/35 hover:shadow-md dark:border-primary/20 dark:bg-card/75"
    >
      <div className="relative mx-auto mb-3.5 h-[68px] w-[68px] flex-shrink-0 overflow-hidden rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.22)] ring-2 ring-background">
        {hasPhoto ? (
          <img
            src={member.photo!}
            alt={member.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center font-display text-[30px] font-normal text-white select-none"
            style={{ background: member.gradient }}
          >
            {member.name.charAt(0)}
          </div>
        )}
      </div>

      <h4 className="font-display text-[1.05rem] leading-snug text-foreground transition-colors group-hover:text-primary">
        {member.name}
      </h4>

      <p
        className={`mt-1.5 text-[0.92rem] ${
          member.isLead ? "font-semibold text-foreground" : "text-muted-foreground"
        }`}
      >
        {member.role}
      </p>
    </div>
  );
}

function PartyTrack({
  title,
  icon,
  members,
}: {
  title: string;
  icon: string;
  members: PartyMemberData[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="mb-11">
      <div className="font-caps mb-5 flex items-center justify-center gap-2.5 px-6 text-[0.8rem] font-medium tracking-[0.22em] text-primary uppercase">
        <span className="text-lg leading-none">{icon}</span>
        <span>{title}</span>
      </div>

      <div
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`scrollbar-none overflow-x-auto touch-pan-x select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <div className="flex w-max min-w-full justify-start gap-3.5 px-6 py-2 pb-4 sm:gap-4 md:justify-center">
          {members.map((member) => (
            <PartyCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function WeddingParty({ groomsmen, bridesmaids, kidsTeam }: WeddingPartyProps) {
  return (
    <section className="relative z-10 border-b border-primary/20 py-16 text-center sm:py-24">
      <Reveal>
        <div className="px-6">
          <p className="font-caps text-[0.8rem] font-medium tracking-[0.28em] text-primary uppercase">
            — The wedding party —
          </p>
          <h2 className="font-script mt-3 text-[3.25rem] leading-[1.08] text-foreground sm:text-6xl">
            Our Beloved Circle
          </h2>
        </div>

        <div className="mt-12">
          {/* Groomsmen track */}
          <PartyTrack title="Groomsmen" icon="🤵" members={groomsmen} />

          {/* Bridesmaids track */}
          <PartyTrack title="Bridesmaids" icon="💐" members={bridesmaids} />

          {/* Kids Team */}
          <div className="mb-8">
            <div className="font-caps mb-5 flex items-center justify-center gap-2.5 px-6 text-[0.8rem] font-medium tracking-[0.22em] text-primary uppercase">
              <span className="text-base leading-none">🌸</span>
              <span>Our Kids Team</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3.5 px-6 py-2 sm:gap-4">
              {kidsTeam.map((kid) => (
                <PartyCard
                  key={kid.name}
                  member={{
                    name: kid.name,
                    role: kid.role,
                    gradient: kid.gradient,
                    photo: null,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Elegant gold rule with centered dot divider */}
          <div className="mx-auto my-10 flex max-w-xs items-center justify-center gap-3.5 px-6">
            <span className="h-[1px] w-20 max-w-[76px] flex-1 bg-primary/25" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="h-[1px] w-20 max-w-[76px] flex-1 bg-primary/25" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
