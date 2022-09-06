# 🌈 Styling

```
styles
│   global.scss
│
└───variables
│   │   index.scss          [The main entry file which import all files inside variables foler.]
│   │   colors.scss         [Color variables, mixins, functions are here.]
│   │   components.scss     [Component-level variables, mixins, functions, classes are here.]
│   │   utilities.scss      [Utility-level variables, mixins, functions, classes are here.]
│   │   fonts.scss          [Font classes and @font-faces are here]
│   │   keyframes.scss      [All keyframes are here.]
│   │   timings.scss        [Timing functions are here.]
│   │   screens.scss        [All media screen related things are here.]
```

_Note: All vars, mixins, funcs, classes defined inside [/variables]() can be used in all **.scss** files without importing._
<br />

## Utility Mixins

### - flex(direction, wrap: optional) & iflex(direction, wrap: optional)

```scss
.button {
  @include iflex(column);
}
.gallery {
  @include flex(row, wrap);
}
```

### - flex-align(justify-content, align-items: optional)

```scss
.nf {
  @include flex-align(flex-start, stretch);
}
```

### - space($x:space) & space($y:space)

Like gap-x & gap-y. But work for `flex`, `block`.

```scss
.form {
  @include space($y: 2rem);
}

.navbar {
  @include space($x: 1.5rem);
}

// Output
.form > :not(:last-child) {
  margin-bottom: 2rem;
}

.navbar > :not(:last-child) {
  margin-right: 1.5rem;
}
```

### - ring(width, color, offset-width:optional, offset-color: optional)

Create outline ring with box-shadow. If you don't know what ring is [click here](https://www.youtube.com/watch?v=ZbefZhgq9iQ).

- offset-color ⇒ Default: `⬜ #fff`

```scss
.input:focus {
  @include ring(3px, #3761d4, 2px);
}
```

### - box(width, height, radius: optional)

```scss
.button {
  @include box(200px, 20px, 10px);
}
```

### - let( (name1:value1, name2:value2) )

Declares multiple native css variables. Note double `()`.

```scss
.button {
  @include let(
    (
      'o': 1,
      'h': 2,
    )
  );
}

// Output
.button {
  --o: 1;
  --h: 2;
}
```

<br />

## Screens

```scss
$sm: 640px;
$md: 768px;
$lg: 1024px;
$xl: 1280px;
$xxl: 1536px;
```

```scss
.button {
  color: red;
  @include screen-sm {
    color: blue;
  }
  @include screen(840px) {
    font-size: 1.5rem;
  }
}

// Output
.button {
  color: red;
}
@media (min-width: 640px) {
  .button {
    color: blue;
  }
}
@media (min-width: 840px) {
  .button {
    font-size: 1.5rem;
  }
}
```
