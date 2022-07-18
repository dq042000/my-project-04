# 安裝方式

## docker 設定檔

```bash
cp docker-compose.yml.sample docker-compose.yml
```

## 啟動 docker

```bash
docker-compose up -d --build
```

## 安裝 vue library

```bash
docker exec -ti my-project-04_vite_1 yarn
```

## 執行 vue

```bash
docker exec -ti my-project-04_vite_1 yarn dev
```

## 網站

```
http://localhost:3000/
```