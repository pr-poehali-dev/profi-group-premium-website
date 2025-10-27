import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const courses = [
    {
      title: 'Стоматология',
      description: 'Современные методы диагностики и лечения',
      icon: 'Smile',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Педиатрия',
      description: 'Детское здоровье и развитие',
      icon: 'Baby',
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      title: 'Терапия',
      description: 'Общая и клиническая терапия',
      icon: 'Stethoscope',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Озонотерапия',
      description: 'Инновационные методы лечения озоном',
      icon: 'Droplets',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Хирургия',
      description: 'Оперативные вмешательства и техники',
      icon: 'Cross',
      gradient: 'from-cyan-500 to-purple-500'
    }
  ];

  const advantages = [
    { icon: 'Award', title: 'Сертификаты', text: 'Официальные документы после обучения' },
    { icon: 'Users', title: 'Опытные преподаватели', text: 'Эксперты-практики с опытом' },
    { icon: 'Clock', title: 'Гибкий график', text: 'Учитесь в удобное время' },
    { icon: 'Rocket', title: 'Карьерная поддержка', text: 'Помощь в трудоустройстве' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Профи групп премиум
            </h1>
            <div className="hidden md:flex gap-6">
              {['home', 'courses', 'about', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-semibold transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'courses' && 'Курсы'}
                  {section === 'about' && 'О нас'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Обучение <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">нового поколения</span>
              </h2>
              <p className="text-xl text-gray-600">
                Профессиональное медицинское образование для врачей
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('courses')}
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8"
                >
                  Выбрать курс
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contacts')}
                  size="lg" 
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8"
                >
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-30 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>
              <img 
                src="https://cdn.poehali.dev/projects/61213102-b1ac-45e6-9ea7-667e53898bd4/files/c136f4f5-99db-4ed8-a525-f21668015522.jpg"
                alt="Обучение"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Популярные направления</h2>
            <p className="text-xl text-gray-600">Выберите курс, который откроет новые возможности</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={course.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Button 
                    variant="ghost" 
                    className="text-purple-600 hover:text-purple-700 font-semibold p-0 h-auto group-hover:translate-x-2 transition-transform"
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">О нас</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              <strong className="text-purple-600">Профи групп премиум</strong> — это современный центр медицинского образования, 
              который помогает врачам и медицинским специалистам повышать квалификацию. 
              Мы объединяем передовые методики обучения с практическим опытом ведущих специалистов.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Icon name={advantage.icon} size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-xl mb-8 opacity-90">
            Готовы начать обучение? Мы ответим на все ваши вопросы
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a 
              href="tel:+79534550022"
              className="flex items-center gap-3 text-2xl font-bold hover:scale-105 transition-transform"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon name="Phone" size={28} />
              </div>
              +7 (953) 455-00-22
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Написать письмо
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Онлайн-консультация
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Профи групп премиум. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;