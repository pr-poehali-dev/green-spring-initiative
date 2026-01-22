import Icon from "./ui/icon";

const features = [
  {
    icon: "Zap",
    title: "Быстрая разработка",
    description: "От идеи до прототипа за несколько недель, а не месяцев",
  },
  {
    icon: "Palette",
    title: "Уникальный стиль",
    description: "Создаём визуальную идентичность, которая выделяет ваш проект",
  },
  {
    icon: "Code2",
    title: "Современный стек",
    description: "Unity, Unreal Engine, Blender — работаем на передовых технологиях",
  },
  {
    icon: "Users",
    title: "Опытная команда",
    description: "Профессионалы с портфолио в геймдеве и анимации",
  },
  {
    icon: "Sparkles",
    title: "Детализация",
    description: "Проработка каждого элемента до пиксельного совершенства",
  },
  {
    icon: "TrendingUp",
    title: "Масштабируемость",
    description: "Архитектура проектов готова к росту и обновлениям",
  },
];

export function Features() {
  return (
    <section id="insights" className="py-24 md:py-32 bg-foreground/[0.02]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient mb-4">
            Почему <i className="font-light">выбирают</i> нас
          </h2>
          <p className="font-mono text-sm text-foreground/60 max-w-2xl mx-auto">
            Профессиональный подход к созданию анимаций и игр любой сложности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border border-foreground/10 hover:border-foreground/20 bg-background/50 backdrop-blur transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Icon name={feature.icon} size={24} />
              </div>
              <h3 className="text-xl font-sentient mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
