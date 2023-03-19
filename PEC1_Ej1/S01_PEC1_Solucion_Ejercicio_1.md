---
title: "PEC 1. Desarrollo front-end con framew. JavaScript"
subtitle: "Ejercicio 1"
date: "Marzo de 2023"
author: "Ignacio Casares Ruiz"
documentclass: scrreprt
colorlinks: true
header-includes:
 - \usepackage{fvextra}
 - \DefineVerbatimEnvironment{Highlighting}{Verbatim}{breaklines,commandchars=\\\{\}}
 - \renewcommand{\figurename}{Imagen}
---

## 1

__¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.__

Las etiquetas en HTML permiten establecer los elementos que conformarán la página. Estas permiten:

* Estructurar. Dividir los elementos en etiquetas permiten que la página adquiera una estructura coherente y lógica a partir de la cual se desarrollará la misma.
* Identificar. Las etiquetas poseen nombres específicos que ayudarán a identificar la funcionalidad de cada elemento. Esto permitirá, tanto a desarrolladores como a revisores, tener un índice visual a partir del cual podrán reconocer la utilidad que tiene cada elemento.
* Configurar. Las etiquetas pueden ser configuradas de forma que se les puede otorgar clases o atributos que permiten su modificación y configuración, con el objetivo de obtener un mayor nivel de personalización del elemento.

__Cita al menos 3 `APIs` `HTML5` y explica brevemente su funcionalidad.__

* La API de geolocalización ([Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)) permite al usuario proporcionar información sobre su localización a aplicaciones web.
* [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API). Esta permite poder arrastrar elementos y colocarlos en un elemento diferente utilizando el ratón.
* [HTML Sanitizer API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API). Esta permite convertir `strings` no fiables en HTML y modificarlos para que se puedan insertar de forma segura en el DOM de un documento.

__Cita qué opción `CSS3` para conseguir que se apliquen diferentes estilos `CSS` sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).__

Esto puede realizarse a través de la inclusión de `media` _queries_. Estas pueden configurarse de forma que a un elemento se le apliquen diferentes reglas en función de lo establecido en la _query_. Si queremos, por ejemplo, ajustar el peso (propiedad _font-weight_) de la letra en función de la tamaño de la pantalla realizaríamos la siguiente `media` _query_:

```css
@media only screen and (min-width: 641px) {
    h1 {
        font-weight: bold;
    }
}
```

Esta regla se aplicará a aquellos dispositivos con una anchura mínima de 641 píxeles, y aplicará la declaración `font-weight: bold;` a los elementos `h1`.

__Cita al menos 4 de las características principales de `TypeScript` (importante superset de `Javascript` que trataremos en el siguiente capítulo)__

* TypeScript es simplemente JavaScript. Esto quiere decir que TypeScript proporciona la estructura básica para poder construir algo que eventualmente se definirá en JS. Por ello, todo el código TS acabará siendo convertido a JS a la hora de su ejecución. 
* TypeScript proporciona tipos. JavaScript no tiene tipos por defecto, lo cual puede dar problemas en proyectos de gran complejidad. Esta desventaja es compensada a través de JavaScript, que permite la utilización de esta característica.
* TypeScript permite el uso de librerías de JS. Al utilizar JS como fundamento, todas las librerías utilizables en JS pueden ser reusadas en TS.
* Javascript también es TypeScript. Esto quiere decir que todo código escrito en JS puede ser renombrado como TS y compilado junto con el resto de código TS.

## 2

__El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores `CSS`, que ofrecen evidentes ventajas.__

* __Cita al menos 2 de estos preprocesadores__.

Dos de los preprocesadores CSS más utilizados y reconocidos pueden ser [Sass](https://sass-lang.com/) y [Less](https://lesscss.org/).

* __Cita al menos 4 ventajas que ofrecen estos preprocesadores__

Sass permite crear funciones, algo que no es posible en vanilla CSS. Esto habitúa la posibilidad de crear estilos complejos definidos a través de lo descrito en la función. Un ejemplo sería:

```scss
@function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}
```

Sass permite aplicar las mismas propiedades a diferentes reglas a través de la opción de `mixins`. Estos, permiten, además, la utilización de argumentos. Ejemplo:

```scss
=left($dist) 
  float: left;
  margin-left: $dist;

#data 
  +left(10px);
```

Sass permite también la utilización de _nesting_, lo cual no es posible en CSS. Ejemplo:

```scss
table.hl {
  margin: 2em 0;
  td.ln {
    text-align: right;
  }
}
```

Adicionalmente, los preprocesadores CSS permiten mantener el código a largo plazo de forma más sencilla. Al ser este compilado antes de ser convertido a CSS, estos aplicarán cualquier cambio que haya sido introducido al estándar CSS y eliminará o adaptará el código que se encuentre obsoleto durante el proceso de compilación.


* __Explica brevemente en qué consisten los sourcemaps__

Un sourcemap se usa en el contexto de utilización de aplicaciones que realicen una transformación de nuestro código. Cuando esto ocurre, es difícil realizar debugging para saber cómo funciona. Los sourcemaps permiten establecer un vínculo entre el origen del código y su expresión en el código ya transformado. Por ejemplo, al utilizar el module bundler Webpack, el código final generado dista mucho del original en cuanto a que ha realizado una serie de aplicaciones sobre este. Sin embargo, Webpack ofrece archivos de sourcemap de forma que este código pueda identificarse en caso de necesitar debugging. 

* __Explica qué es un transpilador__

Un transpilador es un programa que toma como origen código escrito en un lenguaje y realiza modificaciones sobre este o lo traduce a un lenguaje distinto, siempre dentro de lenguajes que operen en el mismo nivel de abstracción aproximado.

## 3

__El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos__

* __Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos__

Entre los sistemas de control de versiones podemos mencionar Git y Mercurial como dos ejemplos.

Dos herramientas de gestión de módulos serían Parcel y Webpack.

* __Cita y explica al menos 3 comandos de `Git`__

`git add` añade los últimos cambios realizados a la fase _staged_.
`git commit` guarda los cambios en tu repositorio local, incluyendo una breve descripción de los cambios que se han hecho.
`git push` sube los cambios realizados en el repositorio local al repositorio remoto.

* __Cita y explica brevemente las características más definitorias de `WebPack`.__

Webpack es un _module bundler_ que permite organizar tu proyecto en módulos. Webpack toma los módulos con dependencias y genera _assets_ estáticos con la información que se encuentra en esos módulos.

