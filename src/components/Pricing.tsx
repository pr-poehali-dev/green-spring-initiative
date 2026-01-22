import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Icon from "./ui/icon";

const plans = [
  {
    name: "Старт",
    price: "от 150 000 ₽",
    description: "Для небольших проектов и MVP",
    features: [
      "2D анимация до 60 сек",
      "Простая игровая механика",
      "2 итерации правок",
      "Исходники проекта",
      "Техподдержка 1 месяц",
    ],
    popular: false,
  },
  {
    name: "Профи",
    price: "от 500 000 ₽",
    description: "Для полноценных игр и роликов",
    features: [
      "3D анимация любой длины",
      "Сложная игровая логика",
      "Безлимитные правки",
      "Полная документация",
      "Техподдержка 6 месяцев",
      "Приоритетная очередь",
    ],
    popular: true,
  },
  {
    name: "Энтерпрайз",
    price: "Индивидуально",
    description: "Для крупных студий и издателей",
    features: [
      "Полный цикл разработки",
      "Выделенная команда",
      "NDA и эксклюзивность",
      "Интеграция с вашими системами",
      "Постоянная поддержка",
      "Консультации экспертов",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">
          Тарифы <i className="font-light">под ваш</i> проект
        </h2>
        <p className="font-mono text-sm text-foreground/60 max-w-2xl mx-auto">
          Прозрачное ценообразование без скрытых платежей
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative p-8 bg-background/50 backdrop-blur border-foreground/10 hover:border-foreground/20 transition-all duration-300 ${
              plan.popular
                ? "md:scale-105 border-primary/50 shadow-xl"
                : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground font-mono text-xs uppercase rounded-full">
                Популярный
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-2xl font-sentient mb-2">{plan.name}</h3>
              <p className="font-mono text-sm text-foreground/60 mb-4">
                {plan.description}
              </p>
              <div className="text-3xl font-sentient text-primary">
                {plan.price}
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  <span className="font-mono text-sm text-foreground/80">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              variant={plan.popular ? "default" : "outline"}
            >
              {plan.name === "Энтерпрайз" ? "Обсудить проект" : "Выбрать тариф"}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
