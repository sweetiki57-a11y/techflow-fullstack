# Project

Мультимодульный проект с backend на Spring Boot и frontend на React + Vite.

## Структура проекта

```
project/
├── backend/                 # Spring Boot модуль
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/       # Java исходники
│   │   │   └── resources/  # Конфигурация
│   │   └── test/           # Тесты
│   └── pom.xml             # Maven конфигурация модуля
├── frontend/               # React + Vite модуль
│   ├── src/                # React компоненты
│   ├── public/             # Статические файлы
│   ├── package.json        # npm конфигурация
│   └── vite.config.ts      # Vite конфигурация
├── pom.xml                 # Родительский Maven POM
└── README.md
```

## Требования

- **Java**: 17+
- **Maven**: 3.8+
- **Node.js**: 18+
- **npm**: 9+

## Запуск Backend

### Через Maven

```bash
cd backend
mvn spring-boot:run
```

### Или сборка и запуск JAR

```bash
cd backend
mvn clean package
java -jar target/backend-1.0.0-SNAPSHOT.jar
```

Backend будет доступен на: `http://localhost:8080`

### API endpoints

- `GET /api/health` - проверка состояния сервера

## Запуск Frontend

### Установка зависимостей

```bash
cd frontend
npm install
```

### Режим разработки

```bash
cd frontend
npm run dev
```

Frontend будет доступен на: `http://localhost:5173`

### Сборка для production

```bash
cd frontend
npm run build
```

Собранные файлы будут в папке `frontend/dist/`

## Запуск обоих модулей

Для полноценной работы приложения запустите оба модуля в разных терминалах:

**Терминал 1 - Backend:**
```bash
cd backend
mvn spring-boot:run
```

**Терминал 2 - Frontend:**
```bash
cd frontend
npm install  # только при первом запуске
npm run dev
```

## Конфигурация

### Backend

Основная конфигурация в `backend/src/main/resources/application.yml`:
- Порт сервера: 8080
- CORS настроен для `http://localhost:5173`

### Frontend

Конфигурация Vite в `frontend/vite.config.ts`:
- Порт dev-сервера: 5173
- Proxy для API запросов на `http://localhost:8080`

## Разработка

### Сборка всего проекта через Maven

```bash
# Из корневой директории
mvn clean install
```

### Запуск тестов backend

```bash
cd backend
mvn test
```

### Линтинг frontend

```bash
cd frontend
npm run lint
```

