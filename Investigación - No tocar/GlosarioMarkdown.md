# Guía Completa de Sintaxis Markdown

Esta guía sirve como referencia rápida para la documentación técnica y notas personales.

---

## 1. Párrafos y Saltos de Línea
En Markdown, los **párrafos** se crean simplemente escribiendo texto plano. Para separar un párrafo de otro, debes dejar una **línea en blanco** entre ellos.

- **Salto de línea suave:** Si quieres bajar a la siguiente línea sin crear un nuevo párrafo, añade **dos espacios** al final de la línea o usa una barra invertida `\` justo antes de pulsar Enter.

---

## 2. Títulos (Headings)
Usa el símbolo `#` seguido de un espacio.
```markdown
# Título Principal (H1)
## Sección (H2)
### Subsección (H3)
#### Nivel 4 (H4)
##### Nivel 5 (H5)
###### Nivel 6 (H6)
```

---

## 3. Énfasis de Texto
| Estilo | Sintaxis | Ejemplo |
| :--- | :--- | :--- |
| **Negrita** | `**texto**` o `__texto__` | **Texto fuerte** |
| *Cursiva* | `*texto*` o `_texto_` | *Texto inclinado* |
| ~~Tachado~~ | `~~texto~~` | ~~Texto borrado~~ |
| ***Negrita y Cursiva*** | `***texto***` | ***Énfasis máximo*** |

---

## 4. Listas
### Desordenadas
Usa `-`, `*` o `+`.
- Elemento 1
- Elemento 2
  - Sub-elemento A
  - Sub-elemento B

### Ordenadas
Usa números seguidos de un punto.
1. Primero
2. Segundo
3. Tercero

### Listas de Tareas (Checklists)
- [x] Tarea completada
- [ ] Tarea pendiente

---

## 5. Enlaces e Imágenes
- **Enlace:** `[Texto del enlace](URL "Título opcional")` -> [Google](https://www.google.com)
- **Imagen:** `![Texto alternativo](Ruta_o_URL_de_imagen)`

---

## 6. Citas (Blockquotes)
Usa el signo `>` al inicio de la línea.
> "La simplicidad es la máxima sofisticación." - Leonardo da Vinci

---

## 7. Código
### Código en línea
Usa una comilla invertida (\`) para `resaltar variables o comandos`.

### Bloques de código
Usa tres comillas invertidas (\` \` \`) y el nombre del lenguaje para tener color:
```python
def saludar():
    print("Hola, Markdown")
```

---

## 8. Tablas
Usa `|` para separar columnas y `-` para la fila de cabecera. Puedes alinear el contenido con `:`.
```markdown
| Herramienta | Uso | Nivel |
| :--- | :---: | ---: |
| VS Code | Editor | Pro |
| Markdown | Formato | Fácil |
```
*(Izquierda: `:---` | Centro: `:---:` | Derecha: `---:`) *

---

## 10. Otros Elementos
- **Línea horizontal:** Usa tres guiones `---` o asteriscos `***`.
- **Escapado de caracteres:** Si quieres escribir un símbolo que Markdown usa (como `#` o `*`) sin que se formatee, pon una barra invertida delante: `\#`.
- **Notas al pie:** `[^1]` y luego al final `[^1]: Contenido de la nota`. (Depende del visor).

---
*Documentación generada para Proyecto Montechico.*
