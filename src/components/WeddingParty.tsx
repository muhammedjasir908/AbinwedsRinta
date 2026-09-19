import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export interface PartyMemberData {
  name: string;
  role?: string;
  isLead?: boolean;
  photo?: string | null;
  gradient: string;
  wide?: boolean;
}

interface WeddingPartyProps {
  groomsmen: PartyMemberData[];
  bridesmaids: PartyMemberData[];
}

function PartyCard({ member, className }: { member: PartyMemberData; className?: string }) {
  const [imgError, setImgError] = useState(false);
  const hasPhoto = Boolean(member.photo && !imgError);
  const wide = Boolean(member.wide);

  return (
    <div
      key={member.name}
      className={cn(
        "group relative flex flex-shrink-0 flex-col items-center rounded-[16px] border border-primary/25 bg-[#fff5f7] px-3.5 pt-5 pb-4 text-center shadow-[0_1px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-foreground/35 hover:shadow-md dark:border-primary/20 dark:bg-card/75",
        wide ? "w-[188px]" : "w-[152px]",
        className,
      )}
    >
      <div
        className={`relative mx-auto mb-3.5 flex-shrink-0 overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.22)] ring-2 ring-background ${
          wide ? "h-[118px] w-[118px] rounded-[22px]" : "h-[68px] w-[68px] rounded-full"
        }`}
      >
        {hasPhoto ? (
          <img
            src={member.photo!}
            alt={member.name || "Bridesmaid"}
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

      {member.name ? (
        <h4 className="font-display text-[1.05rem] leading-snug text-foreground transition-colors group-hover:text-primary">
          {member.name}
        </h4>
      ) : null}

      {member.role ? (
        <p
          className={`mt-1.5 text-[0.92rem] ${
            member.isLead ? "font-semibold text-foreground" : "text-muted-foreground"
          }`}
        >
          {member.role}
        </p>
      ) : null}
    </div>
  );
}

function AddPartyCard({ label }: { label: string }) {
  return (
    <div className="flex w-[152px] flex-shrink-0 flex-col items-center rounded-[16px] border border-dashed border-primary/40 bg-[#fff5f7]/80 px-3.5 pt-5 pb-4 text-center shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:border-primary/25 dark:bg-card/50">
      <div className="relative mx-auto mb-3.5 flex h-[68px] w-[68px] flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-primary/45 bg-primary/10">
        <Plus className="h-7 w-7 text-primary" strokeWidth={1.75} />
      </div>
      <h4 className="font-display text-[1.05rem] leading-snug text-muted-foreground">{label}</h4>
    </div>
  );
}

function PartyTrack({
  title,
  icon,
  members,
  addLabel,
}: {
  title: string;
  icon: string;
  members: PartyMemberData[];
  addLabel?: string;
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
          {members.map((member, i) => (
            <PartyCard key={member.photo ?? member.name ?? i} member={member} />
          ))}
          {addLabel ? <AddPartyCard label={addLabel} /> : null}
        </div>
      </div>
    </div>
  );
}

export function KidsTeam({
  kids,
}: {
  kids: { name: string; role?: string; gradient: string; photo?: string | null; wide?: boolean }[];
}) {
  const [lead, ...rest] = kids;

  return (
    <div className="mt-12">
      <div className="font-caps mb-5 flex items-center justify-center gap-2.5 px-6 text-[0.8rem] font-medium tracking-[0.22em] text-primary uppercase">
        <span className="text-base leading-none">🌸</span>
        <span>Our Kids Team</span>
      </div>
      <div className="flex flex-col items-center gap-3.5 px-6 py-2 sm:gap-4">
        {lead ? (
          <PartyCard
            key={lead.name}
            member={{
              name: lead.name,
              role: lead.role,
              gradient: lead.gradient,
              photo: lead.photo ?? null,
              wide: lead.wide,
            }}
          />
        ) : null}
        {rest.length > 0 ? (
          <div className="flex w-full max-w-[340px] flex-nowrap justify-center gap-3.5 sm:gap-4">
            {rest.map((kid) => (
              <PartyCard
                key={kid.name}
                className="w-[calc(50%-0.44rem)] max-w-[152px] min-w-0 shrink"
                member={{
                  name: kid.name,
                  role: kid.role,
                  gradient: kid.gradient,
                  photo: kid.photo ?? null,
                  wide: kid.wide,
                }}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function WeddingParty({ groomsmen, bridesmaids }: WeddingPartyProps) {
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
          <PartyTrack title="Groomsmen" icon="🤵" members={groomsmen} addLabel="Add groomsman" />
          <PartyTrack title="Bridesmaids" icon="💐" members={bridesmaids} />

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
