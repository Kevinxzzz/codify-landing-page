import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Silva",
    role: "Proprietária - Boutique Encanto",
    content: "A loja virtual que o DevGroup criou superou todas as minhas expectativas. Em 2 meses, minhas vendas online já representam 40% do faturamento total. O suporte deles é excepcional!",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Ricardo Mendes",
    role: "Dono - Pizzaria Fornalha",
    content: "Antes eu tinha um site ultrapassado. Agora tenho uma presença digital profissional e os pedidos online triplicaram. Valeu cada centavo do investimento!",
    rating: 5,
    avatar: "👨‍🍳"
  },
  {
    name: "Juliana Costa",
    role: "Diretora - Clínica VidaSaúde",
    content: "O sistema de gestão que desenvolveram mudou nossa rotina completamente. Economizamos horas de trabalho todo dia e temos muito mais controle sobre tudo. Recomendo demais!",
    rating: 5,
    avatar: "👩‍⚕️"
  }
];

const FeedbackSection = () => {
  return (
    <section className="py-20 sm:py-1 mb-15 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Depoimentos reais de quem já transformou seu negócio com a gente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative hover:shadow-elegant-xl transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;