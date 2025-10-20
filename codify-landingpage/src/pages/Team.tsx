import { Users } from "lucide-react";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { teamMembers } from "@/data/mockData";

const Team = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Users className="h-16 w-16 mx-auto text-primary mb-6" />
          <h1 className="text-5xl font-bold mb-4">Nossa Equipe</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça os profissionais talentosos que fazem a mágica acontecer
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="mt-20 text-center space-y-8">
          <h2 className="text-3xl font-bold">Como Trabalhamos</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-primary">
                Metodologia Ágil
              </h3>
              <p className="text-muted-foreground">
                Trabalhamos com Scrum, priorizando entregas incrementais e
                feedback constante.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-primary">
                Code Review
              </h3>
              <p className="text-muted-foreground">
                Todo código passa por revisão de pares, garantindo qualidade e
                compartilhamento de conhecimento.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-primary">
                Aprendizado Contínuo
              </h3>
              <p className="text-muted-foreground">
                Incentivamos estudos, certificações e participação em
                comunidades tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
