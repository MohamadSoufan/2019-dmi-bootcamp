# 2021-dmi-bootcamp
2021 Bootcamp Materials

## Run API
```
> cd scores-api
> npm i -g @babel/node
> npm install
> npm run start
```

**Endpoints**

* http://localhost:3000/scores/mlb - MLB
  - ?date=YYYYMMDD - filter by date
* http://localhost:3000/scores/mlb/:gameId - MLB Game Summary (box score)
* http://localhost:3000/scores/wwc - Women's World Cup
  - ?date=YYYYMMDD - filter by date
* http://localhost:3000/scores/wwc/:gameId - Women's World Cup Game Summary

* http://localhost:3000/scores/soccer/epl - EPL
  - ?date=YYYYMMDD - filter by date
* http://localhost:3000/scores/soccer/epl/:gameId - EPL Game Summary (box score)


## UI

Drop this in index.html

```
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css">
```
