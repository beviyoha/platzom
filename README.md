# Platzom
Platzom es un idioma inventado para el [curso de fundamentos de javascript](https://platzi.com/js).

## Descripción del idioma
- Si la primera palabra termina en "ar", se le quitan esos dos caractéres.
- Si la palabra inica con Z, se le añade "pe" al final.
- Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión medio.
- Si la palabra original es un palíndromo ninguna regla anterior cuenta y se desuelve la misma palabra intercalando mayúscula y minúscula.


## Instalación

```
npm install platzom
```

## Uso
```
import platzom from 'platzom'

platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarpe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

# Créditos

- [Yohanna Bevilacqua](https://twitter.com/beviyoha)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
