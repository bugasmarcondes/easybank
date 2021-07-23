## Suggested folder structure

- app
  - js
    - script.js
  - scss
    - style.scss (import all the partials '\_')
    - \_globals.scss (flexbox, buttons, visibility, grid + spacing, titles,
      reset)
    - \_variables.scss (colors, font-sizes)
    - \_mixins.scss (breakpoints)
    - \_animations.scss (keyframes)
    - \_<module-name>.scss
      - use BEM (block, element, modifier)

## Emmet

- link:css
- script:src

## Extensions

Live Sass Compiler

- Can be customized to export files to '/dist' folder
- Click on
  - Watch Sass files
  - Go Live

## Comments

- header>nav
- header>nav>a (logo, hamburguer, request button)
- header>nav>div>a\*6 for the multiple buttons
