# Stiches

## Custom styles for theme

```js
const myTheme = createTheme({});

const Button = styled('button', {
  borderRadius: '9999px',
  fontSize: '13px',
  border: '0',

  [`.${myTheme} &`]: {
    backgroundColor: '$blue',
  },
});
```

## Custom classes

```js
const Button = styled('button', {
  // base styles

  '&.custom-class': {
    boxShadow: '0 0 0 3px blueviolet',
  },
});

() => <Button className="custom-class">Button</Button>;
```