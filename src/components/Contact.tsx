import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "./ui/icon";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground/[0.02]">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-sentient mb-6">
              Начните <i className="font-light">создавать</i> сегодня
            </h2>
            <p className="font-mono text-sm text-foreground/60 mb-8 leading-relaxed">
              Расскажите о своём проекте, и мы предложим оптимальное решение.
              Консультация бесплатна.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-sentient text-lg mb-1">Email</div>
                  <a
                    href="mailto:hello@example.com"
                    className="font-mono text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-sentient text-lg mb-1">Телефон</div>
                  <a
                    href="tel:+79991234567"
                    className="font-mono text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-sentient text-lg mb-1">Офис</div>
                  <p className="font-mono text-sm text-foreground/60">
                    Москва, Россия
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background/50 backdrop-blur border border-foreground/10 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-mono text-sm text-foreground/80 mb-2 block">
                  Ваше имя *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="font-mono text-sm text-foreground/80 mb-2 block">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ivan@example.com"
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="font-mono text-sm text-foreground/80 mb-2 block">
                  Телефон
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 123-45-67"
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="font-mono text-sm text-foreground/80 mb-2 block">
                  Расскажите о проекте *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Опишите вашу идею, цели и пожелания..."
                  required
                  rows={4}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
