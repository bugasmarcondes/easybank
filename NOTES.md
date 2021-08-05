## Selectors

```scss
&__title,
&__description {
}

&:hover {
}

&.col2 {
}

&--pr {
}

&::before {
}

> span:last-child {
}

> span:nth-child(2) {
}

&:not(:last-child) {
}

&:not(:last-child) {
  margin-bottom: 3px;
}
```

## Mixins

Allow you to define styles that can be re-used throughout your stylesheet

```scss
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
@mixin horizontal-list {
  @include reset-list;
  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: 2em;
    }
  }
}
nav ul {
  @include horizontal-list;
}
```

## Code examples

```scss
// app/scss/_functions.scss
@function calculateRem($size) {
  $remSize: $size / 16px;
  @return #{$remSize}rem;
}
@function calculateEm($size) {
  $emSize: $size / 16px;
  @return #{$emSize}em;
}

// app/scss/_globals.scss
html {
  font-size: 100%;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Public Sans', sans-serif;
  font-size: $font-sm;
  font-weight: 300;
  color: $grayishBlue;
  line-height: 1.3;
}
a,
a:visited,
a:hover {
  text-decoration: none;
}
.flex {
  display: flex;
  &-jc-sb {
    justify-content: space-between;
  }
  &-ai-c {
    align-items: center;
  }
}
button,
.button {
  padding: calculateRem(14px) calculateRem(35px);
  background-image: linear-gradient(to right, $limeGreen, $brightCyan);
  border: 0;
  border-radius: 50px;
  cursor: pointer;
  color: $white;
  font-weight: 400;
}
.hide-for-mobile {
  @include breakpoint-down(medium) {
    display: none;
  }
}
.hide-for-desktop {
  @include breakpoint-up(large) {
    display: none;
  }
}

// app/scss/_mixins.scss
$breakpoints-up: (
  'medium': calculateEm(640px),
  'large': calculateEm(1024px),
  'xlarge': calculateEm(1400px),
);
$breakpoints-down: (
  'small': calculateEm(639px),
  'medium': calculateEm(1023px),
  'large': calculateEm(1399px),
);
@mixin breakpoint-up($size) {
  @media (min-width: map-get($breakpoints-up, $size)) {
    @content;
  }
}
@mixin breakpoint-down($size) {
  @media (max-width: map-get($breakpoints-down, $size)) {
    @content;
  }
}

// app/scss/_variables.scss
$white: hsl(0, 0%, 100%);
$font-sm: calculateRem(14px);
$font-med: calculateRem(18px);
$font-lg: calculateRem(20px);
$font-xlg: calculateRem(52px);
$ms-slow: 600ms;
$ms-fast: 300ms;
```
