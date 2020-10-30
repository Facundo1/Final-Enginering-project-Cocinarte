let quotes = [
  'Cuando empieza a doler, es cuando empieza el entrenamiento',
  '¡COMA EN GRANDE SALUDABLE, LEVANTE EN GRANDE, CUMPLA SUS OBJETIVOS EN GRANDE!',
  'Un gran cuerpo saludable conlleva una gran responsabilidad',
  'El fracaso es solo un cambio temporal de dirección para encaminarlo hacia su próximo éxito',
  'Para lograr algo que nunca antes había tenido, debe hacer algo que nunca haya hecho antes',
  'Fuerza interior, objetivos asegurados',
  'Los ganadores entrenan, los perdedores se quejan',
  'Construye tu cuerpo, construye tu carácter',
  'Cae siete veces, levantate ocho',
  'No hagas lo mismo siempre, si lo que buscas son resultados diferentes',
  'La mejor forma de predecir el futuro , es creándolo',
  'Muchas personas afuera dirán que no puedes. Tu objetivo no depende de ti,no de ellos.',
  'Esfuerzate , las cosas grandes solo existen para personas grandes.',
  'Debes hacer lo que otros no hacen, para lograr lo que otros no pueden',
  'Eres lo que comes, obtienes lo que te esfuerzas',
  'El fitness no se trata de ser mejor que alguien. El fitness se trata de ser mejor que la persona que eras ayer',
  'El mejor dia para empezar a entrenar, es hoy',
  'Es mucho mejor estar exhausto por el éxito que descansar del fracaso'
]

export default function() {
  let index = Math.round(Math.random() * quotes.length)
  return quotes[index]
}
