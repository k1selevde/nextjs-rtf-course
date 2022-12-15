### NextJS course

1) Запуск локально
   - создать файл `.env`, вставить в него переменную для подключения к бд, заменив данные на свои.
     `DATABASE_URL=postgresql://test:test@localhost:5432/test?schema=public`
   - ```npm i```
   - ```npx prisma db push``` (если что-то пойдет не так запустить предварительно миграции)
   - выполнить ```npx prisma studio``` и вручную выполнить наполнение тестовыми данными
   - выполнить на выбор ```npm run dev``` / ```npm run build``` + ```npm run start```
   - нажать на ссылку "К тесту"

![img_2.png](demo/img_2.png)

![img.png](demo/img.png)
