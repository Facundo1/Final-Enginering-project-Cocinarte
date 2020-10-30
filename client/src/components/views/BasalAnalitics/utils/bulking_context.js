import React from 'react'

export function bulking_context(calories) {
  return (
    <div style={{ textAlign: 'justify' }}>
      <p>
        Para ganar músculo, necesita consumir más calorías de las que usa. Y
        esto resultará en un aumento de grasa. Ahora bien, la cantidad de grasa
        que se gana depende de varios factores:
      </p>
      <p>
        si come a ciegas, sin saber un poco lo que está comiendo, entonces no
        consumirá suficiente comida o consumirá demasiado. Lo primero que debe
        hacer al planificar su dieta de volumen es encontrar su gasto calórico
        diario.
      </p>
      <br />
      <p>
        Tu <b>cantidad de calorias</b> es <b>{calories}</b> y son las calorías
        que se debe proponer ingerir cada día en términos de ingesta calórica
        total.
      </p>
      <p>
        {' '}
        Tenemos nuestra ingesta total de calorías, de las cuales -{' '}
        <b>{Math.ceil(0.17 * calories)}</b> - se utilizan para funciones
        normales y vitales, mientras que el resto -{' '}
        <b>{Math.floor(0.83 * calories)}</b> - de las calorías se excretan o
        almacenan como grasa.
      </p>
      <br />
      <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
        CALORIAS POR COMIDA
      </div>
      <p>
        Uno de los diez mandamientos de un cuerpo sano es{' '}
        <em>" Comerás más de 3 comidas al día."</em>
        Así que supongamos que hacemos 7 comidas al día, recuerde que esto
        incluye batidos post entrenamiento.
        <b>
          {' '}
          {calories}
          (calorías totales) / 7 (comidas al día) = {Math.round(calories / 7)}
        </b>{' '}
        - Calorías por comida (aprox.).
      </p>
    </div>
  )
}
