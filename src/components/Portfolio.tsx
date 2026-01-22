import { useState } from "react";
import { Card } from "./ui/card";

const projects = [
  {
    id: 1,
    title: "Платформер «Звёздный путь»",
    category: "2D игра",
    description: "Динамичная платформенная игра с уникальной физикой и яркими персонажами",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
  {
    id: 2,
    title: "Анимация для EdTech",
    category: "Обучающий ролик",
    description: "Серия образовательных роликов с персонажами для детской платформы",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&q=80",
  },
  {
    id: 3,
    title: "Мобильная RPG",
    category: "3D игра",
    description: "Захватывающая ролевая игра с открытым миром и кастомизацией героев",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
  },
  {
    id: 4,
    title: "Рекламный ролик",
    category: "Коммерческая анимация",
    description: "Стильная 3D анимация для запуска продукта на международный рынок",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
  },
];

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">
          Проекты <i className="font-light">наших клиентов</i>
        </h2>
        <p className="font-mono text-sm text-foreground/60 max-w-2xl mx-auto">
          От игровых механик до анимационных роликов — мы воплощаем идеи в живые миры
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group overflow-hidden bg-background/50 backdrop-blur border-foreground/10 hover:border-foreground/20 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredId === project.id ? "scale-110" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
            </div>
            <div className="p-6">
              <p className="font-mono text-xs uppercase text-primary mb-2">
                {project.category}
              </p>
              <h3 className="text-2xl font-sentient mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-sm text-foreground/60">
                {project.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
