import React, { useState, useEffect } from 'react';
import './ChatStyle.css';
import botAvatar from '../imagenes/Bot.png';
import userAvatar from '../imagenes/user.jpg';

const EjercicioMindfulness = () => (
  <>
    <p>Ejercicio de Respiración Consciente</p>
    <br />
    <p>Objetivo:</p>
    <p>Este ejercicio te ayudará a calmar tu mente, reducir la tristeza y traer tu atención al momento presente.</p>
    <br />
    <p>Duración:</p>
    <p>5-10 minutos</p>
    <br />
    <p>Instrucciones:</p>
    <ol>
      <li>Encuentra un Lugar Tranquilo: Busca un lugar donde puedas sentarte cómodamente sin distracciones.</li>
      <li>Adopta una Postura Cómoda: Siéntate en una silla con los pies firmemente apoyados en el suelo y las manos descansando en tu regazo. Puedes cerrar los ojos o dejarlos suavemente abiertos mirando hacia abajo.</li>
      <li>Concentra tu Atención en tu Respiración: Lleva tu atención a tu respiración. Observa cómo el aire entra y sale de tu cuerpo. No intentes cambiar la forma en que respiras, solo obsérvala.</li>
      <li>Siente tu Respiración: Nota la sensación del aire al entrar por tus fosas nasales, llenar tus pulmones y salir lentamente por tu boca o nariz. Siente cómo tu abdomen se eleva y desciende con cada inhalación y exhalación.</li>
      <li>Cuenta tus Respiraciones: Si te resulta difícil concentrarte, intenta contar tus respiraciones. Inhala y cuenta uno, exhala y cuenta dos. Continúa hasta llegar a diez, luego comienza de nuevo desde uno.</li>
      <li>Reconoce tus Pensamientos y Emociones: Es normal que tu mente divague o que surjan pensamientos y emociones, como la tristeza. No luches contra ellos. Reconócelos y luego suavemente trae tu atención de vuelta a tu respiración.</li>
      <li>Regresa al Momento Presente: Cada vez que te des cuenta de que tu mente ha divagado, simplemente vuelve tu atención a la sensación de tu respiración. No te juzgues ni te frustres; la práctica de mindfulness implica volver al presente una y otra vez.</li>
      <li>Finaliza con Agradecimiento: Después de unos minutos, comienza a expandir tu atención hacia el resto de tu cuerpo y el espacio a tu alrededor. Agradece este tiempo que te has dado para cuidar de ti mismo. Abre lentamente los ojos si los tenías cerrados.</li>
    </ol>
    <br />
    <p>Conclusión</p>
    <p>Este ejercicio de respiración consciente puede ayudarte a sentirte más centrado y en calma. Practicarlo regularmente puede ser muy beneficioso para manejar la tristeza y otras emociones difíciles. Si encuentras que la tristeza persiste, considera hablar con un profesional de la salud mental.</p>
  </>
);

const EjercicioMindfulnessDepresivo = () => (
    <>
      <p>Ejercicio de Observación de Pensamientos</p>
      <br />
      <p>Objetivo:</p>
      <p>Este ejercicio te ayudará a observar tus pensamientos desde una perspectiva más distante, sin identificarte con ellos.</p>
      <br />
      <p>Duración:</p>
      <p>5-10 minutos</p>
      <br />
      <p>Instrucciones:</p>
      <ol>
        <li>Encuentra un Lugar Tranquilo: Siéntate en un lugar cómodo donde puedas estar tranquilo y sin interrupciones.</li>
        <li>Postura Cómoda: Adopta una postura relajada pero alerta, con la espalda recta y los pies apoyados en el suelo.</li>
        <li>Observa tus Pensamientos: Cierra suavemente los ojos y comienza a observar tus pensamientos como si fueran nubes pasando en el cielo. No te apegues a ninguno de ellos.</li>
        <li>Distancia Emocional: Conscientemente, permítete estar separado de tus pensamientos y emociones. Observa cómo aparecen y desaparecen.</li>
        <li>Regreso al Momento Presente: Si te encuentras atrapado en algún pensamiento o emoción, regresa suavemente tu atención al momento presente, sintiendo tu respiración.</li>
        <li>Finaliza con Agradecimiento: Después de unos minutos, abre lentamente los ojos y toma conciencia del espacio a tu alrededor. Agradece este tiempo que te has dado para observar tus pensamientos.</li>
      </ol>
      <br />
      <p>Conclusión</p>
      <p>Practicar este ejercicio puede ayudarte a desarrollar una mayor conciencia de tus pensamientos y emociones, lo cual puede ser útil para manejar la depresión. Si necesitas apoyo adicional, considera hablar con un profesional de la salud mental.</p>
    </>
  );

  const EjercicioAntiansiedad = () => (
    <>
      <p>Ejercicio de Respiración Abdominal</p>
      <br />
      <p>Objetivo:</p>
      <p>Este ejercicio te ayudará a calmar la ansiedad al enfocarte en una técnica de respiración profunda y controlada.</p>
      <br />
      <p>Duración:</p>
      <p>5-10 minutos</p>
      <br />
      <p>Instrucciones:</p>
      <ol>
        <li>Encuentra un Lugar Tranquilo: Siéntate o recuéstate en un lugar cómodo donde puedas relajarte sin distracciones.</li>
        <li>Postura Relajada: Coloca una mano sobre tu pecho y otra sobre tu abdomen, justo por debajo de tu caja torácica.</li>
        <li>Respiración Profunda: Inhalando por la nariz, siente cómo tu abdomen se expande mientras inhalas profundamente. Intenta que tu mano sobre tu abdomen se eleve mientras tu pecho se eleva muy poco.</li>
        <li>Exhalación Controlada: Exhala lentamente por la boca, permitiendo que tu abdomen se contraiga mientras exhalas completamente el aire.</li>
        <li>Repetición: Repite este ciclo de respiración abdominal profunda durante varios minutos, enfocándote en el movimiento de tu abdomen y en mantener un ritmo constante de respiración.</li>
        <li>Relajación Progresiva: Con cada exhalación, permite que cualquier tensión en tu cuerpo se disipe. Si sientes algún músculo tenso, concéntrate en relajar esa área mientras exhalas.</li>
        <li>Finaliza con Calma: Después de varios ciclos de respiración abdominal, toma unos momentos para notar cómo te sientes. Deja que tu respiración se estabilice naturalmente antes de volver a tus actividades diarias.</li>
      </ol>
      <br />
      <p>Conclusión</p>
      <p>Practicar regularmente este ejercicio de respiración abdominal puede ayudarte a reducir la ansiedad al promover la relajación física y mental. Si sientes que necesitas más apoyo, considera hablar con un profesional de la salud mental.</p>
    </>
  );

  const EjercicioAntiestrés = () => (
    <>
      <p>Ejercicio de Relajación Muscular Progresiva</p>
      <br />
      <p>Objetivo:</p>
      <p>Este ejercicio te ayudará a reducir el estrés al aprender a relajar conscientemente diferentes grupos musculares de tu cuerpo.</p>
      <br />
      <p>Duración:</p>
      <p>10-15 minutos</p>
      <br />
      <p>Instrucciones:</p>
      <ol>
        <li>Encuentra un Lugar Tranquilo: Siéntate o recuéstate en un lugar cómodo donde puedas relajarte sin distracciones.</li>
        <li>Postura Relajada: Cierra suavemente los ojos y lleva tu atención a tu respiración.</li>
        <li>Tensión y Relajación: Comienza por los pies y trabaja hacia arriba o viceversa. Tensa cada grupo muscular durante 5-10 segundos, luego relájalo completamente.</li>
        <li>Ejemplo de Secuencia:
          <ul>
            <li>Empieza con los dedos de los pies, tensando los músculos de los pies y los tobillos.</li>
            <li>Luego, pasa a los músculos de las pantorrillas y los muslos.</li>
            <li>Continúa con los músculos del abdomen, los brazos y los hombros.</li>
            <li>Finaliza con los músculos del cuello y la cara.</li>
          </ul>
        </li>
        <li>Respiración Consciente: Mientras te concentras en tensar y relajar cada grupo muscular, mantén una respiración lenta y profunda. Inhalando para prepararte para tensar, y exhalando para relajar completamente.</li>
        <li>Observación de Sensaciones: Después de relajar cada grupo muscular, toma unos momentos para notar cómo se siente esa área de tu cuerpo. Observa cualquier diferencia en la sensación de tensión y relajación.</li>
        <li>Finaliza con Calma: Después de completar la secuencia de relajación muscular, lleva tu atención de vuelta a tu respiración y toma unos momentos para disfrutar de la sensación de relajación profunda en todo tu cuerpo.</li>
      </ol>
      <br />
      <p>Conclusión</p>
      <p>Practicar regularmente la relajación muscular progresiva puede ayudarte a reducir el estrés al promover la relajación física y mental. Si sientes que necesitas más apoyo, considera hablar con un profesional de la salud mental.</p>
    </>
  );

  const EjercicioParaAngustia = () => (
    <>
      <p>Ejercicio de Escritura Emocional</p>
      <br />
      <p>Objetivo:</p>
      <p>Este ejercicio te ayudará a expresar y procesar tus emociones de angustia de manera constructiva a través de la escritura.</p>
      <br />
      <p>Duración:</p>
      <p>10-15 minutos</p>
      <br />
      <p>Instrucciones:</p>
      <ol>
        <li>Encuentra un Lugar Tranquilo: Busca un espacio cómodo y tranquilo donde puedas concentrarte sin distracciones.</li>
        <li>Preparación Mental: Toma unos momentos para centrarte en tu respiración y conectar con tus sentimientos de angustia.</li>
        <li>Escritura Libre: Toma papel y lápiz, y comienza a escribir libremente sobre lo que sientes. No te preocupes por la estructura gramatical o la coherencia, simplemente deja que tus pensamientos y emociones fluyan en el papel.</li>
        <li>Explora Emociones: Explora a fondo qué es lo que te causa angustia y cómo te hace sentir. Puedes preguntarte a ti mismo por qué te sientes de esa manera y qué podría ayudarte a sentirte mejor.</li>
        <li>Reflexión: Después de escribir durante unos minutos, toma un momento para reflexionar sobre lo que has escrito. Observa si hay algún patrón en tus pensamientos o emociones, y considera qué pasos podrías tomar para aliviar tu angustia.</li>
        <li>Conclusión Positiva: Concluye tu sesión de escritura enfocándote en aspectos positivos o soluciones que podrías implementar para mejorar tu estado emocional. Esto podría incluir acciones prácticas o formas de cuidarte mejor.</li>
      </ol>
      <br />
      <p>Conclusión</p>
      <p>La escritura emocional puede ser una herramienta poderosa para procesar y aliviar la angustia emocional. Si sientes que necesitas más apoyo, considera hablar con un profesional de la salud mental.</p>
    </>
  );

  const EjercicioParaExhaustoNuevo = () => (
    <>
      <p>Ejercicio de Conexión con la Naturaleza</p>
      <br />
      <p>Objetivo:</p>
      <p>Este ejercicio te ayudará a renovar tu energía conectándote con la naturaleza y tus sentidos.</p>
      <br />
      <p>Duración:</p>
      <p>15-20 minutos</p>
      <br />
      <p>Instrucciones:</p>
      <ol>
        <li>Encuentra un Lugar Natural: Sal al aire libre y busca un entorno natural que te resulte reconfortante, como un parque, jardín o sendero.</li>
        <li>Postura Relajada: Busca un lugar cómodo para sentarte o recostarte donde puedas disfrutar de la naturaleza sin distracciones.</li>
        <li>Respiración Consciente: Cierra los ojos y comienza a respirar profundamente, inhalando el aire fresco y purificante de la naturaleza.</li>
        <li>Observa tu Entorno: Usa tus sentidos para explorar tu entorno. Observa los colores, los sonidos de los pájaros o el viento, y siente la textura del suelo o las hojas bajo tus manos.</li>
        <li>Meditación Visual: Imagina que absorbes la energía y la tranquilidad del entorno natural a través de cada respiración. Visualiza cómo te sientes renovado y lleno de vitalidad.</li>
        <li>Práctica de Gratitud: Toma un momento para reflexionar sobre las cosas por las que te sientes agradecido en este entorno natural. Aprecia la belleza y la serenidad que te rodea.</li>
        <li>Regreso Gradual: Después de unos minutos de conexión con la naturaleza, regresa gradualmente a tu respiración normal. Abre lentamente los ojos y lleva contigo la sensación de renovación y paz.</li>
      </ol>
      <br />
      <p>Conclusión</p>
      <p>Conectar con la naturaleza puede ser una poderosa forma de revitalizar tu energía y aliviar el agotamiento. Si sientes que necesitas más apoyo, considera hablar con un profesional de la salud mental.</p>
    </>
  );

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const predefinedResponses = {
    'me siento triste': (
      <>
        Lo siento mucho, ¿quieres que te recomiende algunos ejercicios de Mindfulness para mejorar tu ánimo? Aquí tienes uno: <EjercicioMindfulness />
      </>
    ),
    'me siento ansioso': (
        <>
          La ansiedad puede ser difícil. Te recomendaré algunos ejercicios de respiración y relajación para calmarte. Aquí tienes uno: <EjercicioAntiansiedad />
        </>
      ),
    'me siento depresivo': (
        <>
          La depresión implica un estado de ánimo deprimido o la pérdida del placer o el interés por actividades durante largos períodos de tiempo. La depresión es distinta de los cambios habituales del estado de ánimo y los sentimientos sobre el día a día. Aquí tienes un ejercicio que puede ayudarte a reducir o alejar estos sentimientos: <EjercicioMindfulnessDepresivo />
        </>
      ),
    'me siento estresado': (
        <>
          El estrés es el estado de preocupación o tensión mental generado por una situación difícil. Todas las personas tenemos un cierto grado de estrés, ya que se trata de una respuesta natural a las amenazas y a otros estímulos. Te recomendaré algunos ejercicios que pueden ayudar a calmarte. Aquí tienes uno: <EjercicioAntiestrés />
        </>
      ),
    'me siento exhausto': (
        <>
        Estar exhausto es estar enteramente agotado o falto de lo que necesita tener para hallarse en buen estado. Aquí tienes un ejercicio que puede ayudar a recuperarte: <EjercicioParaExhaustoNuevo />
        </>
    ),
    'me siento angustiado': (
        <>
          La angustia es una emoción, sentimiento, pensamiento, condición o comportamiento desagradables y puede afectar la forma en la que razonas, sientes o actúas. Te recomendaré algunos ejercicios que pueden ayudar calmarla. Aquí tienes uno: <EjercicioParaAngustia />
        </>
      ),
    'muchas gracias':(
        <>
       ✨ ¡De nada! Espero poder haberte ayudado ✨
        </>
    )
  };

  useEffect(() => {
    const sendInitialMessage = () => {
      const botMessage = { sender: 'bot', text: '✨ ¡Hola! Soy Bubu ¿Cómo puedo ayudarte hoy? ✨'};
      setMessages([botMessage]);
    };

    sendInitialMessage();
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input.trim() };
      setMessages([...messages, userMessage]);

      const responseKey = input.trim().toLowerCase();
      const botResponse = predefinedResponses[responseKey] || 'Lo siento, no tengo una respuesta para eso.';

      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'bot', text: botResponse }
      ]);

      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.sender === 'bot' && (
              <div className="message-container">
                <img src={botAvatar} alt="Bot Avatar" className="avatar" />
                <div className="message">{msg.text}</div>
              </div>
            )}
            {msg.sender === 'user' && (
              <div className="message-container user-message">
                <div className="message">{msg.text}</div>
                <img src={userAvatar} alt="User Avatar" className="avatar" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Para obtener ejercicios Mindfulness escribe cómo te sientes. Por ejemplo: 'Me siento...'"
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
      <img className="logo2" src={require('../imagenes/logo.png')} alt="logo" />
    </div>
  );
};

export default Chat;
