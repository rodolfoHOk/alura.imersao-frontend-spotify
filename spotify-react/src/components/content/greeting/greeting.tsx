import { useEffect } from 'react';
import './greeting.css';

export const Greeting = () => {
  useEffect(() => {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();
    const greetingMessage = currentHour >= 5 && currentHour < 12
        ? "Bom dia"
        : currentHour >= 12 && currentHour < 18
        ? "Boa tarde"
        : "Boa noite";
    if (greetingElement) greetingElement.textContent = greetingMessage;
  }, []);

  return (
    <div className="playlist">
      <h1 id="greeting"></h1>
      <h2 className="session">Navegar por todas as seções</h2>
    </div>
  );
}
