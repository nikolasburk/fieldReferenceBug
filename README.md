# `fieldReference` bug

## Setup

```
npm install
npx prisma migrate dev --name init
npx ts-node seed.ts
```

Now run the following a few times in a row:

```
npx ts-node script.ts
```

## Expected behaviour

`published` should change with every invokation.

## Actual behaviour

`published` remains `false` with every invokation. 